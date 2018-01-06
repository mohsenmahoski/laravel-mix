import React, { Component } from 'react';
import Modal from '../items/Modal';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie';

export default class UserLogin extends Component{
	 constructor(props){
    super(props);
    this.state={
      display:this.props.display,

      Redirect:false,
      login:null,
      email:'',
      password:'',
      EmailRequired:'hidden',
      validEmail:'hidden',
      passwordRequired:'hidden',


      NewEmail:'',
      NewUsername:'',
      NewPassword:'',
      NewC_password:'',
      NewPasswordLength:'hidden',
      NewEmailRequired:'hidden',
      NewValidEmail:'hidden',
      NewUsernameRequired:'hidden',
      NewPasswordRequired:'hidden',
      NewC_passwordRequired:'hidden',
      C_passwordCompare:'hidden',
      EmailRegisteredBefore:true,


      loginForm:true,
      forgotPassword:false,

    }
  }
	componentWillReceiveProps(nextProps){
      this.setState({
         display:nextProps.display
      });
  }

  _handleClick(){
           axios.post('/api/login',{
           	email:'user2@gmail.com',
           	password:'123123123'
           })
             .then(response=>{
             	 console.log(response.data);
             }) 
               .catch(error=>{
               	console.log(error);
               });
  }
  
