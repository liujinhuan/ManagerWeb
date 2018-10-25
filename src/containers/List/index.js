import React ,{Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export default class List extends Component{
    constructor(props){
        super(props)
        this.state ={
           
        }
    }
    
    render(){
        return (
            <div>
                <div className="link"><Link to='/detail'>to detail</Link></div>
                <div className="link"><Link to='/'>back home</Link></div>
            </div>
        )
    }
}