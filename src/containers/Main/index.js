import React ,{Component} from 'react'
import { connect } from 'react-redux'
import './index.less'
import Home from '../../components/Home/index.js'
import Game from '../../components/Game/index.js'
import News from '../../components/News/index.js'
import Service from '../../components/Service/index.js'
import Register from '../../components/Register/index.js'
import {fetchDetail} from '../../actions/detail'

class Main extends Component{
    constructor(props){
        super(props)
        this.state ={
            content:0,
            step:1
        }
    }
    
    changeTab = (index)=>{
        this.setState({
            step:index
        })
    }
    gotoHome = ()=>{
        this.setState({
            step:1
        })
    }
    render(){
        // console.log('2------',this.props.mainData)
        return (
            <div className="main">
                <div className="header">
                    <div className="item active" onClick={()=>{this.changeTab(1)}}><p className="ib">首页</p><p className="il">HOME</p></div>
                    <div className="item" onClick={()=>{this.changeTab(2)}}><p className="ibb">首页</p><p className="ill">HOME</p></div>
                    <div className="item" onClick={()=>{this.changeTab(3)}}><p className="ibb">首页</p><p className="ill">HOME</p></div>
                    <div className="item" onClick={()=>{this.changeTab(4)}}><p className="ibb">首页</p><p className="ill">HOME</p></div>
                </div>
                <div className="content">
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
                    {
                        this.state.step == 5 ? <Register gotoHome={()=>{this.gotoHome()}}></Register>:null
                    }
                </div>
                <div className="footer">
                    <div className="top">
                        <span className="info">关于我们</span><span className="line"></span>
                        <span className="info">关于我们</span><span className="line"></span>
                        <span className="info">关于我们</span><span className="line"></span>
                        <span className="info">关于我们</span><span className="line"></span>
                        <span className="info">关于我们</span><span className="line"></span>
                    </div>
                    <p className="mb20">2018 ALL Rights Resrverd *** 公司版权所有</p>
                    <p className="mb20">广东省深圳市南山区</p>
                    <p className="mb70">注意自我保护，谨防上当受骗</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    // console.log('mapStateToProps---',state)
    return {
        mainData: state.detailResucer
    }
}
const mapDispatchToProps = dispatch => {
    // console.log('mapDispatchToProps---',dispatch)
    return {
        onFetchDetail: id => {
            dispatch(fetchDetail(id))
        }
    }
}

const VisibleMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default VisibleMain