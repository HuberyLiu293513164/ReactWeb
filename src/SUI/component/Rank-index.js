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
            return(
                <li key={i}>
                    <div className="tittle t1">
                        {e.ranknum}
                    </div>
                    <span>{e.name}</span>
                    <i className="end">{e.score}</i>
                </li>
            )
        });

        return (      
            <div className="table">
                            <div className="table_pic">
                                <h3>资源质量排名</h3>
                                {liDiv}
                                {/* <li>
                                    <div className="tittle t1">
                                    <span>Google</span>
                                    <i className="end">100</i>
                                </li> 
                                <li>
                                    <div className="tittle t2">
                                        2
                                    </div>
                                    <span>Youtube</span>
                                    <i className="end">99</i>
                                    
                                </li>
                                <li>
                                    <div className="tittle t3">
                                        3
                                    </div>
                                    <span>Facebook</span>
                                    <i className="end">98</i>
                                </li>
                                <li>
                                    <div className="tittle t">
                                        4
                                    </div>
                                    <span>腾讯</span>
                                    <i className="end">97</i>
                                </li>
                                <li>
                                    <div className="tittle t">
                                        5
                                    </div>
                                    <span>腾讯</span> 
                                    <i className="end">97</i>                           
                                </li>
                                <li>
                                    <div className="tittle t">
                                        6
                                    </div>                            
                                </li>
                                <li>
                                    <div className="tittle t">
                                        7
                                    </div>                            
                                </li>
                                <li>
                                    <div className="tittle t">
                                        8
                                    </div>                            
                                </li>
                                <li>
                                    <div className="tittle t">
                                        9
                                    </div>                            
                                </li> */}

                            </div>
            </div>
         )
    }
}
 
export default Rank;