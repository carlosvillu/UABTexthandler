import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

export default class PrivilegedUserMenu extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    i18n: PropTypes.object,
    setStateIsPrivileged: PropTypes.func,
    stateIsPrivileged: PropTypes.bool
  }

  async componentDidMount() {
    const {domain, setStateIsPrivileged} = this.props
    const isPrivileged = await domain
      .get('is_privileged_users_use_case')
      .execute()
    setStateIsPrivileged(isPrivileged)
  }

  render() {
    const {i18n, stateIsPrivileged} = this.props
    return stateIsPrivileged ? (
      <React.Fragment>
        <Link className="PrivilegedUserMenu-link" to="/admin/text">
          <MenuItem primaryText={i18n.t('ADMIN_TEXTS')} />
        </Link>
        <Divider />
      </React.Fragment>
    ) : null
  }
}
