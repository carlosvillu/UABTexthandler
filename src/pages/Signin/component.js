import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Signin = (
  {
    handlerButtonSubmit,
    setStateEmail,
    setStatePassword,
    stateEmail,
    statePassword
  },
  {i18n, domain}
) => (
  <div className="Signin">
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
    </div>
  </div>
)

Signin.contextTypes = {i18n: PropTypes.object, domain: PropTypes.object}
Signin.propTypes = {
  handlerButtonSubmit: PropTypes.func,
  setStateEmail: PropTypes.func,
  setStatePassword: PropTypes.func,
  stateEmail: PropTypes.string,
  statePassword: PropTypes.string
}

export default Signin
