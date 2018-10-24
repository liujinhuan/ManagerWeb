import React ,{Component} from 'react'
import './index.css'
import Login from '../Login/index.js'

export default class Register extends Component{
    constructor(props){
        super(props)
        this.state ={
            isLogin: false
        }
    }
    gotoLogin = ()=>{
        this.setState({
            isLogin:true
        })
    }
    render(){
        return (
            <div>
                <div className="btn">Register</div>
                <div className="btn" onClick={()=>{this.gotoLogin()}}>Login</div>
                {
                    this.state.isLogin ? <Login></Login>: null
                }
            </div>
            
        )
    }
}