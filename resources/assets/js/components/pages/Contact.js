import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Contact extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      family:'',
      message:'',
      email:'',
      no_robot:false,
      success:false,
    }
  }
  handleKeyPress(evnt){
          console.log();
          const inputName =  evnt.target.name;
          const inputValue = evnt.target.type === 'checkbox' ? evnt.target.checked : evnt.target.value;       
          switch (inputName) {
            case 'family':
               this.setState({
                            family:inputValue
                          });
              break;
            case 'name':
              this.setState({
                            name:inputValue
                          });
              break;
            case 'email':
               this.setState({
                            email:inputValue
                          });
              break;
            case 'message':
               this.setState({
                            message:inputValue
                          });
              break;
            case 'no_robot':
               this.setState({
                            no_robot:inputValue
                          });
              break;
            default:
              console.log('Sorry, the state not found.');
          }
  }

  handleSubmit(e){
        e.preventDefault();
        const name = this.state.name;
        const family = this.state.family;
        const message = this.state.message;
        const email = this.state.email;
        const no_robot = this.state.no_robot;
       
        axios.post('/contact', {
          name : name,
          family : family,
          message : message,
          email : email,
          no_robot : no_robot,
        })
        .then((response) => {
         
          if (response.data == 'Ok') {
             this.setState({
                    name:'',
                    family:'',
                    message:'',
                    email:'',
                    no_robot:false,
                    success:true,
            });
           }else{console.log('failed to refresh form')}
           
         
        })
        .catch(function (error) {
          console.log(error);
        });
  }
    render() {
        return (
          <div className="section">
             <div className="row">
               <div className="container-fluid">
                  <div className="col-md-5 col-md-offset-1">
                    <div className="card card-contact">
                       <form onSubmit={this.handleSubmit.bind(this)} >
                            <div className="header header-raised header-primary text-center">
                                <h4 className="card-title">تماس با ما</h4>
                            </div>
                            <div className="card-content">
                                   <div className="row">
                                       <div className="col-md-6 ">
                                                <div className="text-right form-group label-floating is-empty">
                                                 <label htmlFor="family" className="control-label">نام خانوادگی</label>
                                                 <input ref="family" value={this.state.family} onChange={this.handleKeyPress.bind(this)} className="form-control"   name="family" type="text" id="family"/>    
                                                <span className="material-input"></span><span className="material-input"></span></div>
                                       </div>  
                                       <div className="col-md-6">
                                            <div className="text-right form-group label-floating is-empty">
                                             <label htmlFor="name" className="control-label">نام</label>
                                             <input ref="name" className="form-control" value={this.state.name} onChange={this.handleKeyPress.bind(this)} name="name" type="text" id="name"/>    
                                            <span className="material-input"></span><span className="material-input"></span></div>
                                       </div>
                                   </div>
                                    
                                   <div className="text-right form-group label-floating is-empty">
                                        <label htmlFor="email" className="control-label">ایمیل</label>
                                         <input ref="email" value={this.state.email}  onChange={this.handleKeyPress.bind(this)} className="form-control"   name="email" type="email" id="email"/>    
                                        <span className="material-input"></span>
                                   <span className="material-input"></span></div>
                                   <div className="text-right form-group label-floating is-empty">
                                         <label htmlFor="message" className="control-label">متن پیام</label>
                                         <textarea className="form-control" value={this.state.message} onChange={this.handleKeyPress.bind(this)}  name="message" cols="50" rows="10" id="message"></textarea>    
                                        <span className="material-input"></span>
                                   <span className="material-input"></span></div>
                                   <div className="row">
                                     <div className="col-md-6 pt-10 text-center">
                                        <div className="checkbox">
                                            <label>
                                                
                                                من ربات نیستم
                                                <input  type="checkbox" checked={this.state.no_robot} onChange={this.handleKeyPress.bind(this)} name="no_robot" /><span className="checkbox-material"><span className="check"></span></span>
                                            </label>
                                        </div>
                                     </div>
                                     <div className="col-md-6 text-center">

                                          <input className="btn btn-primary" type="submit" value="ارسال پیام"/>  
                                     </div>
                                   </div>
                             
                           </div>
                       </form>
                    </div>
                 </div>
               </div>
             </div>
             <div className="alert alert-success" style={{display : this.state.success == true ? 'block' : 'none' }}>
                <div className="container-fluid">
                    <div className="alert-icon">
                        <i className="material-icons">check</i>
                    </div>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i className="material-icons">clear</i></span>
                    </button>
                    <b>Success Alert:</b> Yuhuuu! You've got your $11.99 album from The Weeknd
                </div>
            </div>
          </div>

        );
    }
}
 
export default Contact;