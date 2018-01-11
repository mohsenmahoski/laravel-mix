import React, { Component } from 'react';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';
import axios from 'axios';
import { DotLoader } from 'react-spinners';

export default class ConfirmUser extends Component{
	constructor(props){
		super(props);
		this.state={
			redirect:false,
			usernotfound:false,
			user:{},
			c_passwordrequired:'hidden',
			passwordrequired:'hidden',
			passwordlength:'hidden',
			sameinput:false,
			c_password:'',
			password:'',
			spinner:false,
			success:false,
			time:10,
			intervalId:null
		}
	}
    componentWillMount(){
		const {user_key} = this.props.match.params;
		axios.post('/api/find_user_key/',{
			user_key
		})
		.then(response=>{
				if (response.status == 200){
					 const {user} = response.data;
					 this.setState({
                     	usernotfound:false,
                     	user
                     }); 

		        }else if(response.status == 201){
                     this.setState({
                     	usernotfound:true,
                     	showform:false
                     });
		        }
			})
		.catch(error=>{
			console.log(error);
		});
	}
	

	componentWillUnmount() {
	  
	   clearInterval(this.state.intervalId);
	}

	timer() {
	   this.setState({time:this.state.time-1});
	   console.log('Called');
	}

	 _handlekeypress(event){
                      const inputName =  event.target.name;
                      const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
                      switch (inputName) {
                          case 'password':
                             this.setState({
                                          passwordrequired:'hidden',
                                          password:inputValue,
                                          
                              });
                          break;
                          case 'c_password':
                             this.setState({
                                          c_passwordrequired:'hidden',
                                          c_password:inputValue,
                                          
                              });
                          break;
                          default:
                            console.log('Sorry, the state not found.');
                      }        
        }
    _usernotfound(){
    	return(
                 <div className="col-md-12">
                    <div className="container-fluid" style={{ display:'flex' }}>
                         <div className="col-md-4" style={{ display:'flex' , justifyContent:'center' , alignItems:'center',textAlign:'center' }} >
                            <img src="\images\theme\Stop.png" alt="Stop" />
                         </div>
                         <div className="col-md-8" style={{ display:'flex' , justifyContent:'center' , alignItems:'center',textAlign:'center' }} >
                         	<div className="alert alert-warning">
									<div className="container-fluid">
											<div className="alert-icon">
												 <i className="material-icons">warning</i>
											</div>
											<button type="button" className="close" data-dismiss="alert" aria-label="Close">
												                        <span aria-hidden="true"><i className="material-icons">clear</i></span>
											</button>
											   <p className="title">
						                         	 این لینک معتبر نمی باشد.
						                         	 کاربری با این مشخصات یافت نشد.
						                       </p>
											 </div>
							</div>
                         </div>
                    </div>
                 </div>
    		);
    }
    _submit(){
    	let {password , c_password } = this.state;
    	if (password != ''){
              if (password.length > 5){
			              if (c_password != ''){
				                  if (password == c_password){
					                       this.setState({
						                	    sameinput:false,
						                	    c_passwordrequired:'hidden',
							                    passwordlength:'hidden',
							                    passwordrequired:'hidden',
							                    spinner:true
						                    });
					                       axios.post('/api/reset_password',{
					                       	 user_key:this.state.user.user_key,
					                       	 password
					                       })
					                       .then(response=>{
                                                if (response.status == 200){
                                                      this.setState({
                                                      	 spinner:false,
                                                      	 success:true
                                                      },()=>{this._set()});

                                                }else{ 
                                                	console.log('Failed');
                                                }
					                       }).catch(error=>{
                                                console.log(error.response);
					                       });
				                  }else{
				                  
					                    this.setState({
					                	    sameinput:true,
					                	    c_passwordrequired:'hidden',
						                    passwordlength:'hidden',
						                    passwordrequired:'hidden'
					                    });
					                  
				                  }  
			              }else{
				                this.setState({
				                	sameinput:false,
				                   c_passwordrequired:'visible',
				                   passwordlength:'hidden',
				                   passwordrequired:'hidden'
				                });
			              }
              }else{
                  this.setState({
                  		   sameinput:false,
		                   c_passwordrequired:'hidden',
		                   passwordlength:'visible',
		                   passwordrequired:'hidden'
		          });
              }
    	}else{
    		 
	    		 this.setState({
	    		 	       sameinput:false,
	                       c_passwordrequired:'hidden',
		                   passwordlength:'hidden',
		                   passwordrequired:'visible'
	             });
	             
    	}
    }
    _showForm(){
    	const {user} = this.state;
    	return(
              <div className="col-md-12 pd-20">
	                <div className="col-md-12">
	                    <h5 className="pull-right">پسورد خود را تغییر دهید</h5>
	                </div>
	                <div className="login-card">
				                <div className="col-md-6 mb-10">

				                        
				                         <h5 className="pull-right"> <label  className="pull-right rtl ml-10"> آدرس پست الکترونیکی : </label> {user.email}</h5>

				                </div>
				                <div className="col-md-6 mb-10">
				                    
				                        
				                           
				                           <h5 className="pull-right"><label  className="pull-right rtl ml-10"> نام کاربری : </label>  {user.name}</h5>      
				                </div>
				                <div className="col-md-6 mb-10">
						                    <div className="input-group">
						                        <div className="form-group is-empty">
						                            <input type="password" name="c_password" className="form-control rtl" placeholder="تکرار پسورد..." value={this.state.c_password} onChange={this._handlekeypress.bind(this)} />
						                             <span className="rtl" style={{ color:'#f44336',display: this.state.c_passwordrequired=='visible' ? 'block' : 'none'}}><small>تکرار پسورد خود را وارد کنید.</small></span>
						                             <span className="rtl" style={{ color:'#f44336',display: this.state.sameinput ? 'block' : 'none'}}><small>پسورد و تکرار پسورد یکی نیستند.</small></span>
						                        </div>
						                        <span className="input-group-addon">
						                           <i className="material-icons">lock_outline</i>
						                        </span>
						                      </div>
				                </div>
				                <div className="col-md-6 mb-10">
				                    <div className="input-group">
				                        <div className="form-group is-empty">
				                            <input type="password" name="password" className="form-control rtl" placeholder="پسورد..." value={this.state.password} onChange={this._handlekeypress.bind(this)}/> 
				                            <span className="rtl" style={{ color:'#f44336',display: this.state.passwordrequired=='visible' ? 'block' : 'none'}}><small>پسورد جدید خود را وارد کنید.</small></span>
			                                <span className="rtl" style={{ color:'#f44336',display: this.state.passwordlength=='visible' ? 'block' : 'none'}}><small>طول پسورد شما باید بیشتر از 5 حرف باشد.</small></span>
				                        </div>
				                        <span className="input-group-addon">
				                           <i className="material-icons">lock_open</i>
				                        </span>
				                    </div>
				                </div>
				                <div className="col-md-12">
                                     {this.state.spinner==true ? this._spinner() : (this.state.success ? this._successmessage() : this._showbutton())}
				                </div>
	                </div>
              </div>
    		);
    }
    _set(){
      let intervalId = setInterval(()=>{this.timer()}, 1000);
      this.setState({intervalId});
    }
    _rem(){
    	clearInterval(this.state.intervalId);
    }
    _spinner(){
    	return(
              <div className="col-md-12" style={{ display:'flex', justifyContent:'center' }}><DotLoader color={'#9c27b0'} loading={this.state.registerspinner} /></div>
    		);
    }
    _showbutton(){
    	return(
 				<button className="btn btn-primary" onClick={()=>this._submit()}>به روز رسانی پسورد</button>
    		);
    }
    _successmessage(){
    	
		let {time} = this.state;
    	return(
                   <div className="alert-success text-justify">
                        <div className="container-fluid">
                           <div className="col-md-12">
		                           <button type="button" className="close mt-10" data-dismiss="alert" >
		                          		 <span aria-hidden="true"><i className="material-icons">clear</i></span>
		                           </button>
		                           <p className="pd-20">رمز عبور شما با موفقیت به روز رسانی شد. بعد از {time} ثانیه به صفحه اصلی انتقال میابید<i className="material-icons">check</i></p>
		                   </div>
                        </div>
                    </div>
    		);
    }
	render(){
		
		return(
			        <div>
			         {this.state.time==0 ? <Redirect to='/' /> : null }
				        <Header />
					      <div className="header header-filter">
	                        <div className="container-fluid">
	                            <div className="row">
	                                <div className="col-md-8 col-md-offset-2">
	                                    <div className="brand">
	                                        <h1 className="title white">وبی تک</h1>
	                                        <div className="separator separator-danger">✻</div>
	                                        <h3 className="text-center">ریست پسورد</h3>
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
	                                     <div className="container-fluid"> 
								            
									            	<div className="container-fluid">
													    <div className="row">
													       {this.state.usernotfound==true ? this._usernotfound() : this._showForm()}
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