import React, { Component } from 'react';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';
import axios from 'axios';

export default class ConfirmUser extends Component{
	constructor(props){
         super(props);
         this.state={
         	username:'',
         	email:'',
         	redirect:false,
         }
	}
	componentDidMount(){
		const {user_key} = this.props.match.params;
		axios.post('/api/confirm/',{
			user_key
		})
		.then(response=>{
			 const {user} = response.data;
             this.setState({
             	 username:user.name,
             	 email:user.email
             });
		})
		.catch(error=>{
			console.log(error);
		});
	}
	_confirmData(){
		const {user_key} = this.props.match.params;
		axios.post('/api/confirmed/',{
			user_key
		})
		.then(response=>{
			if (response.status == 200){
				 const {token} = response.data;
				 let cookie = new Cookie;
	             cookie.set('user_token' , token , {path : '/'});
	             this.setState({
	             	redirect:true
	             })
			}
			 
		})
		.catch(error=>{
			console.log(error);
		});
	}
	render(){
		const {email , username }=this.state;
		return(
			        <div>
			        {this.state.redirect===true ? <Redirect to="/"/> : null}
			        <Header />
				        <div className="header header-filter">
	                        <div className="container">
	                            <div className="row">
	                                <div className="col-md-8 col-md-offset-2">
	                                    <div className="brand">
	                                        <h1 className="title white">وبی تک</h1>
	                                        <div className="separator separator-danger">✻</div>
	                                        <h3 className="text-center">ارتباط با ما</h3>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                     </div>
	                     <div className="main main-raised">
	                                <nav className="navbar navbar-default">
	                                        <div className="container-fluid">
	                                             <div className="collapse navbar-collapse menu" id="example-navbar">
	                                                                         
	                                             </div>
	                                        </div>
	                                </nav>
	                                <div className="section section-basic">
	                                     <div className="container"> 
								            
								            	
									            	<div className="container">
													    <div className="row">
													        <div className="col-md-8 col-md-offset-2">
													            <div className="panel panel-default">
													                <div className="panel-heading text-center rtl title">فرم تایید حساب کاربری</div>
													                <p className="text-center col-md-12 rtl title">اطلاعات حساب شما با موفقیت ثبت گردیده:</p>

													                <div className="panel-body">
													                    <div className="col-md-12 rtl text-right">
													                   	     <label> نام کاربری: </label>
													                   	       {username}
													                    </div>
													                   <div className="col-md-12 rtl text-right">
													                   	        <label> آدرس الکترونیکی: </label>
													                   	        {email}
													                   </div>
													                   <div className="col-md-12">
													                       
													                          <button className="btn btn-primary" onClick={()=>this._confirmData()} >تایید مشخصات</button>
													                       
													                  </div>
													                </div>
													             </div>
													        </div>
													    </div>
													</div>
								            
								    	</div>
								    </div>
					    </div>
					    <Footer />
			        </div>
			);
	}
	
}