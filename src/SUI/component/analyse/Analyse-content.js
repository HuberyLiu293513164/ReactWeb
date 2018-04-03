import React,{Component} from 'react'
import IndexLineChart from './IndexLineChart-index.js';
import TVchart1 from "./User-c-TV1"
import './css/Anaylse.css'



class AnalyseContent extends Component {
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
                        <i className="fa fa-cubes fa-lg"></i> 
                        <span>体验分析</span>
                        
                    </span>
                </ul>
       
                <div className='AnalyseContent'>
                <TVchart1/>
                <IndexLineChart/>
               
                </div>
            </div>
        </div>
        )
    }
}
 
export default AnalyseContent;