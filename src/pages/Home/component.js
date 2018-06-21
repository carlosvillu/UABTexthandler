import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {Tabs, Tab} from 'material-ui/Tabs'

import CanvasTexto from '../../components/CanvasTexto'

class Home extends React.PureComponent {
  static TEXT_TAB = 'text'
  static QUESTIONS_TAB = 'questions'
  static propTypes = {
    domain: PropTypes.object,
    handleChangeTab: PropTypes.func,
    i18n: PropTypes.object,
    setStateText: PropTypes.func,
    stateTab: PropTypes.string,
    stateText: PropTypes.string
  }

  async componentDidMount() {
    const text = await this.props.domain
      .get('get_next_evaluation_texts_use_case')
      .execute()
    this.props.setStateText(text.normalize)
  }

  render() {
    const {stateText, stateTab, handleChangeTab, i18n} = this.props
    return (
      <div className="Home">
        <Helmet />
        <Tabs value={stateTab} onChange={handleChangeTab}>
          <Tab label={i18n.t('HOME_TEXT')} value={Home.TEXT_TAB}>
            <CanvasTexto text={stateText} />
          </Tab>
          <Tab label={i18n.t('HOME_QUESTIONS')} value={Home.QUESTIONS_TAB} />
        </Tabs>
      </div>
    )
  }
}

export default Home
