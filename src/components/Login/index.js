import React ,{Component} from 'react'
import './index.css'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
    login = ()=>{
        alert("login success")
        this.props.closeWin && this.props.closeWin()
    }
    render(){
        return (
            <div className="popWin">
                <div className="innerWin"><div className="loginBtn" onClick={()=>{this.login()}}>Login</div></div>
            </div>
            
        )
    }
}