import React ,{Component} from 'react'
import './index.css'

export default class Login extends Component{
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
            <div className="popWin">
                <div className="innerWin">Login</div>
            </div>
            
        )
    }
}