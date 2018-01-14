import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';

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
      validEmail:'hidden',
      NameRequired:'hidden',
      FamilyRequired:'hidden',
      EmailRequired:'hidden',
      MessageRequired:'hidden',
      NoRoobotRequired:'hidden',
      MessageLength:'hidden',

    }
  }
  handleKeyPress(evnt){
          const inputName =  evnt.target.name;
          const inputValue = evnt.target.type === 'checkbox' ? evnt.target.checked : evnt.target.value;       
          switch (inputName) {
            case 'family':
               this.setState({ 
                            FamilyRequired:'hidden',
                            family:inputValue
                          });
              break;
            case 'name':
              this.setState({
                           NameRequired:'hidden',
                            name:inputValue
                          });
              break;
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
            case 'message':
              if (inputValue.length>10) {
                    this.setState({
                            MessageLength:'hidden',
                          });

              }
               this.setState({
                            MessageRequired:'hidden',
                            message:inputValue
                          });
              break;
            case 'no_robot':
               this.setState({
                            NoRoobotRequired:'hidden',
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
        
        if (name !== '' ) {
            if(family !=='' ){
                if (email !=='' ){
                        if (message !== '' && message.length > 10) {
                             if (no_robot !== false) {
                                    axios.post('/api/contact', {
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
                             }else{
                                this.setState({
                                      NoRoobotRequired:'visibile',
                                });
                             }
                        }else{
                            if (message.length<10 && message.length > 0 ) {
                              this.setState({
                                 MessageLength:'visibile',
                              });
                            }else{
                            this.setState({
                                   MessageRequired:'visibile',
                              });
                           }
                            
                        }
                }else{
                     this.setState({
                       EmailRequired:'visibile',
                    });
                }
            }else{
                this.setState({
                FamilyRequired:'visibile',
              });
            }
        }else{
          this.setState({
            NameRequired:'visibile',
          });
        } 
  }
    render() {
        return (
                <div>
                <Header />
                      <div className="header header-filter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="brand">
                                        <h1 className="title white">وبی تک</h1>
                                        <div className="separator separator-danger">✻</div>
                                        <h3 className="text-center">صفحه تماس با ما</h3>
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
                                <div className="section-fluid">
                                     <div className="container-fluid"> 
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
                                                                                         <input  value={this.state.family} onChange={this.handleKeyPress.bind(this)} className="form-control"   name="family" type="text" /><span className="rtl" style={{ color:'#f44336',display: this.state.FamilyRequired=='visibile' ? 'block' : 'none'}}>لطفا نام خانوادگی خود را وارد کنید!!</span>    
                                                                                        <span className="material-input"></span><span className="material-input"></span></div>
                                                                               </div>  
                                                                               <div className="col-md-6">
                                                                                    <div className="text-right form-group label-floating is-empty">
                                                                                     <label htmlFor="name" className="control-label">نام</label>
                                                                                     <input  className="form-control" value={this.state.name} onChange={this.handleKeyPress.bind(this)} name="name" type="text" /><span className="rtl" style={{ color:'#f44336',display: this.state.NameRequired=='visibile' ? 'block' : 'none'}}>لطفا نام خود را وارد کنید!!</span>    
                                                                                    <span className="material-input"></span><span className="material-input"></span></div>
                                                                               </div>
                                                                           </div>
                                                                            
                                                                           <div className="text-right form-group label-floating is-empty">
                                                                                <label htmlFor="email" className="control-label">ایمیل</label>
                                                                                 <input  value={this.state.email}  onChange={this.handleKeyPress.bind(this)} className="form-control"   name="email" type="email" /><span className="rtl" style={{ color:'#f44336',display: this.state.validEmail=='visibile' ? 'block' : 'none'}}>لطفا ایمیل صحیح وارد کنید!</span><span className="rtl" style={{ color:'#f44336',display: this.state.EmailRequired =='visibile' ? 'block' : 'none'}}>لطفا ایمیل خود را وارد کنید!</span>   
                                                                                <span className="material-input"></span>
                                                                                <span className="material-input"></span>
                                                                           </div>
                                                                           <div className="text-right form-group label-floating is-empty">
                                                                                 <label htmlFor="message" className="control-label">متن پیام</label>
                                                                                 <textarea className="form-control" value={this.state.message} onChange={this.handleKeyPress.bind(this)}  name="message" cols="50" rows="10" ></textarea> <span className="rtl" style={{ color:'#f44336',display: this.state.MessageRequired=='visibile' ? 'block' : 'none'}}>لطفا پیام خود را وارد کنید!!</span><span className="rtl" style={{ color:'#f44336',display: this.state.MessageLength=='visibile' ? 'block' : 'none'}}>لطفا پیام طولانی تری وارد کنید!!</span>   
                                                                                <span className="material-input"></span>
                                                                                <span className="material-input"></span>
                                                                           </div>
                                                                           <div className="row">
                                                                             <div className="col-md-6 pt-10 text-center">
                                                                                <div className="checkbox">
                                                                                    <label>
                                                                                        
                                                                                        من ربات نیستم
                                                                                        <input  type="checkbox" checked={this.state.no_robot} onChange={this.handleKeyPress.bind(this)} name="no_robot" /><span className="checkbox-material"><span className="check"></span></span><span className="rtl" style={{ color:'#f44336',display: this.state.NoRoobotRequired=='visibile' ? 'block' : 'none'}}>این گزینه الزامی میباشد!!</span> 
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
                                                         <div className="col-md-5">
                                                            <h2 className="title">راه های ارتباط با ما</h2>
                                                            <h5 className="card-description text-right">برای کسب اطلاعات بیشتر می توانید با استفاده از راه های ارتباطی با ما تماس بگیرید </h5>
                                                            <div className="info info-horizontal">
                                                                <div className="icon icon-primary">
                                                                    <i className="material-icons">pin_drop</i>
                                                                </div>
                                                                <div className="card-description text-right">
                                                                    <h4 className="info-title">آدرس شرکت وبی تک</h4>
                                                                    <p> مشهد بلوار وکیل آباد ....
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="info info-horizontal">
                                                                <div className="icon icon-primary">
                                                                    <i className="material-icons">phone</i>
                                                                </div>
                                                                <div className="card-description text-right">
                                                                    <h4 className="info-title">تلفن های تماس</h4>
                                                                    <p> مدیریت<br/>
                                                                        +40 762 321 762<br/>
                                                                        09105514062<br/>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                         </div>
                                                       </div>
                                                     </div>
                                                     <div className="alert alert-success" style={{display : this.state.success == true ? 'block' : 'none' }}>
                                                          <div className="container-fluid rtl">
                                                              <div className="alert-icon">
                                                                  <i className="material-icons">check</i>
                                                              </div>
                                                              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                                  <span aria-hidden="true"><i className="material-icons">clear</i></span>
                                                              </button>
                                                              <b>پیام شما با موفقیت ارسال شد!!</b>
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
 
export default Contact;