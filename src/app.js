import React from 'react'
import ReactDOM from 'react-dom'

import {UI} from './state'
import {Provider} from 'unstated'

import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import {register} from '@s-ui/bundler/registerServiceWorker'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'
import {fb} from './domain/instance'

import './styles/index.scss'

window.__FB__ = fb

const ui = new UI()

contextFactory(createClientContextFactoryParams()).then(context => {
  const App = withContext(context)(Router)
  const render = () =>
    ReactDOM.render(
      <Provider inject={[ui]}>
        <App routes={routes} history={browserHistory} />
      </Provider>,
      document.getElementById('app')
    )

  fb.auth().onAuthStateChanged(user => {
    console.log('UserApp', user) // eslint-disable-line
    render()
  })
})

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
