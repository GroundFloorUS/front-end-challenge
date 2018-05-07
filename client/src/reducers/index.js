import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import businesses from './businessReducer.js'


const rootReducer = combineReducers({ businesses, router})

export default rootReducer