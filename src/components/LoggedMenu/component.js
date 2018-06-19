import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Divider from 'material-ui/Divider'

import Link from 'react-router/lib/Link'

import PrivilegedUserMenu from '../PrivilegedUserMenu'

const LoggedMenu = ({i18n}) => (
  <IconMenu
    className="LoggedMenu"
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <PrivilegedUserMenu />
    <Link to="/logout" className="LoggedMenu-link">
      <MenuItem primaryText={i18n.t('SIGNOUT')} />
    </Link>
  </IconMenu>
)

LoggedMenu.propTypes = {
  i18n: PropTypes.object
}

export default LoggedMenu
