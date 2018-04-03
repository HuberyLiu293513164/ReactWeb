import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import {RouteList} from './SUI/RouteList';



ReactDOM.render(
  <Router>
    <RouteList />
  </Router>
  , 
  // mountNode,
  document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
  }