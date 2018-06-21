import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Link from 'react-router/lib/Link'
import LoggedMenu from '../LoggedMenu'

export default class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element,
    domain: PropTypes.object,
    i18n: PropTypes.object,
    setStateUser: PropTypes.func,
    stateUser: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    ui: PropTypes.object
  }

  componentDidMount() {
    const {domain, setStateUser} = this.props

    domain.get('current_users_use_case').execute()

    this.currentUsersUseCase$ = domain
      .get('current_users_use_case')
      .$.execute.subscribe(({params, result}) => {
        setStateUser(result)
      })
  }

  componentWillUnmount() {
    this.currentUsersUseCase$.dispose()
  }

  render() {
    const {children, i18n, stateUser} = this.props
    const IS_LOGGED = Boolean(Object.keys(stateUser).length)
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-content">
            <AppBar
              className="App-toolbar"
              showMenuIconButton={IS_LOGGED}
              onLeftIconButtonClick={this.handlerClickLeftIcon}
              style={{position: 'sticky', top: 0, left: 0}}
              title={<Link to="/">{i18n.t('APP_NAME')}</Link>}
            />
            <div className="App-container">{children}</div>
            {IS_LOGGED && <LoggedMenu />}
          </div>
          <div className="App-footer">
            <h3>Footer</h3>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

  handlerClickLeftIcon = () => {
    this.props.ui.showMenu(true)
  }
}
