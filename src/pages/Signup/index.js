import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Signup = (_, {i18n}) => (
  <div className='Signup'>
    <div className='Signup-form'>
      <h3 className='Signup-label'>{i18n.t('SIGNUP')}</h3>
      <TextField
        className='Signup-input'
        hintText={i18n.t('SIGNUP_USER_LABEL')}
      />
      <TextField
        className='Signup-input'
        hintText={i18n.t('SIGNUP_PASSWORD_LABEL')}
        type='password'
      />
      <RaisedButton label={i18n.t('SIGNUP')} primary fullWidth />
    </div>
  </div>
)

Signup.contextTypes = {i18n: PropTypes.object}

export default Signup
