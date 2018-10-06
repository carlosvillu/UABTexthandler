import Signin from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateEmail', 'setStateEmail', ''),
  withState('statePassword', 'setStatePassword', ''),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handlerButtonSubmit: ({
      domain,
      stateEmail,
      statePassword,
      router
    }) => async () => {
      await domain
        .get('login_users_use_case')
        .execute({
          email: stateEmail,
          password: statePassword
        })
        .catch(e => console.log(e)) // eslint-disable-line
      router.push('/')
    }
  })
)(Signin)
