import React,{Component} from 'react'
import '../css/User.css';
import '../font-awesome/css/font-awesome.min.css';
import TuopuChart from "./User-c-tuopu"
import TVchart1 from "./User-c-TV1"
import TVchart2 from "./User-c-TV2"
import TVchart3 from "./User-c-TV3"

class UserContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="UserContent">
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
                        <span>用户体验</span>
                        <span className="ulSpace">/</span>
                        <i className="fa fa-film fa-lg"></i> 
                        <span>用户视频体验</span>
                    </span>
                </ul>
                
                <nav>
                    <div className="timeMeasure findstyle"> 
                        <strong>时间粒度：</strong>
                        <select className="timeMeasureSlec" id="timeMeasureSlec">
                            <option value='selected'>小时</option>
                            <option>天</option>
                            <option>月</option>
                        </select> 
                    </div>
                    <div className="time findstyle">  
                            <span> <strong>开始时间</strong>
                                {/* <input class="setTime" name="control_date" type="text" id="control_date" size="10" maxlength="10" onClick="new Calendar().show(this);" readonly="readonly"/> */}
                            </span>
                            <span><strong>结束时间</strong>
                                {/* <input class="setTime" name="control_date2" type="text" id="control_date2" size="10" maxlength="10" onClick="new Calendar().show(this);" readonly="readonly"/> */}
                            </span>
                        
                    </div>
                    <div className="styleMeasure findstyle">
                        <strong>维度：</strong>
                        <select id="styleMeasureSlec">
                            <option value='selected'>地市</option>
                            <option>网站</option>
                        </select>
                    </div>
                    <div className="Website findstyle">
                        <strong>网站：</strong>
                        <select id="styleMeasureSlec">
                            <option value='selected'>全部</option>
                            <option>LeTV</option>
                            <option>iQIYI</option>
                            <option>YouKu</option>
                        </select>
                    </div>
                    <div className="pointStyle findstyle">
                        <strong>指标类型：</strong>
                        
                        <select id="styleMeasureSlec">
                            <option value='selected'>全部</option>
                            <option value="">MOS</option>
                            <option value="">U-vMOS</option>
                            <option value="">视频质量</option>
                            <option value="">交互体验</option>
                            <option value="">观看体验</option>
                            <option value="">初始播放成功率</option>
                            <option value="">初始缓冲时延</option>
                            <option value="">播放卡顿率</option>
                            <option value="">卡顿频次</option>
                            <option value="">卡顿占比</option>
                            <option value="">单视频下载速率</option>
                            <option value="">上行数传RTT</option>
                            <option value="">下行数传RTT</option>
                            <option value="">上行丢包率</option>
                            <option value="">下行丢包率</option>
                        </select>
                    </div>
                    <button>查询</button>
                </nav>   

                <div className="tvchart">
                        <TuopuChart/>

                        <TVchart1/>

                        <TVchart2/>
                        
                        <TVchart3/>
                </div> 
                
               
            </div>

    </div>

        )
    }
}
 
export default UserContent;