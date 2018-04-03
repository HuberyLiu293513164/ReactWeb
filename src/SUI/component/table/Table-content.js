import React,{Component} from 'react'
import Table1 from './Table1'
import Table2 from './Table2'


class TableContent extends Component {
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
                        <span>表格</span>
                    </span>
                </ul>
       
                <div className='TableContent'>
                    {/* <Table1/> */}
                    <Table2/>
                </div>
            </div>
        </div>
        )
    }
}
 
export default TableContent;