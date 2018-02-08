import React,{Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Search.css';
import axios from 'axios';
import $ from 'jquery';

class Search extends Component{
	constructor(){
		super()
		this.state={
			list:[],
			show:true
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
	}
	render(){
		// console.log(this.state)
		return(
			<div>
				<div id="content"  style={ {display:this.state.show?"":"none",marginBottom:"0"} }>
				  <div className="linputer">
		            <div className="lbutton" onClick={(e)=>{this.change(e)}}>
		              <span className="city">全国</span>
		              <span className="cityicon"></span>
		            </div>
		            <div className="rinput">
		              <input className="inputer" type="text" placeholder="搜索职位或公司" />
		              <span className="search" onClick={this.val}><em className="searchicon"></em></span>
		            </div>
		          </div>
		        </div>
		        <SearchList city={this.state.list} bool={this.state.show} onChange={this.change}/>
		    </div>)
	}

	change(e){
		var s = this.state.show;
		// console.log(s,$("#header")[0])
		$("#header")[0].style.display = this.state.show ? "none" : "block";
		this.setState({
			show:!s
		})
		// src.style.display = this.state.show ? "none" : "block";
	}
	val(e){
		var param = {};
		var target = $(e.target).parents(".rinput").find(".inputer").val();
		var storage = window.localStorage;
		storage = target;
		console.log(storage)
		param.storage = storage;
		axios.post("/api/list",function(res){
			console.log(res)
		// }).then(function(){
			
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
		// console.log(e.target)
	}
}
export default Search