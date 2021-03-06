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

const loadStructurePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Structure" */ './pages/Structure')
)

const loadQualityPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Quality" */ './pages/Quality')
)

const loadSigninPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Signin" */ './pages/Signin')
)

const loadSignupPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Signup" */ './pages/Signup')
)

const loadAdminTextPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "AdminText" */ './pages/AdminText')
)

const loadAdminEvaliationsPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "AdminText" */ './pages/AdminEvaluations')
)

const loadAdminDashboardsPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "AdminDashboards" */ './pages/AdminDashboards')
)

const requireAuth = async (nextState, replace, cb) => {
  const user = await domain.get('current_users_use_case').execute()
  if (!user) {
    replace('/signin')
  }
  return cb()
}

const requireAdmin = async (nextState, replace, cb) => {
  const isAdmin = await domain.get('is_privileged_users_use_case').execute()
  if (!isAdmin) {
    replace('/')
  }
  cb()
}

const redirectToHome = async (nextState, replace, cb) => {
  const user = await domain.get('current_users_use_case').execute()
  if (user) {
    replace('/')
  }
  return cb()
}

const logout = async (nextState, replace, cb) => {
  await domain.get('logout_users_use_case').execute()
  replace('/signin')
  return cb()
}

export default (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} onEnter={requireAuth} />
        <Route
          getComponent={loadStructurePage}
          onEnter={requireAuth}
          path="structure"
        />
        <Route
          getComponent={loadQualityPage}
          onEnter={requireAuth}
          path="quality"
        />
        <Route path="admin" onEnter={requireAdmin}>
          <Route path="text" getComponent={loadAdminTextPage} />
          <Route path="evaluations" getComponent={loadAdminEvaliationsPage} />
          <Route path="dashboard" getComponent={loadAdminDashboardsPage} />
        </Route>
        <Route
          getComponent={loadSigninPage}
          onEnter={redirectToHome}
          path="signin"
        />
        <Route
          getComponent={loadSignupPage}
          onEnter={redirectToHome}
          path="signup"
        />
        <Route path="logout" onEnter={logout} />
      </Route>
    </Route>
  </Router>
)
