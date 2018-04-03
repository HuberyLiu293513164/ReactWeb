import React,{Component} from 'react';
import mypic from "../../img/avatar-mini4.jpg";
import otherpic from '../../img/user.jpg';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    name:"John Smith",
                    time:new Date,
                    message:'Vivamus diam elit diam, consectetur dapibus adipiscing elit.'
                },
                {
                    name:"Jenifer Smith",
                    time:new Date,
                    message:'Vivamus diam elit diam, consectetur dapibus adipiscing elit.'
                },
                {
                    name:"John Smith",
                    time:new Date,
                    message:'Vivamus diam elit diam, consectetur dapibus adipiscing elit.'
                },
                {
                    name:"Jenifer Smith",
                    time:new Date,
                    message:'Vivamus diam elit diam, consectetur dapibus adipiscing elit.'
                }, 
            ],
            val:"",
         }
    }

    change = (ev) => {
            this.setState({
                val:ev.target.value
            })
    };
    click = (ev) => {
        let {val} = this.state;
        let obj = {
            name:"Jenifer Smith",
            time:new Date,
            message:val,
        } ;
        let {list} = this.state;
        list.unshift(obj);
        console.log(list);
        this.setState({list,val:''});
        //!!!
        // window.scrollTo(0,0)
        
    }
    render() { 
        let {list,val}  =  this.state;
        let liDiv = list.map((e,i)=>{
            let minutes = e.time.getMinutes()
            let time = e.time.getHours()+":"+ minutes;
            if(e.name=="Jenifer Smith"){
                return(
                    <li className="clear" key={i}>
                        <div className="chat-contentLeft Left">
                                <div className="chat-meta">{time}<span className="pull-right">{e.name}</span></div>
                                {e.message}
                        </div> 
    
                        <div className="imgborder Right">
                                <img src={mypic} />
                        </div>
                    </li>
                )
            }
            else{
                return (
                <li className="clear" key={i}>
                    <div className="imgborder Left">
                        <img src={otherpic} />
                    </div>
                            
                    <div className="chat-contentRight Right">
                        <div className="chat-meta">{e.name}<span className="pull-right">{time}</span></div>
                        {e.message}
                    </div> 
                </li> 
                )
            }
        });

        return ( 
            <div className="message">
            <div className="messageTittle">
                <i className="fa fa-comments-o fa-lg"></i>
                <span>消 息</span>
            </div>
            <div id='messageContent' className="messageContent">
           
           
            {liDiv}
   
                
            </div>
                         
            <input type="text" className="mesInput" value={val} onChange={this.change}/>
                
            <button className="mesButton" onClick={this.click}>发送</button>
        </div>
        )
    }
}
 
export default Message;