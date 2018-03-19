import React,{Component} from 'react'
import '../css/Source.css';
import '../font-awesome/css/font-awesome.min.css';
import Webpie from './Source-c-pie';
import Webline from './Source-c-line';



class SourceContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
                            <div className="timeMeasure findstyle"> 
                                <strong>时间粒度：</strong>
                                <select className="timeMeasureSlec" id="timeMeasureSlec">
                                    <option defaultValue='selected'>小时</option>
                                    <option>天</option>
                                    <option>月</option>
                                </select> 
                            </div>
                            <div className="time findstyle">  
                                    <span> <strong>开始时间</strong>

                                        {/* <input className="setTime" name="control_date" type="text" id="control_date" size="10" maxlength="10" onClick="new Calendar().show(this);" readonly="readonly"/> */}
                                    </span>
                                    <span><strong>结束时间</strong>
                                        {/* <input className="setTime" name="control_date2" type="text" id="control_date2" size="10" maxlength="10" onClick="new Calendar().show(this);" readonly="readonly"/> */}
                                    </span>
                                
                            </div>
                            <div className="styleMeasure findstyle">
                                <strong>地市：</strong>
                                <select id="styleMeasureSlec">
                                    <option defaultValue='selected'>北京</option>
                                    <option>河北</option>
                                    <option>内蒙古</option>
                                    <option>陕西</option>
                                </select>
                            </div>
                            <button>查询</button>
                    </nav> 

                    <div className="sourceChart">
                        <Webpie/>
                        <Webline/>
                    </div>             
                </div>
            </div>

        )
    }
}
 
export default SourceContent;