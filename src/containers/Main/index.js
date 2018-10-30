import React ,{Component} from 'react'
import { connect } from 'react-redux'
import './index.css'
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
            <div className="bg">
                <div className="top">
                    <div className="top1" onClick={()=>{this.changeTab(1)}}>TAB111</div>
                    <div className="top1" onClick={()=>{this.changeTab(2)}}>TAB2</div>
                    <div className="top1" onClick={()=>{this.changeTab(3)}}>TAB333</div>
                    <div className="top1" onClick={()=>{this.changeTab(4)}}>TAB4444</div>
                    <div className="top1" onClick={()=>{this.changeTab(5)}}>TAB5</div>
                </div>
                {/* <div onClick={()=>{this.props.onFetchDetail('2')}}>fetch Detail</div> */}
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