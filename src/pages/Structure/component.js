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
    setStateNoMoreTexts: PropTypes.func,
    setStateText: PropTypes.func,
    stateDisableButtons: PropTypes.bool,
    stateNoMoreTexts: PropTypes.bool,
    stateText: PropTypes.object
  }

  async componentDidMount() {
    const user = await this.props.domain.get('current_users_use_case').execute()
    const {STRUCTURE} = this.props.domain.get('config').get('TYPE_EVALUATIONS')
    const text = await this.props.domain
      .get('get_next_evaluation_texts_use_case')
      .execute({user, type: STRUCTURE})

    this.props.setStateText(text)
    !text && this.props.setStateNoMoreTexts(true)
  }

  render() {
    const {
      handleChangeQuiz,
      handleClickFlatButton,
      handleClickRaisedButton,
      handleInitQuiz,
      i18n,
      stateDisableButtons,
      stateNoMoreTexts,
      stateText
    } = this.props

    return (
      <div className="Structure">
        <Helmet />
        <div className="Structure-Body">
          <div className="Structure-BodyCanvas">
            {stateText ? (
              <CanvasTexto text={stateText} prompt={stateText.prompt}>
                {stateText.normalize}
              </CanvasTexto>
            ) : (
              <h2>
                {i18n.t(
                  !stateNoMoreTexts
                    ? 'HOME_LOOKING_TEXTS'
                    : 'HOME_NO_MORE_TEXTS'
                )}
              </h2>
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
                  disabled={stateDisableButtons}
                  onClick={handleClickFlatButton}
                />
                <RaisedButton
                  label="Guardar y seguir"
                  onClick={handleClickRaisedButton}
                  primary
                  disabled={stateDisableButtons}
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
