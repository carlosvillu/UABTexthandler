import Uploader from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

import {reader} from './reader'

const uploadTexts = async ({items = [], domain}) => {
  const files = Array.from(items)
  const bodies = await Promise.all(files.map(reader))
  return Promise.all(
    Array.from(files).map((file, index) =>
      domain.get('upload_texts_use_case').execute({
        filename: file.name,
        body: bodies[index]
      })
    )
  )
}

const uploadPrompts = async ({items = [], domain}) => {
  const files = Array.from(items)
  const [body] = await Promise.all(files.map(reader))
  const [, ...prompts] = body.split('\n')
  prompts.map(line => {
    const [filename, prompt] = line.split(',')
    domain.get('upload_prompt_texts_use_case').execute({filename, prompt})
  })
}

export default compose(
  withState('stateOpenDialog', 'setStateOpenDialog', false),
  withState('stateShowSpinner', 'setStateShowSpinner', false),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleDropPaperTexts: props => async evt => {
      evt.stopPropagation()
      evt.preventDefault()
      props.setStateOpenDialog(false)
      await uploadTexts({
        items: evt.dataTransfer.files,
        domain: props.domain
      })
    },
    handleDropPaperPrompts: props => async evt => {
      evt.stopPropagation()
      evt.preventDefault()
      props.setStateOpenDialog(false)
      await uploadPrompts({
        items: evt.dataTransfer.files,
        domain: props.domain
      })
    },
    handleDragOverPaperTexts: props => evt => {
      evt.stopPropagation()
      evt.preventDefault()
      evt.dataTransfer.dropEffect = 'copy'
    },
    handleDragOverPaperPrompts: props => evt => {
      evt.stopPropagation()
      evt.preventDefault()
      evt.dataTransfer.dropEffect = 'copy'
    },
    handleClickFlatButon: ({setStateOpenDialog}) => () =>
      setStateOpenDialog(true),
    handleDialogClose: ({stateOpenDialog, setStateOpenDialog}) => () =>
      setStateOpenDialog(!stateOpenDialog),
    handleInputChangeTexts: props => async evt => {
      props.setStateOpenDialog(false)
      props.setStateShowSpinner(true)
      await uploadTexts({
        items: evt.target.files,
        domain: props.domain
      })
      props.setStateShowSpinner(false)
    },
    handleInputChangePrompts: props => async evt => {
      props.setStateOpenDialog(false)
      props.setStateShowSpinner(true)
      await uploadPrompts({
        items: evt.target.files,
        domain: props.domain
      })
      props.setStateShowSpinner(false)
    }
  })
)(Uploader)
