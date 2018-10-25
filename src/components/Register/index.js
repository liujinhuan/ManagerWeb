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
    gotoRegister = ()=>{
        alert("register success!!")
        this.props.gotoHome && this.props.gotoHome()
    }
    closeWin = ()=>{
        this.setState({
            isLogin:false
        })
    }
    render(){
        return (
            <div>
                <div className="btn" onClick={()=>{this.gotoRegister()}}>Register</div>
                <div className="btn" onClick={()=>{this.gotoLogin()}}>Login</div>
                {
                    this.state.isLogin ? <Login
                    closeWin = {()=>{this.closeWin()}}></Login>: null
                }
            </div>
            
        )
    }
}