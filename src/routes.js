import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

import domain from './domain/instance'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadSigninPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Signin" */ './pages/Signin')
)

const loadSignupPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Signup" */ './pages/Signup')
)

const requireAuth = async (nextState, replace, cb) => {
  const user = await domain.get('current_users_use_case').execute()
  if (!user) {
    replace('/signin')
  }
  return cb()
}

const redirectToHome = async (nextState, replace, cb) => {
  const user = await domain.get('current_users_use_case').execute()
  if (user) {
    replace('/')
  }
  return cb()
}

export default (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path='/'>
        <IndexRoute getComponent={loadHomePage} />
        <Route path='signin' getComponent={loadSigninPage} />
        <Route path='signup' getComponent={loadSignupPage} />
      </Route>
    </Route>
  </Router>
)
