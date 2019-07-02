import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'

import Link from 'react-router/lib/Link'

import PrivilegedUserMenu from '../PrivilegedUserMenu'

class LoggedMenu extends React.Component {
  static propTypes = {
    i18n: PropTypes.object,
    ui: PropTypes.object
  }
  render() {
    const {ui, i18n} = this.props
    return (
      <Drawer
        className="LoggedMenu"
        docked={false}
        onRequestChange={this.handleRequestChangeDrawer}
        open={ui.state.showMenu}
      >
        <AppBar showMenuIconButton={false} className="LoggedMenu-topbar" />
        <PrivilegedUserMenu />
        <Link
          to="/structure"
          className="LoggedMenu-link"
          onClick={this.handleClickLink}
        >
          <MenuItem primaryText={i18n.t('LOGGED_MENU_STRUCTURE_EVALUATION')} />
        </Link>
        <Link
          to="/quality"
          className="LoggedMenu-link"
          onClick={this.handleClickLink}
        >
          <MenuItem primaryText={i18n.t('LOGGED_MENU_QUALITY_EVALUATION')} />
        </Link>
        <Link
          to="/logout"
          className="LoggedMenu-link"
          onClick={this.handleClickLink}
        >
          <MenuItem primaryText={i18n.t('SIGNOUT')} />
        </Link>
      </Drawer>
    )
  }

  handleClickLink = () => {
    this.props.ui.showMenu(false)
  }

  handleClickIconMenu = () => {
    this.props.ui.showMenu(true)
  }

  handleRequestChangeDrawer = open => {
    this.props.ui.showMenu(open)
  }
}

export default LoggedMenu
