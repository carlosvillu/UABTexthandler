import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import CanvasTexto from '../../components/CanvasTexto'
import StructureQuiz from '../../components/StructureQuiz'

class Structure extends React.PureComponent {
  static TEXT_TAB = 'text'
  static QUESTIONS_TAB = 'questions'
  static propTypes = {
    domain: PropTypes.object,
    handleChangeQuiz: PropTypes.func,
    handleClickFlatButton: PropTypes.func,
    handleClickRaisedButton: PropTypes.func,
    handleInitQuiz: PropTypes.func,
    i18n: PropTypes.object,
    setStateText: PropTypes.func,
    stateText: PropTypes.object
  }

  async componentDidMount() {
    const user = await this.props.domain.get('current_users_use_case').execute()
    const text = await this.props.domain
      .get('get_next_evaluation_texts_use_case')
      .execute({user, type: 'structure'})
    this.props.setStateText(text)
  }

  render() {
    const {
      handleChangeQuiz,
      handleClickFlatButton,
      handleClickRaisedButton,
      handleInitQuiz,
      i18n,
      stateText
    } = this.props

    return (
      <div className="Structure">
        <Helmet />
        <div className="Structure-Body">
          <div className="Structure-BodyCanvas">
            {stateText ? (
              <CanvasTexto
                student={stateText.student}
                prompt={stateText.prompt}
              >
                {stateText.normalize}
              </CanvasTexto>
            ) : (
              <h2>{i18n.t('HOME_LOOKING_TEXTS')}</h2>
            )}
          </div>
          <div className="Structure-BodyQuiz">
            <StructureQuiz
              onInit={handleInitQuiz}
              onChange={handleChangeQuiz}
            />
            {stateText && (
              <div className="Structure-buttons">
                <FlatButton
                  label="Saltar texto"
                  onClick={handleClickFlatButton}
                />
                <RaisedButton
                  label="Guardar y seguir"
                  onClick={handleClickRaisedButton}
                  primary
                  style={{margin: 12}}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Structure
