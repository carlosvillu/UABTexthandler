import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Signin = ({
  domain,
  handlerButtonSubmit,
  i18n,
  setStateEmail,
  setStatePassword,
  stateEmail,
  statePassword
}) => (
  <form className="Signin">
    <div className="Signin-form">
      <h3 className="Signin-label">{i18n.t('SIGNIN')}</h3>
      <TextField
        value={stateEmail}
        onChange={e => setStateEmail(e.target.value)}
        className="Signin-input"
        hintText={i18n.t('SIGNIN_USER_LABEL')}
      />
      <TextField
        value={statePassword}
        onChange={e => setStatePassword(e.target.value)}
        className="Signin-input"
        hintText={i18n.t('SIGNIN_PASSWORD_LABEL')}
        type="password"
      />
      <RaisedButton
        label={i18n.t('SIGNIN')}
        primary
        fullWidth
        onClick={handlerButtonSubmit}
      />
      <Link to="/signup" className="Signin-signup">
        {i18n.t('SIGNUP_USER')}
      </Link>
    </div>
  </form>
)

Signin.propTypes = {
  domain: PropTypes.object,
  handlerButtonSubmit: PropTypes.func,
  i18n: PropTypes.object,
  setStateEmail: PropTypes.func,
  setStatePassword: PropTypes.func,
  stateEmail: PropTypes.string,
  statePassword: PropTypes.string
}

export default Signin
