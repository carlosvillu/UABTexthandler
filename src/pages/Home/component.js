import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const Home = ({i18n}) => (
  <div className="Home">
    <div className="Home-Buttons">
      <Link to="/quality" className="Home-Link">
        <div className="Home-Button">{i18n.t('HOME_BUTTON_QUALITY')}</div>
      </Link>
      <Link to="/structure" className="Home-Link">
        <div className="Home-Button">{i18n.t('HOME_BUTTON_STRUCTURE')}</div>
      </Link>
    </div>
  </div>
)

Home.propTypes = {
  i18n: PropTypes.object
}

export default Home
