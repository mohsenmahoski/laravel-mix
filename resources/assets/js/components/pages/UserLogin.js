import React, { Component } from 'react';
import Modal from '../items/Modal';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
      NewEmailRequired:'hidden',
      NewValidEmail:'hidden',
      NewUsernameRequired:'hidden',
      NewPasswordRequired:'hidden',
      NewC_passwordRequired:'hidden',
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
      	const token ="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiODE2N2JkNDI5ZGFmYTljZDU4ZGJhZDgxYzVlZTU4N2FlN2E1NDU2NWNlNDYwMDAzODdmZmI3ZjMzNjExNzA2NWI2ZDg3MGNjNjk3YTc4In0.eyJhdWQiOiIxIiwianRpIjoiMmI4MTY3YmQ0MjlkYWZhOWNkNThkYmFkODFjNWVlNTg3YWU3YTU0NTY1Y2U0NjAwMDM4N2ZmYjdmMzM2MTE3MDY1YjZkODcwY2M2OTdhNzgiLCJpYXQiOjE1MTUwODE4OTMsIm5iZiI6MTUxNTA4MTg5MywiZXhwIjoxNTQ2NjE3ODkzLCJzdWIiOiIxNyIsInNjb3BlcyI6W119.Kfdt2iBBvBQABNlyWzbi1NgPfgK7WhEE8495lgRlwNN0UapW6H4CYNCO8PcOrT5eRUmO6-vgfTvly6j5PW2NDN0ZdrFg7fQsVTim9sc7pSd_5M3kqJ6Ym7noxMaGGoZzyRA3x9uPRd8zbIWBNGdYNHoJtvKcSJ_SnXKNz3CdQZXO3FQwBVeEyLd-h7pZ1G4FOxs9SrJ5gYd_PAKHc7pSfDlkRa6cTWBmvl-PuGcLuygX506T01cXa-Ut81j9nn_AeEDr4ObV1W-D-rvyEMHRXeos7QTN3UZ8MhEpTFdjqSJgnuu2n8uii_1Xg5pP7Uj5q43_qBTZ1hTW11I-bZOvydMr9o7Bib4_F_JiPtOdu85SYPizX9itgBc2kc8Rb-KyWe_yUc_4GSJpL3XGpJ3ES8SD_VC1CAnydg-y_nP1kii69SgmeUjApSIoQ4Ig4Impdioh5SONPWXVnCTAM6Psi_JzwBvDrJx-7eazKPdnRAd4WJxDf9kwQhHspSbLLxfgGla0W6kKxyx7_4NFmbZPhb-AcAKMIfpYfKWAg04u1IoFseZSWDIMljgQ4we_O-BR_JpczHKJeMopAgWUUI-s745Qxo8-VjoBqy2gIICXjAEQW-6xe3Iav-UW7jH4dF48HwNcJ8AU10FRzUaiSRadRIx2FEMSxqvCzpDL9qnBg84";
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
                                     <span className="rtl" style={{ color:'#f44336',display: this.state.passwordRequired=='visibile' ? 'block' : 'none'}}><small>نام کاربری.</small></span>
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
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.c_passwordRequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.c_passwordCompare=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
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
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.passwordRequired=='visibile' ? 'block' : 'none'}}><small>ایمیل خود را وارد کنید.</small></span>
                                   <span className="rtl" style={{ color:'#f44336',display: this.state.passwordLength=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
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
                                  NewUsername:'hidden',
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
                                      NewPassword:inputValue,
                                     
                          });
                   break;
                   case 'NewC_password':
                         this.setState({
                                      NewC_passwordRequired:'hidden',
                                      NewC_password:inputValue,
                                     
                          });
                   break;
                   default:
                    console.log('Sorry, the state not found.');
              }
}
_handleRegister(){
      const{NewEmail , NewPassword , NewUsername , NewC_password} = this.state;
      if (NewEmail != '' ){
            const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (valid.test(NewEmail)) {
                 this.setState({
                        NewValidEmail:'hidden',   
                 });
                 console.log(this._checkEmail(NewEmail));
                 if(this._checkEmail(NewEmail)){
                       this.setState({
                                      EmailRegisteredBefore:true
                                  });
                 }else{
                       this.setState({
                                      EmailRegisteredBefore:false
                                  });
                 }
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
                            this.setState({
                               display:'none',
                               Redirect:true,

                            });
                      }
                   }) 
                     .catch(error=>{
                        if (error.response.data.error=="Unauthorised" , error.response.status==402) {
                           this.setState({
                              login:'failed'
                           });
                        }
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

_checkEmail(email){
         const NewEmail  = email;
         axios.post('/api/email_check',{
                          email:NewEmail
                   })
                     .then(response=>{
                          return response.data;
                     }) 
                       .catch(error=>{
                          console.log(error);
                       });
}

render(){
		return(
                <Modal display={this.state.display} > 
                   {this.state.loginForm ? (this.state.forgotPassword ? this._forgotPassword() : this._login()) : this._register()}
                </Modal>
			);
	}
} 



