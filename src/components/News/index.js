import React ,{Component} from 'react'
import './index.css'
import kldy from './img/kldy.png'

export default class News extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        return (
            <div>
                News
                <img src={kldy} className="flag"/>
                <img src={require('./img/glby.png')} className="flag"/>
            </div>
        )
    }
}