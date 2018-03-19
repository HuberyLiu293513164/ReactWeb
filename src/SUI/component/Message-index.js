import React,{Component} from 'react';
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="message">
            <div className="messageTittle">
                <i className="fa fa-comments-o fa-lg"></i>
                <span>消 息</span>
            </div>
            <div className="messageContent">
                <li className="clear">
                    <div className="imgborder Left">
                        <img src={require("../img/user.jpg") } />
                    </div>
                            
                    <div className="chat-contentRight Right">
                        <div className="chat-meta">John Smith <span className="pull-right">3 hours ago</span></div>
                        Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                    </div> 
                </li>


                <li className="clear">
                    <div className="chat-contentLeft Left">
                            <div className="chat-meta">3 hours ago<span className="pull-right">John Smith</span></div>
                            Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                    </div> 

                    <div className="imgborder Right">
                            <img src = {require("../img/user.jpg") }/>
                    </div>
                </li>

                <li className="clear">
                    <div className="imgborder Left">
                        <img src = {require("../img/user.jpg") } />
                    </div>
                            
                    <div className="chat-contentRight Right">
                        <div className="chat-meta">John Smith <span className="pull-right">3 hours ago</span></div>
                        Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                    </div> 
                </li>


                <li className="clear">
                    <div className="chat-contentLeft Left">
                            <div className="chat-meta">3 hours ago<span className="pull-right">John Smith</span></div>
                            Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                    </div> 

                    <div className="imgborder Right">
                            <img src={require("../img/user.jpg") } />
                    </div>
                </li>
                
                <input type="text" className="mesInput"/>
                
                <button className="mesButton">发送</button>
                
            </div>
        </div>
        )
    }
}
 
export default Message;