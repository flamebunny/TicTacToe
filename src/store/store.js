import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import board from 'reducers/board'
import { inTestMode } from 'utils/development'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function createAppStore(initialState = null) {
  let args = [
    combineReducers({ board }),
    inTestMode() || true ? composeEnhancers(applyMiddleware(thunk)) : composeEnhancers(applyMiddleware(thunk), persistState())
  ]

  if (initialState) {
    args.splice(1, 0, initialState)
  }

  return createStore.apply(this, args)
}
