import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'

import BusinessList from './components/BusinessList'
import BusinessPage from './components/BusinessPage'

const history = createHistory()
const store = configureStore(history)
console.log(store)
const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={BusinessList}/>
        <Route exact path='/businesses/:businessId/' component={BusinessPage}/>

      
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root