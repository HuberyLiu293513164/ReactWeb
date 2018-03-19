import React,{Component} from 'react';
import '../css/index.css';
import '../font-awesome/css/font-awesome.min.css';
import IndexLineChart from './IndexLineChart-index';
import Mapindex from './Map-index';
import Head from './Head-index';
import Side from './Side-index';
import Message from './Message-index';
import Todo from './Todo-index';
import GoodWeb from './GoodWeb-index';
import Rank from './Rank-index';
import FourFounder from './FourFounder-index';
import NavUl from './NavUl-index';

class Index extends Component {
    // constructor() {
    //     super();
    //     this.state = {  }   //这里放数据，但是现在没有数据
    // }

    // setOption = {
    //     myChart1.setOption(option1);
    // }

    render() {
  
        return ( 
        <div>
            {/* 导航栏 */}
            <Head/>

            {/* <!-- 侧边栏 --> */}
            <Side />
           
            {/* <!-- 主要内容 --> */}
            <div className="content">
                <div className="main-content">
                    <h3>
                        <span>
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className="DAS">DASHBOARD</span>
                        </span> 
                    </h3>
                    {/* 导航标题栏 */}
                    <NavUl />

                    {/* <!-- 四个方框那一行 --> */}
                    <FourFounder />

                    {/* <!-- 带地图的那一行 --> */}
                    <div className="svg_table">
                        <Mapindex />
                        <Rank />
                    </div>

                    {/* <!-- 优质网站排名 --> */}  
                    <div className="users_fans">
                        <IndexLineChart />  
                        <GoodWeb />
                    </div>

                    {/* <!-- 消息+待办事项栏 --> */}
                    <div className="messageTodo ">
                        <Message />
                        <Todo />
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
 
export default Index ;