import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import CanvasTexto from '../../components/CanvasTexto'
import Quiz from '../../components/Quiz'

class Home extends React.PureComponent {
  static TEXT_TAB = 'text'
  static QUESTIONS_TAB = 'questions'
  static propTypes = {
    domain: PropTypes.object,
    handleChangeQuiz: PropTypes.func,
    handleClickFlatButton: PropTypes.func,
    handleClickRaisedButton: PropTypes.func,
    handleInitQuiz: PropTypes.func,
    setStateText: PropTypes.func,
    stateText: PropTypes.object
  }

  async componentDidMount() {
    const user = await this.props.domain.get('current_users_use_case').execute()
    const text = await this.props.domain
      .get('get_next_evaluation_texts_use_case')
      .execute({user})
    this.props.setStateText(text)
  }

  render() {
    const {
      handleChangeQuiz,
      handleClickFlatButton,
      handleClickRaisedButton,
      handleInitQuiz,
      stateText
    } = this.props

    return (
      <div className="Home">
        <Helmet />
        <div className="Home-Body">
          <CanvasTexto student={stateText.student}>
            {stateText.normalize}
          </CanvasTexto>
          <Quiz onInit={handleInitQuiz} onChange={handleChangeQuiz} />
        </div>
        <div className="Home-buttons">
          <FlatButton label="Saltar texto" onClick={handleClickFlatButton} />
          <RaisedButton
            label="Guardar y seguir"
            onClick={handleClickRaisedButton}
            primary
            style={{margin: 12}}
          />
        </div>
      </div>
    )
  }
}

export default Home
