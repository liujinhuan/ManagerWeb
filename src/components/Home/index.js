import React ,{Component} from 'react'
import './index.css'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
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
                        <div className="top1">推荐游戏</div>
                    </div>
                </div>
            </div>
        )
    }
}