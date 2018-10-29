import React ,{Component} from 'react'
import { connect } from 'react-redux'
import './index.css'
import kldy from './img/kldy.png'
import {fetchTest} from '../../actions/detail'

class News extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
    renderLi(){
        console.log('news------',this.props.news && this.props.news.testDetail[1].channellist)
        return this.props.news.testDetail[1].channellist.map((value,index)=>{
            return <li key={index}>{value.name}</li>
        })
    }
    render(){
        console.log('news------',this.props.news && this.props.news.testDetail)
        return (
            <div>
                News
                <img src={kldy} className="flag"/>
                <img src={require('./img/glby.png')} className="flag" onClick={()=>{this.props.onFetchNews()}}/>
                <ul>{this.props.news.testDetail.length>0?this.renderLi():null}</ul>
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