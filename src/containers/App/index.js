import React ,{Component} from 'react'
import './index.css'
import Home from '../../components/Home/index.js'
import Game from '../../components/Game/index.js'
import News from '../../components/News/index.js'
import Service from '../../components/Service/index.js'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            content:0,
            step:1
        }
    }
    change = (index)=>{
        this.setState({
            content:index
        })
    }
    changeTab = (index)=>{
        this.setState({
            step:index
        })
    }
    render(){
        return (
            <div className="bg">
                <div className="top">
                    <div className="top1" onClick={()=>{this.changeTab(1)}}>首页</div>
                    <div className="top1" onClick={()=>{this.changeTab(2)}}>咨询</div>
                    <div className="top1" onClick={()=>{this.changeTab(3)}}>游戏</div>
                    <div className="top1" onClick={()=>{this.changeTab(4)}}>客服</div>
                </div>
                {
                    this.state.step == 1 ?<Home></Home>:null
                }
                {
                    this.state.step == 2 ? <News></News>:null
                }
                {
                    this.state.step == 3 ? <Game></Game>:null
                }
                {
                    this.state.step == 4 ? <Service></Service>:null
                }
            </div>
        )
    }
}