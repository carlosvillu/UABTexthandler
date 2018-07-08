import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import {Tabs, Tab} from 'material-ui/Tabs'
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
    handleChangeTab: PropTypes.func,
    handleInitQuiz: PropTypes.func,
    i18n: PropTypes.object,
    setStateText: PropTypes.func,
    stateTab: PropTypes.string,
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
      // handleChangeTab,
      handleInitQuiz,
      // i18n,
      // stateTab,
      stateText
    } = this.props

    // console.log(this.props.stateEvaluation)

    return (
      <div className="Home">
        <Helmet />
        <div className="Home-Body">
          <CanvasTexto student={stateText.student}>
            {stateText.normalize}
          </CanvasTexto>
          <Quiz onInit={handleInitQuiz} onChange={handleChangeQuiz} />
        </div>
        {/* <Tabs value={stateTab} onChange={handleChangeTab}>
          <Tab label={i18n.t('HOME_TEXT')} value={Home.TEXT_TAB}>
            <CanvasTexto student={stateText.student}>
              {stateText.normalize}
            </CanvasTexto>
          </Tab>
          <Tab label={i18n.t('HOME_QUESTIONS')} value={Home.QUESTIONS_TAB}>
            <Quiz onInit={handleInitQuiz} onChange={handleChangeQuiz} />
          </Tab>
        </Tabs> */}
        <div className="Home-buttons">
          <FlatButton label="Saltar texto" />
          <RaisedButton label="Guardar y seguir" primary style={{margin: 12}} />
        </div>
      </div>
    )
  }
}

export default Home