  _handleGetdata(){
      	const token ="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmYzgxMTljNjJjNzlkOTgwNGRhNDM3M2E1ZDMxMTQ4ZWU3ZGMzYzViYTY5ZmRlYmYyYWRhMzU5ZDEwOWFlODIyODMxM2Y3YTZmNDZkNmYyIn0.eyJhdWQiOiIxIiwianRpIjoiNWZjODExOWM2MmM3OWQ5ODA0ZGE0MzczYTVkMzExNDhlZTdkYzNjNWJhNjlmZGViZjJhZGEzNTlkMTA5YWU4MjI4MzEzZjdhNmY0NmQ2ZjIiLCJpYXQiOjE1MTUyNTEzMTMsIm5iZiI6MTUxNTI1MTMxMywiZXhwIjoxNTQ2Nzg3MzEzLCJzdWIiOiIxNiIsInNjb3BlcyI6W119.HYF0ziG9mlTrE6nHWeDZZGJLgIritVDGO51Mh-pa9WAY76x7jbUCdX8EDRrSFmieUPtdUm3mHa7DEfVwtUD9t-UXjFoM_Gkk9YrMxALT3hPOF18wEY1mOfDSjXYiF_ZV9YHrBsUoadMX1SkKxHnZG4j_O8sHjsHMO51VAnhvqBi-bJr6h8YpV_Ut3_k_wxKWTQP3Or4_MgwHi9AMtZ8cilKnmU35oqwMaHSLdm0HLzTa2MA9uVOYlUkIHU2dolt9xLTUwpZSKDE5nw0s71-TjPBpEEPq7DQB2_lR1qn_4gYmnQ3rbNOd4KUT5qpmZe6lNwmWpCsIBFjT1ZZHnRQpDK6IbJvF8fW7NJbUWVVkbtxAMZGEmaIqIEbbUM84S1c2FaW44toahcIbBoG78IGRVCKg2IYYOSfewOBD6C2aok0M2IGTreGP2S5LFrL1pLJQsG9aCNKLrjgPFTJF_-UcYDi1u5nZrZkeHuA2WG60par75x1B8MQ7QQcgeD5BRKiHzfgInKEj-xW0X8rn24zD9fXzSmOayP7APU1s1U74khUZBAJ3cWzEwfPThWLuxqSkrcnHfLS_nQHq7f8h-Rh_W2DiJsQyCfNNj3hiqRNFk6nidwm0Z85O866U1dl-cv93TMkTIigD0sP13pK_yuF6f27pE4kbOsOabxyPLWDGk68";
      	axios.post('/api/get_details',null,{
      		headers:{Authorization:token}
      	})
             .then(response=>{
             	 console.log(response.data);
             }) 
               .catch(error=>{
               	console.log(error);
               });
  }
 
  
  
_register(){
    return(

      <div>
             {this.state.Redirect===true ? <Redirect to="/dashboard"/> : null}
                      <div className="col-md-12">
                         <h5 className="text-center col-md-12 rtl title">
                          ایجاد حساب کاربری جدید
                         </h5>
                      </div>
                      <div className="col-md-6 mb-10">
                            <div className="input-group">
                                 <div className="form-group is-empty">
                                   <input name="NewEmail"  type="email" className="form-control rtl" placeholder="آدرس پست الکترونیکی..." onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.NewEmail}  />
                                   <span className="material-input"></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.NewEmailRequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.NewValidEmail=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.EmailRegisteredBefore===false ? 'block' : 'none'}}><small>این ایمیل قبلا در سایت ثبت شده.</small></span>
                                 </div>
                                <span className="input-group-addon">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                           </div>
                     </div>
                      <div className="col-md-6 mb-10">
                            <div className="input-group">
                                <div className="form-group is-empty">
                                   <input name="NewUsername" type="text" className="form-control rtl" placeholder="نام کاربری" onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.NewUsername} />
                                     <span className="rtl" style={{ color:'#f44336',display: this.state.NewUsernameRequired=='visibile' ? 'block' : 'none'}}><small>نام کاربری خود را وارد کنید.</small></span>
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
                                   <input name="NewC_password"  type="password" className="form-control rtl" placeholder="تکرار پسورد..." onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.NewC_password} />
                                   <span className="material-input"></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.NewC_passwordRequired=='visibile' ? 'block' : 'none'}}><small>تکرار پسورد را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.C_passwordCompare=='visibile' ? 'block' : 'none'}}><small>تکرار پسورد صحیح نیست.</small></span>
                                 </div>
                                <span className="input-group-addon">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                           </div>
                     </div>  
                     <div className="col-md-6 mb-10">
                            <div className="input-group">
                                 <div className="form-group is-empty">
                                   <input name="NewPassword"  type="password" className="form-control rtl" placeholder="پسورد ..." onChange={this._handleRegisterKeyPress.bind(this)} value={this.state.NewPassword}  />
                                   <span className="material-input"></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.NewPasswordRequired=='visibile' ? 'block' : 'none'}}><small>پسورد خود را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.NewPasswordLength=='visibile' ? 'block' : 'none'}}><small>پسورد شما باید حداقل 5 حرف باشد.</small></span>
                                 </div>
                                <span className="input-group-addon">
                                    <i className="material-icons">lock_open</i>
                                </span>
                           </div>
                     </div>
                     <div className="col-md-12">
                        <button className="btn btn-primary" onClick={()=>this._handleRegister()}>ثبت نام</button>
                        <button className="btn btn-simple btn-info" onClick={()=>this.setState({loginForm:true})}>قبلا ثبت نام کرده ام</button>
                    </div>
          </div>
      );
}
_handleRegisterKeyPress(event){

              const inputName =  event.target.name;
              const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
              switch (inputName) {
                  case 'NewUsername':
                     this.setState({
                                  NewUsernameRequired:'hidden',
                                  NewUsername:inputValue,   
                      });
                   break;
                  case 'NewEmail':
                      this.setState({
                                        NewEmailRequired:'hidden',
                                        
                        });
                      const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                         if (valid.test(inputValue)) {
                             this.setState({
                                      NewValidEmail:'hidden',
                                      
                             });
                         }else{
                            this.setState({
                                      NewValidEmail:'visibile',
                                    
                            });
                         }
                         this.setState({
                                      NewEmail:inputValue,
                                      
                         });
                    break;
                    case 'NewPassword':
                         this.setState({
                                      NewPasswordRequired:'hidden',
                                      NewPasswordLength:'hidden',
                                      NewPassword:inputValue,
                                     
                          });
                   break;
                   case 'NewC_password':
                         this.setState({
                                      NewC_passwordRequired:'hidden',
                                      C_passwordCompare:'hidden',
                                      NewC_password:inputValue,
                                     
                          });
                   break;
                   default:
                    console.log('Sorry, the state not found.');
              }
}
_handleRegister(){
      const{NewEmail , NewPassword , NewUsername , NewC_password} = this.state;
      if (NewUsername != '' ){
           if (NewEmail != '' ){
              const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (valid.test(NewEmail)) {
                    this.setState({
                            NewValidEmail:'hidden',   
                    });
                    axios.post('/api/email_check',{
                              email:NewEmail
                       })
                         .then(response=>{
                             if (response.data) {
                                this.setState({
                                  EmailRegisteredBefore:true
                                });
                               if(NewPassword != '' ){
                                  if (NewPassword.length >= 5){
                                      if (NewC_password != ''){
                                              if (NewPassword == NewC_password){
                                                  console.log('Registered');
                                              }else{
                                                this.setState({
                                                   C_passwordCompare:'visibile'
                                                });
                                              }
                                    }else{
                                      this.setState({
                                         NewC_passwordRequired:'visibile'
                                      });
                                    }
                                  }else{
                                     this.setState({
                                        NewPasswordLength:'visibile'
                                     });
                                  }
                               }else{
                                  this.setState({
                                     NewPasswordRequired:'visibile',
                                  });
                               }
                                  
                             }else{
                                  this.setState({
                                    EmailRegisteredBefore:false
                                  });
                             }
                         }) 
                           .catch(error=>{
                              console.log(error);
                           });
                    
            }else{
                 this.setState({
                        NewValidEmail:'visibile',
                  });
           }    
      }else{
        this.setState({
             NewEmailRequired:'visibile'
        });
      }
     }else{
       this.setState({
            NewUsernameRequired:'visibile'
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
                                   <input name="forgot" type="email" className="form-control rtl" placeholder="ایمیل خود را وارد کنید..." onChange={this._handleKeyPress.bind(this)} />
                                   <span className="material-input"></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.passwordRequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.passwordLength=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
                                 </div>
                                <span className="input-group-addon">
                                    <i className="material-icons">email</i>
                                </span>
                           </div>
                           <div className="input-group pull-right col-md-4">
                                 <div className="form-group is-empty">
                                   <button className="btn btn-primary" onClick={()=>this._handleRegister()}>بازیابی <i className="material-icons">cached</i></button>
                                 </div>
                           </div>
                     </div>
                     <div className="col-md-12 text-center">
                        <button className="btn btn-simple btn-info" onClick={()=>this.setState({loginForm:true,forgotPassword:false})}>قبلا ثبت نام کرده ام</button>
                    </div>
                  </div>
            );
}



_login(){
    return(
          <div>
             {this.state.Redirect===true ? <Redirect to="/dashboard"/> : null}
                      <div className="col-md-12">
                         <h5 className="text-center col-md-12 rtl title">
                          ورود به حساب کاربری
                         </h5>
                      </div>
                      <div className="col-md-6 mb-10">
                            <div className="input-group">
                                <div className="form-group is-empty">
                                   <input name="password" type="password" className="form-control rtl" placeholder="پسورد..." onChange={this._handleKeyPress.bind(this)} value={this.state.password} />
                                     <span className="rtl" style={{ color:'#f44336',display: this.state.passwordRequired=='visibile' ? 'block' : 'none'}}><small>لطفا پسورد خود را وارد کنید.</small></span>
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
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.EmailRequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.validEmail=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
                                 </div>
                                <span className="input-group-addon">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                           </div>
                     </div>
                   <div className="col-md-12">
                       <p className="col-md-12 col-sm-12 pull-right text-center rtl error" style={{ display:this.state.login === 'failed' ? 'block' : 'none' , }} >ایمیل یا پسورد شما صحیح نیست ، مجددا تلاش کنید.</p>
                      <button className="btn btn-primary" onClick={()=>this._handleSubmit(this)}>ورود</button>
                      <button className="btn btn-simple btn-info" onClick={()=>this.setState({loginForm:false})}>ثبت نام</button>
                      <button className="btn btn-simple btn-warning pull-right" onClick={()=>this.setState({forgotPassword:true})}>رمز عبور را فراموش کرده ام</button>
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
                                  EmailRequired:'hidden',
                                  login:null
                  });
                  const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                     if (valid.test(inputValue)) {
                         this.setState({
                                  validEmail:'hidden',
                                  login:null,
                         });
                     }else{
                        this.setState({
                                  validEmail:'visibile',
                                  login:null
                        });
                     }
                     this.setState({
                                  email:inputValue,
                                  login:null
                     });
                    break;
                  case 'password':
                     this.setState({
                                  passwordRequired:'hidden',
                                  password:inputValue,
                                  login:null
                      });
                   break;
                  default:
                    console.log('Sorry, the state not found.');
              }        
}
_handleSubmit(){
        const email = this.state.email;
        const password = this.state.password;
        if (email !== '') {
          const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               if (valid.test(email)) {
                   this.setState({
                            validEmail:'hidden',
                   });
                   if (password != '' ) {
                        axios.post('/api/login',{
                          email,
                          password
                         })
                   .then(response=>{
                      if (response.status==200) {

                              let token = response.data.success.token;
                              let cookie = new Cookie;
                              cookie.set('user_token' , token , {path : '/'});
                          
                            this.setState({
                               Redirect:true,
                            });
                      }
                   }) 
                     .catch(error=>{
                        console.log(error);
                     });
                   }else{
                      this.setState({
                        passwordRequired:'visibile'
                      });
                   }
               }else{
                  this.setState({
                            validEmail:'visibile'
                  });
               }
        }else{
          this.setState({
            validEmail:'hidden',
            EmailRequired:'visibile',
          });
        }      
}
render(){
		return(
                <Modal display={this.state.display} > 
                   {this.state.loginForm ? (this.state.forgotPassword ? this._forgotPassword() : this._login()) : this._register()}
                </Modal>
			);
	}
} 



