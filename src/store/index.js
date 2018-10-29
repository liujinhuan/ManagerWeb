
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
// import {fetchDetail,fetchTest} from '../actions/detail'

const resultStore = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
)

// console.log('start store----',resultStore.getState())

// const unsubscribe = resultStore.subscribe(() =>
//     console.log('change store----',resultStore.getState())
// )

// resultStore.dispatch(fetchTest())

export default resultStore