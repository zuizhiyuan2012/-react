import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './User.css';

class User extends Component{
  constructor(){
	  super();
    this.login=this.login.bind(this);
    this.logout=this.logout.bind(this);
    this.state={
      name:"登录/注册",
      user:null
    }
  }
  render(){
    return(      
            <div id="contents">   
              {/*<div className="logininfo">
                <div className="haslogin center">
                  <a className="button"> 简历&gt; </a>
              
                </div> 
                <div className="name"></div> 
              </div>*/} 
              <div className="nologin center">                 
               {/* {this.state.name == null||this.state.name==="null"?
                <a className="loginbut" onClick={this.login}>{this.state.name}</a>:
                <a className="loginbut" onClick={this.logout}>{this.state.name}(注销)</a>
                }*/} 
                <a className="loginbut" onClick={this.login}>{this.state.name}</a>
              </div>
                  {/*登录地址*/}
                  
              <div className="buttons">        
                <a className="button deliver"><span>投递</span></a>
                <a className="button interview">面试</a>       
                <a className="button invitation"><span>邀约</span></a>       
                <a className="button collect">收藏</a>
              </div>
                {/*<a className="logout">退出登录</a>*/}
            </div>
        )
	}
  componentWillMount(){
    var arr,reg=new RegExp("(^| )user=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
     var user = unescape(arr[2]);
      // console.log(user)
      if(user&&user!=""){
        this.setState({
          name:user+"/注销",
          user:user
        })
      }
    }
  }
  login(){
    if(this.state.name=="登录/注册"){
      window.location.href="/login";
    }else{
      var username = this.state.user;
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      document.cookie="user="+username+";expires="+exp.toGMTString();
      window.location.href='/user'
    }  
  }
  logout(){
    window.location.href="/user";
    document.cookie = "name=null";
  }
}
export default User