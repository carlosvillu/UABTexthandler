import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Signup = ({
  domain,
  handlerButtonSubmit,
  i18n,
  setStateEmail,
  setStateName,
  setStatePassword,
  stateEmail,
  stateName,
  statePassword
}) => (
  <div className="Signup">
    <div className="Signup-form">
      <h3 className="Signup-label">{i18n.t('SIGNUP')}</h3>
      <TextField
        className="Signup-input"
        hintText={i18n.t('SIGNUP_USERNAME_LABEL')}
        onChange={e => setStateName(e.target.value)}
        value={stateName}
      />
      <TextField
        className="Signup-input"
        hintText={i18n.t('SIGNUP_USER_LABEL')}
        onChange={e => setStateEmail(e.target.value)}
        value={stateEmail}
      />
      <TextField
        className="Signup-input"
        hintText={i18n.t('SIGNUP_PASSWORD_LABEL')}
        onChange={e => setStatePassword(e.target.value)}
        type="password"
        value={statePassword}
      />
      <RaisedButton
        fullWidth
        label={i18n.t('SIGNUP')}
        onClick={handlerButtonSubmit}
        primary
      />
    </div>
  </div>
)

Signup.propTypes = {
  domain: PropTypes.object,
  handlerButtonSubmit: PropTypes.func,
  i18n: PropTypes.object,
  setStateEmail: PropTypes.func,
  setStateName: PropTypes.func,
  setStatePassword: PropTypes.func,
  stateEmail: PropTypes.string,
  stateName: PropTypes.string,
  statePassword: PropTypes.string
}

export default Signup
