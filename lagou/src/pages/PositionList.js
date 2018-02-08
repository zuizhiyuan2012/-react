import React,{Component} from 'react';
import './Position.css';
import axios from 'axios';

class PositionList extends Component{
  constructor(){
    super();
    this.handleDetail = this.handleDetail.bind(this);
  }
  render(){
    let{positionId,companyLogo,companyName,city,salary,createTime,positionName} = this.props.job;

    return(
      <li className="activeable list-item" data-positionid={positionId} onClick={this.handleDetail}>
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
  handleDetail(e){
    var positionId = this.props.job.positionId;
    console.log(1111)
    window.location ="/detail?"+positionId;
  }
}
export default PositionList 