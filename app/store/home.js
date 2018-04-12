import { applyMiddleware,createStore } from 'redux'
import thunk from 'redux-thunk'
import { counter } from '../reducers/index'

// Store 
export const store = createStore(counter,applyMiddleware(thunk))