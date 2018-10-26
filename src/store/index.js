
import { createStore } from 'redux'
import reducers from '../reducers'
import {fetchDetail} from '../actions/detail'

const resultStore = createStore(reducers)

console.log('start store----',resultStore.getState())

const unsubscribe = resultStore.subscribe(() =>
    console.log('change store----',resultStore.getState())
)

// resultStore.dispatch(fetchDetail('1'))

export default resultStore