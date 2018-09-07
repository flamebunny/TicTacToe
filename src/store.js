import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'
import board from 'reducers/board'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  combineReducers({ board }),
  composeEnhancers(applyMiddleware(thunk)/*, persistState()*/)
)