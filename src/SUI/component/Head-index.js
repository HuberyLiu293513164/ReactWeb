import React,{Component} from 'react';
import "../css/Public_head.css"


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <div className="headera">
                    <a href='javascript:;'>SIG Vivid Insight</a>
                </div>
                <div className="Hsearch">
                    <form action = 'http://www.baidu.com/s' target= '_blank' >
                        <em className="searchpic"/>
                        <input className="searchValue" name= {'wd'}  type={'text'} placeholder="搜索"/>
                        <input className="searchB" type="submit" value="Go"/>
                    </form>
                </div>
                <div className="Hright2">
                    <img src = {require('../img/avatar-mini4.jpg')}/>
                    <span>Administrator</span>
                    <b className="caret"></b>
                </div>
                <div className="Hright1">
                    <em className="itemspic"></em>
                    <em className="mailpic"></em>
                    <em className="blingpic"></em>
                </div>
            </div>
         )
    }
}
 
export default Head;

