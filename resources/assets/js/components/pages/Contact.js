import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import {withGoogleMap,GoogleMap,Marker,} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";


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
                                  console.log(this.state);
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
  _map(){
      const props = this.props;
      const center = { lat:   36.3253774377407, lng: 59.514559507369995 };
      const MapWithAMarker = withGoogleMap(props =>
                                        <GoogleMap
                                          defaultZoom={16}
                                          defaultCenter={{ lat: 36.325308286843516, lng:59.51423764228821 }}
                                        >
                                          <Marker
                                            position={{ lat:36.325308286843516, lng:59.51423764228821 }}
                                          />
                                          <InfoBox
                                                defaultPosition={new google.maps.LatLng(center.lat, center.lng)}
                                                options={{ closeBoxURL: ``, enableEventPropagation: true }}
                                              >
                                                <div style={{ background:'#f9f9f978',opacity: 1, padding: `12px`,color:`#000`,borderRadius:'5px',border:'1px solid red' }}>
                                                  <div style={{ fontSize: `22px`, fontColor: `#08233B`}}>
                                                    <img src="/images/theme/logo.png" width="80px" height="51px" />
                                                  </div>
                                                </div>
                                              </InfoBox>
                                        </GoogleMap>
                                      );
      return(
             <MapWithAMarker
                        containerElement={<div style={{ height: `320px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                      />
        );
  }
    render() {
      const center = {lat: 36.325, lng: 59.504};
      const zoom = 12;
        return (
                <div>
                 <Header redirect={this.props.location} />
                       <div className="header header-filter">
                         <div className="container flex-center">
                              <div className="col-md-12 flex-center" style={{ minHeight:'325px',padding:0 }}>  
                                  <div className="shape"></div>
                                  <div style={{ width:'1200px', height:'325px' ,zIndex:-1}}>
                                      { this._map() }
                                  </div>
                              </div>
                         </div>
                        </div>
                        <div className="row">
                          <div className="container">
                           <div className="main main-raised" style={{     background:'url("/images/theme/busy_city.jpg")' }}>
                                    <div className="shape"></div>
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
                                                             <div className="container flex-center">
                                                                <div className="col-md-5">
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
                                                                                   <div className="col-md-6 pt-15 text-center">
                                                                                      
                                                                                          <label className="flex-center">
                                                                                              من ربات نیستم
                                                                                              <input className="checkbox"  type="checkbox" checked={this.state.no_robot} onChange={this.handleKeyPress.bind(this)} name="no_robot" />
                                                                                                  <span className="rtl" style={{ color:'#f44336',display: this.state.NoRoobotRequired=='visibile' ? 'block' : 'none'}}>این گزینه الزامی میباشد!!</span> 
                                                                                          </label>
                                                                                    
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
                                                                  <h2 className="title text-right" style={{ color:'#FFF' }}>راه های ارتباط با ما</h2>
                                                                  <h5 className="card-description text-right" style={{ color:'#FFF' }} >برای کسب اطلاعات بیشتر می توانید با استفاده از راه های ارتباطی با ما تماس بگیرید </h5>
                                                                  <div className="info info-horizontal">
                                                                      <div className="icon icon-primary">
                                                                          <i className="material-icons" style={{ color:'#FFF' }}>pin_drop</i>
                                                                      </div>
                                                                      <div className="card-description text-right">
                                                                          <h4 className="info-title" style={{ color:'#FFF' }}>آدرس شرکت وبی تک</h4>
                                                                          <p style={{ color:'#FFF' }}> مشهد بلوار وکیل آباد ....
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                                  <div className="info info-horizontal">
                                                                      <div className="icon icon-primary">
                                                                          <i className="material-icons" style={{ color:'#FFF' }}>phone</i>
                                                                      </div>
                                                                      <div className="card-description text-right">
                                                                          <h4 className="info-title" style={{ color:'#FFF' }}>تلفن های تماس</h4>
                                                                          <p style={{ color:'#FFF' }}> مدیریت<br/>
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
                          </div>
                      </div>
                            <Footer />
                </div>
        );
    }
}
 
export default Contact;

