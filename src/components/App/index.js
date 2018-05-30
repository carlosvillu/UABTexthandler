import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = ({children}, {i18n}) => (
  <MuiThemeProvider>
    <div className="App">
      <AppBar
        title={i18n.t('APP_NAME')}
        className="App-toolbar"
        showMenuIconButton={false}
      />{' '}
      <div className="App-container">{children}</div>
    </div>
  </MuiThemeProvider>
)

App.propTypes = {children: PropTypes.element}
App.contextTypes = {i18n: PropTypes.object}

export default App
