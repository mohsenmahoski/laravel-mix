import React, { Component } from 'react';
import  NavItem  from '../items/NavItem';
import Menu from '../items/Menu';
import axios from 'axios';
import UserLogin from '../pages/UserLogin';
import AuthorLogin from '../pages/AuthorLogin';
import Cookie from 'universal-cookie';
import {Redirect} from 'react-router-dom';

class Header extends Component{
    constructor(props){
      super(props);
      this.state={
        displayuser:'none',
        displyauthor:'none',
        username:'',
        useremail:'',
        redirect:null,
        path:null,
        width:150,
      }
    }
    _userlogin(){
      if (this.state.displayuser != 'block' ){
        this.setState({
          displayuser:'block',
          displyauthor:'none',
        });
      }
       
    }
    _authorlogin(){
        if (this.state.displyauthor != 'block' ){
        this.setState({
          displayuser:'none',
          displyauthor:'block',
        });
      }
    }
    componentDidMount(){
      setTimeout(()=>{this.setState({width:0})},700);
    }
    _pagechange(path){
       if (this.props.redirect != undefined){
            if (path !== this.props.redirect.pathname ){
              this.setState({
                  width:150
               });
               setTimeout(()=>{ this.setState({path}) },700);
             }
       }
    }
    componentWillMount(){
         let cookie = new Cookie;
         let user_token =  cookie.get('user_token');
         let token = 'Bearer '+ user_token;
         if (user_token !== undefined){
             axios.post('/api/get_details',null,{
                headers:{Authorization:token}
              })
                   .then(response=>{
                    
                     let {email ,name } = response.data;
                     this.setState({
                      username:name,
                      useremail:email
                     });
                   }) 
                     .catch(error=>{
                      console.log(error);
                     });
         }
    }
    render() { 

        return (
               <div className="row">
               {this.state.path !== null ? <Redirect to={this.state.path} /> : null}
               <div className="holder" style={{width:`${this.state.width}%`}}>
                  
               </div>
                  <div className="container" style={{ position:'relative' }}>
                    <nav className="navbar navbar-transparent navbar-expand-md navbar-dark fixed-top">
                      <UserLogin display={this.state.displayuser}></UserLogin>
                      <AuthorLogin display={this.state.displyauthor} ></AuthorLogin>
                      <NavItem activeOnlyWhenExact={false} className="nav-link" to="/">
                        <img src="../images/theme/logo.png" alt="modern tech" title=""  />      
                      </NavItem>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                                      <li className="nav-item">
                                                <a className="nav-link pull-right"   onClick={()=>{this._pagechange('/')}}>
                                                   صفحه اصلی<i className="material-icons">home</i>
                                                </a>
                                      </li> 
                                      <li className="nav-item">
                                                <a className="nav-link pull-right"   onClick={()=>{this._pagechange('/blog')}}>
                                                    بلاگ<i className="material-icons">dashboard</i>
                                                </a>
                                      </li>
                                      <li className="nav-item">
                                                <a className="nav-link pull-right"   onClick={()=>{this._pagechange('/about')}}>
                                                  درباره ما<i className="material-icons">speaker_notes</i>
                                                </a>
                                      </li>
                                     
                                      <li className="text-right">
                                           <ul className="nav navbar-nav prl-0">
                                                    <li className="dropdown text-right" id="categories">
                                                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i className="material-icons">view_carousel</i>قالب ها
                                                                  <div className="ripple-container"></div>
                                                              </a>
                                                              <ul className="dropdown-menu">
                                                                         <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">فروشگاهی</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/64503.html">قالب (Yummy)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="http://www.templatemonsterpreview.com/65634.html">قالب (maxShop)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/51298.html">قالب  (Qjewelry)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/44949.html">قالب (JEWELRY)</a></li>
                                                                              </ul>
                                                                         </li>
                                                                         <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">گیم و بازی</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/52169.html">قالب  (Games)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/52656.html">قالب (Gameportal)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/58659.html">قالب (Finest Game)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/53931.html">قالب (Gameworld)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/52906.html">قالب (Gameportal)</a></li>
                                                                              </ul>
                                                                         </li>
                                                                         <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">الکترونیک ودیجیتال</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/63380.html">قالب (camPhone)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/64920.html">قالب  (iREPAIR)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/63987.html">قالب (Mr.Gizmo)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="http://www.templatemonsterpreview.com/65001.html">قالب (Spotlight)</a></li> 
                                                                              </ul>
                                                                         </li>
                                                                         <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">املاک وساختمان</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/63498.html">قالب  (Architera)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/58640.html">قالب (INTERNA)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/58705.html">قالب (ARCHITECTURE)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/58705.html">قالب (HANDYMAN)</a></li>
                                                                              </ul>
                                                                         </li>
                                                                         <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">گالری اتومبیل و وسیله نقلیه</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/64361.html">قالب (JetBull)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/61226.html">قالب (Citymotors)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/64595.html">قالب (Rentallo)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/58378.html">قالب (WildRide)</a></li>
                                                                              </ul>
                                                                         </li>
                                                                         <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">آموزشگاهی</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/54046.html">قالب (WELINSON)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/60129.html">قالب (Happy Learning)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="http://www.templatemonsterpreview.com/64701.html">قالب (Newsider)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/63613.html">قالب (Longriver University)</a></li>
                                                                              </ul>
                                                                         </li>
                                                                          <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" target="blank" href="#" className="menu">کلینیک دامپزشکی و حیوانات</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/51973.html">قالب (HORSE CLUB)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/51296.html">قالب (Aquamarine)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/62035.html">قالب (PetCenter)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/62029.html">قالب (Furry)</a></li>
                                                                              </ul>
                                                                         </li>
                                                                          <li className="dropdown-submenu text-right">
                                                                              <a tabIndex="-1" href="#" className="menu">هنری</a>
                                                                              <ul className="submenu" id="sub">
                                                                                <li><a tabIndex="-1" href="https://www.templatemonster.com/demo/65154.html">قالب هنری(CraftBird)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="http://www.templatemonsterpreview.com/65456.html">قالب هنری(National Museum)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/60115.html">قالب هنری(ArtWork)</a></li>
                                                                                <li><a tabIndex="-1" target="blank" href="https://www.templatemonster.com/demo/52560.html">قالب هنری(THEATRE)</a></li>
                                                                              </ul>
                                                                         </li>
                                                              </ul>
                                                    </li>  

                                           </ul>
                                      </li>
                                      <li className="nav-item">
                                                <a className="nav-link pull-right"   onClick={()=>{this._pagechange('/contact')}}>
                                                        تماس با ما<i className="material-icons">perm_phone_msg</i>
                                                </a>
                                      </li>
                                      {this.state.username == '' ? <Menu title="ورود" data={[{title:'کاربر' , to:'#' , onClicking:()=>{this._userlogin()}},{title:'نویسنده' , to:'#' , onClicking:()=>{this._authorlogin()}}]} /> : <NavItem className="nav-link" dataOriginalTitle="با ما در تماس باشید" to="/dashboard">{this.state.username}<i className="material-icons">perm_phone_msg</i></NavItem>}
                        </ul>
                      </div>
                    </nav>
                  </div>
               </div>
        );
    }
}
 
export default Header;
