import React ,{Component} from 'react'
import fetch from 'isomorphic-fetch'
import './index.css'

export default class Game extends Component{
    constructor(props){
        super(props)
        this.state ={
            stories:[]
        }
    }
    componentDidMount(){
        let self = this;
        fetch('http://api.apiopen.top/musicBroadcasting').then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(stories) {
            self.setState({
                stories:stories.result
            })
        });
    }
    renderLi = ()=>{
        return this.state.stories[0].channellist.map((ele,index) => {
            return <li key={index}>{ele.name}</li>
        });
    }
    render(){
        return (
            <div>
                Game112288
                <ul>
                    {this.state.stories.length>0?this.renderLi():null}
                </ul>
            </div>
        )
    }
}