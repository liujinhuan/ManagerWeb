import React ,{Component} from 'react'
import { connect } from 'react-redux'
import './index.less'
import {fetchTest} from '../../actions/detail'

class News extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
    renderLi(){
        // console.log('news------',this.props.news && this.props.news.testDetail[1].channellist)
        return this.props.news.testDetail[1].channellist.map((value,index)=>{
            return <li key={index}>{value.name}</li>
        })
    }
    render(){
        // console.log('news------',this.props.news && this.props.news.testDetail)
        return (
            <div className="news">
                <div className="inner">
                    <p className="title">服务</p>
                    <p className="time">服务时间：周一至周五8：00-18：00</p>
                    <div className='item-all'>
                        <div className="inner-item">
                            <div className="itemimg"></div>
                            <div className="iteminfo">
                                <span className="itemname">微信</span>
                                <span className="itemnum">weixin@2018</span>
                            </div>
                        </div>
                        <div className="inner-item">
                            <div className="itemimg2"></div>
                            <div className="iteminfo">
                                <span className="itemname">邮件</span>
                                <span className="itemnum">email@2018.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state =>{
    return {
        news: state.detailResucer
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onFetchNews:()=>{
            dispatch(fetchTest())
        }
    }
}

const VisibleNews = connect(mapStatetoProps,mapDispatchToProps)(News)

export default VisibleNews