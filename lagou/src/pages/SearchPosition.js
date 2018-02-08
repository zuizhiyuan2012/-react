import React,{Component} from 'react';
import './Search.css';
import axios from 'axios';

class SearchPosition extends Component{
  constructor(){
    super();
    this.handleDetail = this.handleDetail.bind(this);
  }
  render(){
    console.log(this.props.work)
    let{positionId,companyLogo,companyName,city,salary,createTime,positionName} = this.props.work;
    return(
      <li className="activeable list-item" data-positionid={positionId}>
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
   onClick={this.handleDetail}
  }
}
export default SearchPosition 