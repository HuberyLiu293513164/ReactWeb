import React,{Component} from 'react';
import '../css/Public_side.css';
import '../font-awesome/css/font-awesome.min.css';
import {
    Link
  } from 'react-router-dom';


class Side extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <div className="side">
                <ul>
                    <li>
                        <Link to='/'>       
                                <i className="fa fa-home fa-lg"></i> 
                                <span>首页</span>                            
                        </Link>
                    </li>
                    <li>
                        <Link to='/User'>
                            <i className="fa fa-users fa-lg"></i> 
                            <span>用户体验</span>
                        </Link>               
                    </li>
                    <li>
                        <Link to='/Source'>
                            <i className="fa fa-server fa-lg"></i>  
                            <span>内容源体验</span>
                        </Link> 
                    </li>
                    <li>
                        <Link to='/Analyse'>   
                            <i className="fa fa-file-text fa-lg"></i> 
                            <span>体验分析</span>
                        </Link>               
                    </li>
                    <li>
                        <Link to='/'>  
                            <i className="fa fa-wifi fa-lg"></i> 
                            <span>基站</span>
                        </Link>              
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="fa fa-cogs fa-lg"></i> 
                            <span>配置</span>
                        </a>                
                    </li>
                    <li>
                        <a href="javascript:;"> 
                            <i className="fa fa-file-text fa-lg"></i> 
                            <span>Charts</span>
                        </a>                
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="fa fa-table fa-lg"></i> 
                            <span>Tables</span>
                        </a>                
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i className="fa fa-list fa-lg"></i> 
                            <span>Pages</span>
                        </a>                
                    </li>

                    <li>
                        <a href="javascript:;">
                            <i className="fa fa-desktop fa-lg"></i> 
                            <span>Others</span>
                        </a>                
                    </li>
                </ul>
            </div>
         )
    }
}
 
export default Side;