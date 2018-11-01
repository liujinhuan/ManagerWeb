import React ,{Component} from 'react'
import fetch from 'isomorphic-fetch'
import './index.less'

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
            <div className="game">
                {/* <ul>
                    {this.state.stories.length>0?this.renderLi():null}
                </ul> */}
                <div className="inner">
                    <div className="inner-item">
                        <div className="itemimg"></div>
                        <div className="iteminfo">
                            <span className="itemname">小程序开发者助手</span>
                            <span className="itemnum">帮助开发者开发</span>
                        </div>
                        <div className="qrcode"></div>
                    </div>
                </div>
            </div>
        )
    }
}