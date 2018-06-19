import Uploader from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

import {reader} from './reader'

const upload = async ({items = [], domain}) => {
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

export default compose(
  withState('stateOpenDialog', 'setStateOpenDialog', false),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handleDropPaper: props => async evt => {
      evt.stopPropagation()
      evt.preventDefault()
      props.setStateOpenDialog(false)
      await upload({
        items: evt.dataTransfer.files,
        domain: props.domain
      })
    },
    handleDragOverPaper: props => evt => {
      evt.stopPropagation()
      evt.preventDefault()
      evt.dataTransfer.dropEffect = 'copy'
    },
    handleClickFlatButon: ({setStateOpenDialog}) => () =>
      setStateOpenDialog(true),
    handleDialogClose: ({stateOpenDialog, setStateOpenDialog}) => () =>
      setStateOpenDialog(!stateOpenDialog),
    handleInputChange: props => async evt => {
      props.setStateOpenDialog(false)
      await upload({
        items: evt.target.files,
        domain: props.domain
      })
    }
  })
)(Uploader)
