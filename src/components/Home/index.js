import React ,{Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            content:1
        }
    }
    change = (index)=>{
        this.setState({
            content:index
        })
    }
    render(){
        return (
            <div>
                <div className="center">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540400892129&di=52c58af509feb76d2de36ada5c5b57f8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0125fd5770dfa50000018c1b486f15.jpg%401280w_1l_2o_100sh.jpg" className="img"/>
                </div>
                <div className="bottom">
                    <div className="bleft">
                        <div className="bleftContainer">
                            <div className="top1" onClick={()=>{this.change(1)}}>新闻</div>
                            <div className="top1" onClick={()=>{this.change(2)}}>公告</div>
                        </div>
                        <div className="bleftbody">{this.state.content}</div>
                    </div>
                    <div className="bright">
                        <div className="bleftContainer">
                            <div className="top1">推荐游戏</div>
                        </div>
                        <div className="link"><Link to='/detail'>to detail</Link></div>
                        <div className="link" style={{marginTop:20}}><Link to='/list'>tolist</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}