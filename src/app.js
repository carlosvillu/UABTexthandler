import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'

import './styles/index.scss'

contextFactory(createClientContextFactoryParams()).then(context => {
  const App = withContext(context)(Router)
  ReactDOM.render(
    <App routes={routes} history={browserHistory} />,
    document.getElementById('app')
  )
})
