import reducers from '../reducers'
import { createStore } from 'redux'
const resultStore = createStore(reducers,{})

export default resultStore