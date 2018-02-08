import React,{Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Search.css';
import axios from 'axios';
import $ from 'jquery';
import PositionList from './PositionList';
import SearchPosition from './SearchPosition';


class Search extends Component{
	constructor(){
		super()
		this.state={
			list:[],
			show:true,
			nation:"全国",
			city:[],
			val:"",
			style3:{display:"block"},
            style4:{display:"none"},
            flag:true
		};
		var storage;
		//异步请求数据
		axios.post("/api/city").then((res)=>{
			// console.log(res);
			if(!res.code){
				this.setState({
					list:res.data.list
				})
			}			
		})
		this.change = this.change.bind(this);
		this.getVal = this.getVal.bind(this);
		this.handleValue = this.handleValue.bind(this);
		this.val = this.val.bind(this);
	}
	render(){
		var nation = this.state.city.map((elem,index)=>{
			return (<SearchPosition work={elem} key={index}/>)
		})
		// console.log(nation)
		return(
			<div>
				<div id="content"  style={ {display:this.state.show?"":"none",marginBottom:"0"} }>
				  <div className="linputer">
		            <div className="lbutton" onClick={(e)=>{this.change(e)}}>
		              <span className="city">全国</span>
		              <span className="cityicon"></span>
		            </div>
		            <div className="rinput">
		              <input className="inputer" onChange={this.handleValue} value={this.state.val} type="text" placeholder="搜索职位或公司" />
		              <span className="search" onClick={this.val}><em className="searchicon"></em></span>
		            </div>
		          </div>
		        </div>
		        <div>{nation}</div>
		        <SearchList city={this.state.list} bool={this.state.show} onChange={this.change}/>
		    </div>)
	}

	change(e){
		var s = this.state.show;
		$("#header")[0].style.display = this.state.show ? "none" : "block";
		this.setState({
			show:!s
		})
	}
	getVal(e){
		this.setState({
			city:e.target.innerText
		})
	}
	handleValue(e){
		this.setState({
			val:e.target.value
		})
		
	}
	val(e){
		var _nation = this.state.nation;
		var _val = this.state.val;
		axios.post("/searchcity",{_nation,_val}).then((res)=>{
			console.log(res)
			this.setState({
				city:res.data.data
			})
			
		})	
	}
}

class SearchList extends Component{
	constructor(){
		super();
		this.handle = this.handle.bind(this);
	}
	render(){
		
		let{cityList,nameStr,index} = this.props.city;
		var li;
		
		var list = this.props.city.map(function(elem,index){
	     	cityList = elem.cityList;
	     	nameStr = elem.nameStr;
	     	index = index;
	     	li = cityList.map(function(list,index){
	     	 	return <td className="activeable cities-item" data-item={list} key={index}>{list}</td>
	     	 })
	     	return(
	     		<div className="fdialog-rcon" key={index}>
		     		<div className="cities-header">{nameStr}</div>
					<table className="cities-list">				
						<tbody>
							<tr className="cities-list-item">
								{li}
							</tr>
						</tbody>		
					</table>
				</div>
	     	)  	
	    })
		return(
		 <Router>
          <div>       
            <header id="head" style={ {display:this.props.bool?"none":""} }>
            	拉勾网
            	<div className="left" onClick={this.handle}><span className="corner"></span></div>
            </header>
            <content>
            	<div id="fulldialog-conid-1" className="fdialog-content" style={ {display:this.props.bool?"none":""} }>
					{list}
				</div>
            </content>        
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
		)
	}
	handle(e){
		this.props.onChange(e.target);
	}
}
export default Search