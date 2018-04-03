import React,{Component} from 'react'
import './css/Source.css';
import '../../font-awesome/css/font-awesome.min.css';
import Webpie from './Source-c-pie';
import Webline from './Source-c-line';



class SourceContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val:'',
            // valWeb:'',
         }
    }

    change =(ev)=>{
        let city = ev.target.value;
        let {val} = this.state
        this.setState ({
            val:city
        })
    }
    // changeWeb = (ev)=>{
    //     let web = ev.target.value;
    //     let {valWeb} = this.state;
    //     this.setState ({
    //         valWeb:web
    //     })
    // }

    render() { 
        let {val} = this.state


        return ( 
            <div className="content">
                <div className="main-content">
                    <h3>
                        <span>
                            <i className="fa fa-file-text-o fa-2x"></i>
                            <span className="DAS">FORM ELEMENTS</span>
                        </span> 
                    </h3>
                    <ul>
                        <span className="span">
                            <i className="fa fa-home fa-lg"></i> 
                            <span>首页</span>
                            <span className="ulSpace">/</span>
                            <i className="fa fa-user fa-lg"></i> 
                            <span>内容源体验</span>
                            <span className="ulSpace">/</span>
                            <i className="fa fa-film fa-lg"></i> 
                            <span>视频内容源体验</span>
                        </span>
                    </ul>
                    <nav>
                            {/* <div className="timeMeasure findstyle"> 
                                <strong>单个资源统计：</strong>
                                <select className="timeMeasureSlec" id="timeMeasureSlec" >
                                    <option defaultValue='selected'>爱奇艺</option>
                                    <option>腾讯视频</option>
                                    <option>乐视TV</option>
                                    <option>小米有乐</option>
                                    <option>优酷视频</option>
                                    <option>其他</option>
                                </select> 
                            </div> */}
                  
                            <div className="styleMeasure findstyle">
                                <strong>地市：</strong>
                                <select id="styleMeasureSlec" value={val} onChange={this.change}>
                                    <option defaultValue='selected'>北京</option>
                                    <option>河北</option>
                                    <option>内蒙古</option>
                                    <option>陕西</option>
                                </select>
                            </div>
                    </nav> 

                    <div className="sourceChart">
                        <Webpie typeCity={val} />
                        <Webline typeCity={val} />
                    </div>             
                </div>
            </div>

        )
    }
}
 
export default SourceContent;