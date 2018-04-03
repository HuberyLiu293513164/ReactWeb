import React,{Component} from 'react'
import StationTable from './StationTable'


class TableContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="contentStation">
            <div className="stationmain-content">
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
                        <i className="fa fa-wifi fa-lg"></i> 
                        <span>基站信息</span>
                    </span>
                </ul>
       
                {/* <div className='TableContent'> */}
            
                    <StationTable/>
                {/* </div> */}
            </div>
        </div>
        )
    }
}
 
export default TableContent;