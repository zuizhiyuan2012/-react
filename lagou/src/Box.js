import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import User from './pages/User';
import App from './App';
import Login from './pages/Login'
import Detail from './pages/Detail';

class Box extends Component {
  render() {
    return (
        <Router>
          <div>       
            <Switch>             
               <Route exact path="/login" component={Login}></Route>
               <Route path="/detail" component={Detail}></Route>
               <Route path="/" component={App}></Route>    
            </Switch>
          </div>
        </Router>
    );
  }
}

export default Box;
