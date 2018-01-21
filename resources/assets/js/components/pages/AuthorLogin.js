import React, { Component } from 'react';
import Modal from '../items/Modal';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';
import { DotLoader } from 'react-spinners';

export default class AuthorLogin extends Component{
        constructor(props){
                  super(props);
                  this.state={
                    display:this.props.display,
                    loginspinner:false,
                    registerspinner:false,
                    notconfirm:false,
                    registersuccess:false,
                    unauthorized:false,

                    redirect:false,
                    login:null,
                    email:'',
                    password:'',
                    emailrequired:'hidden',
                    validemail:'hidden',
                    passwordrequired:'hidden',

                    forgotemail:'',
                    emailforgotrequired:'hidden',
                    validforgotemail:'hidden',
                    emailnotfound:false,
                    emailsended:false,
                    forgotspinner:false,

                    newEmail:'',
                    newusername:'',
                    newpassword:'',
                    newc_password:'',
                    newpasswordlength:'hidden',
                    newemailrequired:'hidden',
                    newvalidemail:'hidden',
                    newusernamerequired:'hidden',
                    newpasswordrequired:'hidden',
                    newc_passwordrequired:'hidden',
                    c_passwordcompare:'hidden',
                    emailregisteredbefore:true,


                    loginform:true,
                    forgotpassword:false,
                  }
        }
        componentWillReceiveProps(nextProps){
              this.setState({
                 display:nextProps.display
              });
        } 

