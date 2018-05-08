import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import businessReducer from './businessReducer.js'


const rootReducer = combineReducers({ businesses: businessReducer, router})

export default rootReducer