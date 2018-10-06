import Signup from './component'
import PropTypes from 'prop-types'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateEmail', 'setStateEmail', ''),
  withState('statePassword', 'setStatePassword', ''),
  withState('stateName', 'setStateName', ''),
  getContext({domain: PropTypes.object, i18n: PropTypes.object}),
  withHandlers({
    handlerButtonSubmit: ({
      domain,
      history,
      router,
      stateEmail,
      stateName,
      statePassword
    }) => async () => {
      const user = await domain
        .get('create_users_use_case')
        .execute({
          email: stateEmail,
          name: stateName,
          password: statePassword
        })
        .catch(e => console.log(e)) // eslint-disable-line
      if (user) {
        router.push('/')
      }
    }
  })
)(Signup)
