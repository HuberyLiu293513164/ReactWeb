import React,{Component} from "react"; 
class FourFounder extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    type:"视频体验得分",
                    value:6788,
                    color:"inner1",
                    symbol:"fa fa-television fa-5x"
                },
                {
                    type:'游戏体验得分',
                    value:6654,
                    color:"inner2",
                    symbol:"fa fa-gamepad fa-5x"
                },
                {
                    type:'网页体验得分',
                    value:6654,
                    color:"inner3",
                    symbol:"fa fa-window-restore fa-5x"
                    
                },
                {
                    type:'下载体验得分',
                    value:6654,
                    color:"inner4",
                    symbol:"fa fa-download fa-5x"
                }
            ]

        }
    }
    render() { 
        let {list} = this.state;
       
        let listDiv = list.map((e,i)=>{
            return(
                <div className="rowbox" key={i}>
                    <div className={e.color}>
                        <div className="pic">
                            <i className={e.symbol}></i>
                        </div>
                        <div className="num" >
                            <span className="big">{e.value}</span><br/>
                            <span className="small">{e.type}</span>
                        </div>
                    </div>
                </div>
            )
        })
        
        return ( 
            <div className="row">
            {listDiv}
                {/* <div className="rowbox">
                    <div className="inner1">
                        <div className="pic">
                            <i className="fa fa-television fa-5x"></i>
                        </div>
                        <div className="num" key={i}>
                            <span className="big">{e.value}</span><br/>
                            <span className="small">{e.type}</span>
                        </div>
                    </div>
                </div> */}

                {/* <div className="rowbox">
                        <div className="inner2">
                            <div className="pic">
                                <i className="fa fa-television fa-5x"></i>
                            </div>
                            {listDiv}
                        </div>
                </div> */}

                {/* <div className="rowbox">
                        <div className="inner3">
                            <div className="pic">
                                <i className="fa fa-television fa-5x"></i>
                            </div>
                            {listDiv}
                        </div>
                </div> */}

                {/* <div className="rowbox">
                        <div className="inner4">
                            <div className="pic">
                                <i className="fa fa-television fa-5x"></i>
                            </div>
                            {listDiv}
                        </div>
                </div> */}
            </div>
         )
    }
}
 
export default FourFounder;