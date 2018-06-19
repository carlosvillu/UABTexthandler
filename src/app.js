import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'
import {fb} from './domain/instance'

import './styles/index.scss'

window.__FB__ = fb

contextFactory(createClientContextFactoryParams()).then(context => {
  const App = withContext(context)(Router)
  const render = () =>
    ReactDOM.render(
      <App routes={routes} history={browserHistory} />,
      document.getElementById('app')
    )

  fb.auth().onAuthStateChanged(user => {
    console.log('UserApp', user)
    render()
  })
})
