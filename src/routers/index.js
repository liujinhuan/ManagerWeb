import React ,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import List from '../containers/List'
import Detail from '../containers/Detail'
import Main from '../containers/Main'

export default class Routes extends Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/list' component={List}></Route>
            </Switch>
        )
    }
}