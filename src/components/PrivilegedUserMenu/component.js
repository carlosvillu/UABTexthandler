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
    stateIsPrivileged: PropTypes.bool,
    ui: PropTypes.object
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
      <>
        <Link
          className="PrivilegedUserMenu-link"
          onClick={this.handleClickLink}
          to="/admin/text"
        >
          <MenuItem primaryText={i18n.t('ADMIN_TEXTS')} />
        </Link>
        <Link
          className="PrivilegedUserMenu-link"
          onClick={this.handleClickLink}
          to="/admin/evaluations"
        >
          <MenuItem primaryText={i18n.t('ADMIN_EVALUATION')} />
        </Link>
        <Divider />
      </>
    ) : null
  }

  handleClickLink = () => {
    this.props.ui.showMenu(false)
  }
}
