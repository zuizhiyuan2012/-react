import React,{Component} from 'react';
import './Position.css';
import axios from 'axios';

class Position extends Component{
  constructor(){
	  super();
    this.handlePages=this.handlePages.bind(this);
    this.state = {
      list:[],
      num:15
    };
    axios.post('/api/list').then((res)=>{
      // console.log(res.data.list)
      if(!res.code){
        this.setState({
          list:res.data.list
        })
      }
    })
   
  }
  render(){
    var list;
    var num = this.state.num;
    if(this.state.list){
       list = this.state.list.map(function(elem,index){
        if(num <= index){
          return;
        }
        return <PositionList job={elem} key={elem.positionId} />
      })
    }
   
    // console.log(list);
  	return(
        <div id="content">
        	<div className="custom-info">
              <span className="info">10秒钟定制职位</span>
              <a className="go">
                <em className="icon"></em>
                <em className="text" onClick={this.log}>去登录</em>
              </a>
          </div>
          <ul className="list">
            {list}
            <li className="activeable list-more" onClick={this.handlePages}>加载更多</li>
          </ul>
          <div id="copyright">
            <p>©2015 lagou.com, all right reserved </p>
            <div className="copyright-item">
              <span className="phone active">移动版&nbsp;·&nbsp;</span>
              <span className="computer">电脑版&nbsp;·&nbsp;</span>
              <a href="#header">回顶部</a>
            </div>
          </div>
        </div>
        )    
  }
  
  handlePages(){
    var _num = this.state.num+15
    this.setState({
      num:_num
    })
  }
  log(){
    window.location="/login"
  }
}

class PositionList extends Component{
  constructor(){
    super();
    this.handleDetail = this.handleDetail.bind(this);
  }
  render(){
    let{positionId,companyLogo,companyName,city,salary,createTime,positionName} = this.props.job;
    return(
      <li className="activeable list-item" data-positionid={positionId} onClick={this.handleDetail()}>
        <img src={"https://static.lagou.com/"+companyLogo} className="item-logo" />
        <div className="item-desc">
            <h2 className="item-title">{companyName}</h2>
            <p className="item-info">
                <span className="item-pos">
                   {positionName}  [ {city} ]
                </span>
                <span className="item-salary">{salary}</span>
            </p>
            <p className="item-time">{createTime}</p>
        </div>
    </li>)
  }
  handleDetail(){
    var positionId = this.props.job.positionId;
    window.location ="/detail?"+positionId;
  }
}
export default Position
