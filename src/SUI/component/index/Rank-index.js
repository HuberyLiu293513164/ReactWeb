import React,{Component} from "react"; 

class Rank extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    ranknum:1,
                    name:"Google",
                    score:99,
                    color:'red'
                },
                {
                    ranknum:2,
                    name:"BaiDu",
                    score:98,
                },
                {
                    ranknum:3,
                    name:"YouTube",
                    score:97,
                },
                {
                    ranknum:4,
                    name:"新浪",
                    score:96,
                },
                {
                    ranknum:5,
                    name:"FaceBook",
                    score:95,
                },
                {
                    ranknum:6,
                    name:"网易",
                    score:94,
                },
                {
                    ranknum:7,
                    name:"twitter",
                    score:93,
                },
                {
                    ranknum:8,
                    name:"QQ",
                    score:92,
                },
                {
                    ranknum:9,
                    name:"XIAOMI",
                    score:91,
                },
            ]
        }
    }
    render() { 
        let {list} = this.state;
        
        let liDiv = list.map((e,i) =>{
            if(e.ranknum==1){
                return(
                    <li key={i}>
                        <div className="tittle t1">
                            {e.ranknum}
                        </div>
                        <span>{e.name}</span>
                        <i className="end">{e.score}</i>
                    </li>
                )
            }
            else if(e.ranknum==2){
                return(
                    <li key={i}>
                        <div className="tittle t2">
                            {e.ranknum}
                        </div>
                        <span>{e.name}</span>
                        <i className="end">{e.score}</i>
                    </li>
                )
            }
            else if(e.ranknum==3){
                return(
                    <li key={i}>
                        <div className="tittle t3">
                            {e.ranknum}
                        </div>
                        <span>{e.name}</span>
                        <i className="end">{e.score}</i>
                    </li>
                )
            }
            else {
                return(
                    <li key={i}>
                        <div className="tittle t">
                            {e.ranknum}
                        </div>
                        <span>{e.name}</span>
                        <i className="end">{e.score}</i>
                    </li>
                )
            }

        });

        return (      
            <div className="table">
                            <div className="table_pic">
                                <h3>资源质量排名</h3>
                                {liDiv}
                            </div>
            </div>
         )
    }
}
 
export default Rank;