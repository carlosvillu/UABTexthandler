import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Signin = (_, {i18n}) => (
  <div className='Signin'>
    <div className='Signin-form'>
      <h3 className='Signin-label'>{i18n.t('SIGNIN')}</h3>
      <TextField
        className='Signin-input'
        hintText={i18n.t('SIGNIN_USER_LABEL')}
      />
      <TextField
        className='Signin-input'
        hintText={i18n.t('SIGNIN_PASSWORD_LABEL')}
        type='password'
      />
      <RaisedButton label={i18n.t('SIGNIN')} primary fullWidth />
    </div>
  </div>
)

Signin.contextTypes = {i18n: PropTypes.object}

export default Signin
