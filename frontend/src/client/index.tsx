import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import App from './containers/App'
import { configureStore } from './store'

// prepare store
const history = createBrowserHistory()
const store = configureStore(history)

export const MainApp = hot(module)(() => (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
))


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
