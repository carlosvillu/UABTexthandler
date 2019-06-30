import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const Home = ({i18n}) => (
  <div className="Home">
    <div className="Home-Buttons">
      <div className="Home-Button">
        <Link to="/quality" className="Home-Link">
          {i18n.t('HOME_BUTTON_QUALITY')}
        </Link>
      </div>
      <div className="Home-Button">
        <Link to="/structure" className="Home-Link">
          {i18n.t('HOME_BUTTON_STRUCTURE')}
        </Link>
      </div>
    </div>
  </div>
)

Home.propTypes = {
  i18n: PropTypes.object
}

export default Home