        _register(){
            return(
                  <div>
                              <div className="col-md-12">
                                 <h5 className="text-center col-md-12 rtl title">
                                  ایجاد حساب کاربری جدید
                                 </h5>
                              </div>
                              <div className="col-md-6 mb-10">
                                    <div className="input-group">
                                         <div className="form-group is-empty">
                                           <input name="newEmail"  type="email" className="form-control rtl" placeholder="آدرس پست الکترونیکی..." onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.newEmail}  />
                                           <span className="material-input"></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.newemailrequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.newvalidemail=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.emailregisteredbefore===false ? 'block' : 'none'}}><small>این ایمیل قبلا در سایت ثبت شده.</small></span>
                                         </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">mail_outline</i>
                                        </span>
                                   </div>
                             </div>
                              <div className="col-md-6 mb-10">
                                    <div className="input-group">
                                        <div className="form-group is-empty">
                                           <input name="newusername" type="text" className="form-control rtl" placeholder="نام کاربری" onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.newusername} />
                                             <span className="rtl" style={{ color:'#f44336',display: this.state.newusernamerequired=='visibile' ? 'block' : 'none'}}><small>نام کاربری خود را وارد کنید.</small></span>
                                           <span className="material-input"></span>
                                        </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">face</i>
                                        </span>
                                   </div>
                             </div>
                           
                             <div className="col-md-6 mb-10">
                                    <div className="input-group">
                                         <div className="form-group is-empty">
                                           <input name="newc_password"  type="password" className="form-control rtl" placeholder="تکرار پسورد..." onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.newc_password} />
                                           <span className="material-input"></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.newc_passwordrequired=='visibile' ? 'block' : 'none'}}><small>تکرار پسورد را وارد کنید.</small></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.c_passwordcompare=='visibile' ? 'block' : 'none'}}><small>تکرار پسورد صحیح نیست.</small></span>
                                         </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">lock_outline</i>
                                        </span>
                                   </div>
                             </div>  
                             <div className="col-md-6 mb-10">
                                    <div className="input-group">
                                         <div className="form-group is-empty">
                                           <input name="newpassword"  type="password" className="form-control rtl" placeholder="پسورد ..." onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.newpassword}  />
                                           <span className="material-input"></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.newpasswordrequired=='visibile' ? 'block' : 'none'}}><small>پسورد خود را وارد کنید.</small></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.newpasswordlength=='visibile' ? 'block' : 'none'}}><small>پسورد شما باید حداقل 5 حرف باشد.</small></span>
                                         </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">lock_open</i>
                                        </span>
                                   </div>
                             </div>
                             <div className="col-md-12">
                                {this.state.registerspinner==true ? <div className="col-md-12" style={{ display:'flex', justifyContent:'center' }}><DotLoader color={'#9c27b0'} loading={this.state.registerspinner} /></div>: (this.state.registersuccess==true ? this._successRegister( 'حساب شما با موفقیت ایجاد شد.لینک تایید حساب به پست الکترونیکی شما ارسال شد ، با کلیک بر روی لینک حساب شما فعال خواهد شد. ' ) : this._registerButtons())}
                             </div>
                  </div>
              );
        }
        _handleRegisterKeyPress(event){
                      const inputName =  event.target.name;
                      const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
                      switch (inputName) {
                          case 'newusername':
                             this.setState({
                                          newusernamerequired:'hidden',
                                          newusername:inputValue,   
                              });
                           break;
                          case 'newEmail':
                              this.setState({
                                                newemailrequired:'hidden',
                                                
                                });
                              const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                 if (valid.test(inputValue)) {
                                     this.setState({
                                              newvalidemail:'hidden',
                                              
                                     });
                                 }else{
                                    this.setState({
                                              newvalidemail:'visibile',
                                            
                                    });
                                 }
                                 this.setState({
                                              newEmail:inputValue,
                                              
                                 });
                            break;
                            case 'newpassword':
                                 this.setState({
                                              newpasswordrequired:'hidden',
                                              newpasswordlength:'hidden',
                                              newpassword:inputValue,
                                             
                                  });
                           break;
                           case 'newc_password':
                                 this.setState({
                                              newc_passwordrequired:'hidden',
                                              c_passwordcompare:'hidden',
                                              newc_password:inputValue,
                                             
                                  });
                           break;
                           default:
                            console.log('Sorry, the state not found.');
                      }
        }
        _handleRegister(){
              const{newEmail , newpassword , newusername , newc_password} = this.state;
              if (newusername != '' ){
                   if (newEmail != '' ){
                      const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                      if (valid.test(newEmail)) {
                            this.setState({
                                    newvalidemail:'hidden',   
                            });
                            axios.post('/api/email_check',{
                                      email:newEmail
                               })
                                 .then(response=>{
                                     if (response.data) {
                                        this.setState({
                                          emailregisteredbefore:true
                                        });
                                       if(newpassword != '' ){
                                          if (newpassword.length >= 5){
                                              if (newc_password != ''){
                                                      if (newpassword == newc_password){
                                                          this.setState({
                                                            registerspinner:true,
                                                          });
                                                          axios.post('/api/register',{
                                                             name : newusername,
                                                             email : newEmail,
                                                             password : newpassword,
                                                             c_password : newc_password
                                                          })
                                                           .then(response=>{
                                                               if (response.status==200){
                                                                 this.setState({
                                                                   registerspinner:false,
                                                                   registersuccess:true,
                                                                 });
                                                               }
                                                           })
                                                            .catch(error=>{
                                                              console.log(error);
                                                            });
                                                      }else{
                                                        this.setState({
                                                           c_passwordcompare:'visibile'
                                                        });
                                                      }
                                            }else{
                                              this.setState({
                                                 newc_passwordrequired:'visibile'
                                              });
                                            }
                                          }else{
                                             this.setState({
                                                newpasswordlength:'visibile'
                                             });
                                          }
                                       }else{
                                          this.setState({
                                             newpasswordrequired:'visibile',
                                          });
                                       }
                                          
                                     }else{
                                          this.setState({
                                            emailregisteredbefore:false
                                          });
                                     }
                                 }) 
                                   .catch(error=>{
                                      console.log(error);
                                   });
                            
                    }else{
                         this.setState({
                                newvalidemail:'visibile',
                          });
                   }    
              }else{
                this.setState({
                     newemailrequired:'visibile'
                });
              }
             }else{
               this.setState({
                    newusernamerequired:'visibile'
               });
             }
        }
        _registerButtons(){
          return(
                     <div>
                       <button className="btn btn-primary" onClick={()=>this._handleRegister()}>ثبت نام</button>
                       <button className="btn btn-simple btn-info" onClick={()=>this.setState({loginform:true})}>قبلا ثبت نام کرده ام</button>
                     </div>
            );
        }
        _successRegister(message){
          return(
                       <div className="alert-success text-justify">
                          <div className="container-fluid">
                              <div className="col-md-12">
                                  <button type="button" className="close mt-10" data-dismiss="alert" aria-label="Close" onClick={()=>this.setState({display:'none'})}>
                                       <span aria-hidden="true"><i className="material-icons">clear</i></span>
                                  </button>
                             
                                  <p className="pd-20">{message}<i className="material-icons">check</i></p>
                              </div>
                          </div>
                      </div>
                );
        }
        _sendforgotemail(){
                this.setState({
                  forgotspinner:true
                 });
                if (this.state.forgotemail != ''){
                       const forgotemail = this.state.forgotemail;
                       const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                       if (valid.test(forgotemail)){
                              axios.post('/api/forgotpassword/',{
                                 email:forgotemail
                              })
                              .then(response=>{
                                  if (response.status == 201){
                                         this.setState({
                                            forgotspinner:false,
                                            emailnotfound:true
                                         });
                                  }else{
                                        this.setState({
                                           forgotspinner:false,
                                           emailnotfound:false,
                                           emailsended:true,
                                        });
                                  }
                              })
                              .catch(error=>{
                                console.log(error);
                              });
                       }else{
                          this.setState({
                              emailforgotrequired:'hidden',
                              validforgotemail:'visibile',
                          });
                       }
                }else{
                    this.setState({
                        emailforgotrequired:'visibile',
                        validforgotemail:'hidden',
                    });
                }
        }
        _forgotPassword(){
            return( 
                          <div>
                             <div className="col-md-12 mb-10">
                                    <h5 className="text-center col-md-12 rtl title" >برای بازیابی رمز عبور ایمیل خود را وارد کنید.</h5>
                                    <div className="input-group pull-right col-md-8">
                                         <div className="form-group is-empty">
                                           <input name="forgot" type="email" className="form-control rtl" placeholder="ایمیل خود را وارد کنید..." onChange={this._handleKeyPress.bind(this)} value={this.state.forgotemail} />
                                            <span className="rtl" style={{ color:'#f44336',display: this.state.emailforgotrequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.validforgotemail=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
                                           
                                         </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">email</i>
                                        </span>
                                   </div>
                                   <div className="input-group pull-right col-md-4">
                                         <div className="form-group is-empty">
                                           <button className="btn btn-primary" onClick={()=>this._sendforgotemail()} onChange={()=>this._handleKeyPress()}>بازیابی <i className="material-icons">cached</i></button>
                                         </div>
                                   </div>
                             </div>
                             <div className="col-md-12">
                                   {this.state.emailnotfound == true ? this._notConfirm('چنین آدرس ایمیلی ثبت نشده.') : null }
                                   {this.state.forgotspinner==true ? <div className="col-md-12" style={{ display:'flex', justifyContent:'center' }}><DotLoader color={'#9c27b0'} loading={this.state.forgotspinner} /></div>:(this.state.emailsended == true ? this._successRegister('ایمیل بازیابی رمز عبور با موفقیت ارسال شد') : null )}
                             </div>
                             <div className="col-md-12 text-center">
                                <button className="btn btn-simple btn-info" onClick={()=>this.setState({loginform:true,forgotpassword:false})}>قبلا ثبت نام کرده ام</button>
                            </div>
                          </div>
                    );
        }
        _login(){
            return(
                  <div>
                     {this.state.redirect===true ? <Redirect to="/author/dashboard"/> : null}
                              <div className="col-md-12">
                                 <h5 className="text-center col-md-12 rtl title">
                                  ورود به عنوان نویسنده
                                 </h5>
                              </div>
                              <div className="col-md-6 mb-10">
                                    <div className="input-group">
                                        <div className="form-group is-empty">
                                           <input name="password" type="password" className="form-control rtl" placeholder="پسورد..." onChange={this._handleKeyPress.bind(this)} value={this.state.password} />
                                             <span className="rtl" style={{ color:'#f44336',display: this.state.passwordrequired=='visibile' ? 'block' : 'none'}}><small>لطفا پسورد خود را وارد کنید.</small></span>
                                           <span className="material-input"></span>
                                        </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">lock_outline</i>
                                        </span>
                                   </div>
                             </div>
                             <div className="col-md-6 mb-10">
                                    <div className="input-group">
                                         <div className="form-group is-empty">
                                           <input name="email"  type="text" className="form-control rtl" placeholder="آدرس پست الکترونیکی..." onChange={this._handleKeyPress.bind(this)} value={this.state.email} />
                                           <span className="material-input"></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.emailrequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                           <span className="rtl" style={{ color:'#f44336',display: this.state.validemail=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
                                         </div>
                                        <span className="input-group-addon">
                                            <i className="material-icons">mail_outline</i>
                                        </span>
                                   </div>
                             </div>
                           <div className="col-md-12">
                              <p className="col-md-12 col-sm-12 pull-right text-center rtl error" style={{ display:this.state.login === 'failed' ? 'block' : 'none' , }} >ایمیل یا پسورد شما صحیح نیست ، مجددا تلاش کنید.</p>
                              <button className="btn btn-primary" onClick={()=>this._handleSubmit(this)}>ورود</button>
                              <button className="btn btn-simple btn-info" onClick={()=>this.setState({loginform:false})}>ثبت نام</button>
                              <button className="btn btn-simple btn-warning pull-right" onClick={()=>this.setState({forgotpassword:true})}>رمز عبور را فراموش کرده ام</button>
                             {this.state.notconfirm == true ? this._notConfirm('این حساب غیر فعال می باشد.') : null }
                             {this.state.unauthorized == true ? this._notConfirm('این حساب کاربری وجود ندارد') : null }
                             {this.state.loginspinner==true ? <div className="col-md-12" style={{ display:'flex', justifyContent:'center' }}><DotLoader color={'#9c27b0'} loading={this.state.loginspinner} /></div>:null}
                            }
                           </div>
                  </div>
              );
        }
        _notConfirm(message){
          return(
                   <div className="alert-danger text-justify mt-10">
                          <div className="container-fluid">
                              <div className="col-md-12">
                                  <button type="button" className="close mt-10" data-dismiss="alert" aria-label="Close" onClick={()=>this.setState({display:'none'})}>
                                       <span aria-hidden="true"><i className="material-icons">clear</i></span>
                                  </button>
                             
                                  <p className="pd-20">{message}<i className="material-icons">check</i></p>
                              </div>
                          </div>
                      </div>
            );
        }
        _handleKeyPress(event){
                      const inputName =  event.target.name;
                      const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
                      switch (inputName) {
                          case 'email':
                                  this.setState({
                                                  emailrequired:'hidden',
                                                  login:null
                                  });
                                  const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                     if (valid.test(inputValue)) {
                                         this.setState({
                                                  validemail:'hidden',
                                                  login:null,
                                         });
                                     }else{
                                        this.setState({
                                                  validemail:'visibile',
                                                  login:null
                                        });
                                     }
                                     this.setState({
                                                  email:inputValue,
                                                  login:null
                                     });
                          break;
                          case 'forgot':
                                  this.setState({
                                                  emailforgotrequired:'hidden',
                                                  login:null
                                  });
                                  const validforgot =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                     if (validforgot.test(inputValue)) {
                                         this.setState({
                                                  validforgotemail:'hidden',
                                                  login:null,
                                         });
                                     }else{
                                        this.setState({
                                                  validforgotemail:'visibile',
                                                  login:null
                                        });
                                     }
                                     this.setState({
                                                  forgotemail:inputValue,
                                                  login:null
                                     });
                          break;
                          case 'password':
                             this.setState({
                                          passwordrequired:'hidden',
                                          password:inputValue,
                                          login:null
                              });
                          break;
                          default:
                            console.log('Sorry, the state not found.');
                      }        
        }
        _handleSubmit(){
                this.setState({
                   notconfirm:false,
                   unauthorized:false
                });
                const email = this.state.email;
                const password = this.state.password;
                if (email !== '') {
                  const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                       if (valid.test(email)) {
                           this.setState({
                                    validemail:'hidden',
                           });
                           if (password != '' ){
                                 this.setState({
                                    loginspinner:true
                                 });
                                 axios.post('/api/author/login',{
                                        email,
                                        password
                                       })
                                 .then(response=>{
                                  console.log(response.data);
                                    if (response.status==200) {
                                           if (response.data.confirm){
                                              let token = response.data.success.token;
                                              let cookie = new Cookie;
                                              cookie.set('authortoken' , token , {path : '/'});
                                              this.setState({
                                                 loginspinner:false,
                                                 redirect:true,
                                             });
                                           }else{
                                              this.setState({
                                                loginspinner:false,
                                                unauthorized:false,
                                                notconfirm:true,
                                              });
                                           }
                                    }
                                 }) 
                                 .catch(error=>{
                                      let {status} = error.response;
                                      if(status==402){
                                          this.setState({
                                                   unauthorized:true,
                                                   loginspinner:false,
                                                   notconfirm:false,
                                              });
                                      }
                                   });
                           }else{
                              this.setState({
                                passwordrequired:'visibile'
                              });
                           }
                       }else{
                          this.setState({
                                    validemail:'visibile'
                          });
                       }
                }else{
                  this.setState({
                    validemail:'hidden',
                    emailrequired:'visibile',
                  });
                }      
        }
        render(){
        		return(
                        <Modal display={this.state.display} > 
                           {this.state.loginform ? (this.state.forgotpassword ? this._forgotPassword() : this._login()) : this._register()}
                        </Modal>
        			);
        }
} 



