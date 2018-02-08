import React,{Component} from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component{
	constructor(){
		super()
		this.state={
			show:true,
			user:"",
			pwd:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.phone = this.phone.bind(this);
		this.pawd = this.pawd.bind(this);
		this.log = this.log.bind(this);
	}
	render(){
		return(
		<div className="contain">
			<section className="form_container active" style={{display:this.state.show?"none":"block"}}>
				<header className="form_header"><h2>登录拉勾</h2><a className="brother_link" onClick={this.handleChange}>注册</a></header>
				<form className="form_body form_password">
					<div className="input_label">
						<input type="text" onChange={this.phone} placeholder="请输入已验证的手机号或邮箱" className="input_text user_input" />
					</div>
					<div className="input_label">
						<input type="password" onChange={this.pawd} className="input_text password_input" placeholder="请输入密码" />
					</div>
					<div className="input_label btn_group">
						<input type="submit" className="submit_btn" onClick={this.log} value="登录" />
					</div>
				</form>
				<footer className="form_footer">
					<span className="signin_type_btn">手机号登录</span>
				</footer>
			</section>
			<Register onChange={this.handleChange} bool={this.state.show} />
		</div>
		)
	}
	handleChange(e){
		var s = this.state.show;
		this.setState({
			show:!s
		})
	}
	phone(e){
	  	this.setState({
	  		user:e.target.value
	  	})
	}
  
  	pawd(e){
  		this.setState({
  			pwd:e.target.value
  		})
  	}
	log(){
  	var _user = this.state.user,
		_par = this.state.par;
		axios.post('/api/login',{_user,_par}).then(function(res){
			if(_user == "cx" && _par == "cc"){
				alert("登陆成功");
			}else{
				alert("账号有误");
			}
		})

  }
}

class Register extends Component{
	constructor(){
		super();
		this.state={id:"0086",display:false,data:[],use:"",pwd:""}
		this.handleNation = this.handleNation.bind(this);
		this.change = this.change.bind(this);
		this.username = this.username.bind(this);
		this.password = this.password.bind(this);
		this.reg=this.reg.bind(this);
	}
	componentWillMount(){
		axios.post("/city").then((res)=>{
			this.setState({
				data:res.data.msglist
			})
		})
	}
	render(){
		var li = this.state.data.map(function(elem,index){
			for(var dex in elem){			
				var l = elem[dex].map(function(element,i){
			
					return (<dd data-code={element.code} key={i}>{element.city}</dd>)
				})
			}
			return(
					<dl className="li" key={index}>
						<dt>{dex}</dt>
						{l}
					</dl>
				)
		})

		return(
			<section className="form_container active" data-view="codeLogin" style={{display:this.props.bool?"block":"none"}}>
		        <header className="form_header">
		        	<h2>注册拉勾</h2>
		        	<a className="brother_link" onClick={this.change}>登录</a>
		        </header>
		        <form className="form_body form_register">
		            <div className="input_label phone_wrapper">
						<span className="area_code" onClick={this.handleNation}>{this.state.id}</span>
							<div className="area_code_list" onClick={this.handleNation} style={{display:this.state.display?"block":"none"}}>
								{li}
								<p className="tips">如果没有找到你所在的归属地，<br />请拨打客服电话<a href="tel:4006282835">4006282835</a> 解决。</p>
							</div>
			            <input type="text" placeholder="请输入常用手机号" onChange={this.username} className="input_text phone_input" />
		            </div>
		            <div className="input_label">
		                <input type="password" placeholder="请证明你不是机器人" onChange={this.password} className="input_text pcode_input" />
		                {/*<img src="https://passport.lagou.com/vcode/create?from=register" className="pcode_img" />*/}
		            </div>
		            
		            <div className="input_label btn_group">
		                <input onClick={this.reg} className="submit_btn" type="button" value="注册" />
		            </div>
		            <div className="register_agreement">注册拉勾代表你已同意
		            	<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a>
		            </div>
		        </form>
		    </section>
			)
	}
	handleNation(e){
		var _id=e.target.dataset.code;
	  	this.setState({
	  		display:!this.state.display,
	  		id:_id
	  	})
	 }
	 change(e){
	 	this.props.onChange(e.target);
	 }
	 username(e){
	 	this.setState({
	  		use:e.target.value
	  	})
	 }
	 password(e){
	 	this.setState({
	  		pwd:e.target.value
	  	})
	 }
	 reg(e){
	  	var _use = this.state.use,
			_pwd = this.state.pwd;
			console.log(_use,_pwd)
			axios.post('/api/register',{_use,_pwd}).then(function(res){
				console.log(res)
				alert("注册成功!");
				var name = res.data.na._use,
					word = res.data.na._pwd;
					document.cookie = "user="+name;
			})
			window.location="/user";
	  }
}
export default Login




