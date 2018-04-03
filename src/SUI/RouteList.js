import React,{Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

import Index from './component/index/Index.js'
import Source from './component/source/Source.js'
import User from './component/user/User.js'
import Analyse from './component/analyse/Analyse.js'
import Station from './component/station/Station.js'
// import Analyse from './component/set/Set.js'
import Table from './component/table/Table.js'

class RouteList extends Component {
    // constructor() {
    //     super();
    //     this.state = {  }   //这里放数据，但是现在没有数据
    // }



    render() {
  
        return ( 

            <div>
            <Route exact path="/" component={Index}/>
            <Route exact path='/Source' component={Source}/>
            <Route exact path='/User' component={User}/>
            <Route exact path='/Analyse' component={Analyse}/>
            <Route exact path='/Station' component={Station}/>
            {/* <Route exact path='/Set' component={Set}/> */}
            <Route exact path='/Table' component={Table}/>
            </div>
       
        )
    }
}
 
export {RouteList} ;           

