import React ,{Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export default class Detail extends Component{
    constructor(props){
        super(props)
        this.state ={
           
        }
    }
    
    render(){
        return (
            <div id='detail'>
                <div className="link"><Link to='/list'>to List</Link></div>
                <div className="link"><Link to='/'>back home</Link></div>
            </div>
        )
    }
}