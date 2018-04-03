import '../css/antd.css';
import React,{Component} from 'react';
import {
    Link
  } from 'react-router-dom';
import '../css/Public_side.css';
// import '../font-awesome/css/font-awesome.min.css';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;




class Side extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapsed: false,
         }
    }
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    render() { 
        return ( 
            //  <div className="side">
            //     <ul>
            //         <li>
            //             <Link to='/'>       
            //                     <i className="fa fa-home fa-lg"></i> 
            //                     <span>首页</span>                            
            //             </Link>
            //         </li>
            //         <li>
            //             <Link to='/User'>
            //                 <i className="fa fa-users fa-lg"></i> 
            //                 <span>用户体验</span>
            //             </Link>               
            //         </li>
            //         <li>
            //             <Link to='/Source'>
            //                 <i className="fa fa-server fa-lg"></i>  
            //                 <span>内容源体验</span>
            //             </Link> 
            //         </li>
            //         <li>
            //             <Link to='/Analyse'>   
            //                 <i className="fa fa-file-text fa-lg"></i> 
            //                 <span>体验分析</span>
            //             </Link>               
            //         </li>
            //         <li>
            //             <Link to='/Station'>  
            //                 <i className="fa fa-wifi fa-lg"></i> 
            //                 <span>基站</span>
            //             </Link>              
            //         </li>
            //         {/* <li>
            //             <Link to='/'>  
            //                 <i className="fa fa-cogs fa-lg"></i> 
            //                 <span>配置</span>
            //             </Link>                
            //         </li> */}

            //         <li>
            //             <Link to='/Table'>
            //                 <i className="fa fa-table fa-lg"></i> 
            //                 <span>人员管理</span>
            //             </Link>               
            //         </li>
            //         {/* <li>
            //             <a href="javascript:;">
            //                 <i className="fa fa-list fa-lg"></i> 
            //                 <span>Pages</span>
            //             </a>                
            //         </li> */}

            //         {/* <li>
            //             <a href="javascript:;">
            //                 <i className="fa fa-desktop fa-lg"></i> 
            //                 <span>Others</span>
            //             </a>                
            //         </li> */}
            //     </ul>
            // </div>

        <div className='side' >
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" >
            <Link to='/'> 
            <Icon type="pie-chart" />
            <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/User'>
            <Icon type="desktop" />
            <span>用户分析</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/Source'>
            <Icon type="inbox" />
            <span>资源分析</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>其他</span></span>}>
          
            <Menu.Item key="5">
              <Link to='/Analyse'>  
              体验设置
              </Link>  
            </Menu.Item>
            
            <Menu.Item key="6">
              <Link to='/Station'> 
              基站数据
              </Link> 
            </Menu.Item>
            <Menu.Item key="7">
              <Link to='/Table'>
              人员管理
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="8">Option 8</Menu.Item> */}
          </SubMenu>
          {/* <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    //   mountNode
         )
    }
}
 
export default Side;