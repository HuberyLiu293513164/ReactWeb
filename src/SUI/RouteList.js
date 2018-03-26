import React,{Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

import Index from './component/Index.js'
import Source from './component/source/Source.js'
import User from './component/user/User.js'
import Analyse from './component/Analyse.js'

class RouteList extends Component {
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
            <Route exact path="/" component={Index}/>
            <Route exact path='/Source' component={Source}/>
            <Route exact path='/User' component={User}/>
            <Route exact path='/Analyse' component={Analyse}/>
            </div>
       
        )
    }
}
 
export {RouteList} ;           

