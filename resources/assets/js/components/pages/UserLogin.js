import React, { Component } from 'react';
import Modal from '../items/Modal';
import axios from 'axios';

export default class UserLogin extends Component{
	 constructor(){
    super();
    this.state={
      email:'',
      password:'',
      EmailRequired:'hidden',
      validEmail:'hidden',
      passwordRequired:'hidden'

    }
  }
	_handleKeyPress(event){
          const inputName =  event.target.name;
          const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
          switch (inputName) {
	            case 'email':
	            this.setState({
	                            EmailRequired:'hidden',
	            });
	            const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	               if (valid.test(inputValue)) {
	                   this.setState({
	                            validEmail:'hidden'
	                   });
	               }else{
	                  this.setState({
	                            validEmail:'visibile'
	                  });
	               }
	               this.setState({
	                            email:inputValue
	               });
	              break;
	            case 'password':
	               this.setState({
	                            passwordRequired:'hidden',
	                            password:inputValue
	                });
	             break;
	            default:
	              console.log('Sorry, the state not found.');
          }
          console.log(inputName);
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
    _handleRegister(){
    	axios.post('/api/register',{
    		name  : 'user',
         	email : 'user@gmail.com',
         	password :'123123123',
         	c_password: '123123123',
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
        		EmailRequired:'visibile',
        	});
        } 
        
  }
	render(){
		return(
                <Modal display={this.props.display} >
                      <div className="col-md-12">
                         <h5 className="title">
                         	ورود به حساب کاربری
                         </h5>
                      </div>
                      <div className="col-md-6 mb-10">
                            <div className="input-group">
                                <div className="form-group is-empty">
                                   <input name="password" type="password" className="form-control rtl" placeholder="پسورد..." onChange={this._handleKeyPress.bind(this)} />
                                     <span className="rtl" style={{ color:'#f44336',display: this.state.passwordRequired=='visibile' ? 'block' : 'none'}}><small>لطفا ایمیل صحیح وارد کنید.</small></span>
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
                                   <input name="email"  type="text" className="form-control rtl" placeholder="آدرس پست الکترونیکی..." onChange={this._handleKeyPress.bind(this)} />
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
                        <button className="btn btn-primary" onClick={()=>this._handleSubmit(this)}>ورود</button>
	                	<button className="btn btn-primary" onClick={()=>this._handleRegister()}>Register</button>
	                	<button className="btn btn-primary" onClick={()=>this._handleGetdata()}>GetData</button>
                	 </div>
                </Modal>
			);
	}
} 



