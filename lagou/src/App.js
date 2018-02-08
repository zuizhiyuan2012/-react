import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './App.css';

import Search from './pages/Search';
import User from './pages/User';
import Position from './pages/Position';


class App extends Component {
  render() {
    return (
        <Router>
          <div>       
            <header id="header">拉勾网</header>
            <Switch> 
               <Route path="/user" component={User}></Route>
               <Route path="/search" component={Search}></Route>              
               <Route path="/position" component={Position}></Route>        
            </Switch>
            <footer id="footer">
              <div className="footer-tab-custom"><Link to="/position">
                <span className="icon selected"></span>
                <span className="text">职位</span>
              </Link></div>
              <div className="footer-tab-search"><Link to="/search">
                <span className="icon"></span>
                <span className="text">搜索</span>
              </Link></div>
              <div className="footer-tab-mine selected"><Link to="/user">
                <span className="icon"></span>
                <span className="text">我的</span>
              </Link></div>
            </footer>
          </div>
        </Router>
    );
  }
}

export default App;
