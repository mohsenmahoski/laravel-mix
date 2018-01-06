import React, { Component } from 'react';
import  NavItem  from '../items/NavItem';
import Menu from '../items/Menu';
import axios from 'axios';
import UserLogin from '../pages/UserLogin';
import Cookie from 'universal-cookie';

class Header extends Component{
    constructor(props){
      super(props);
      this.state={
        display:'none',
        username:'',
        useremail:'',
      }
    }
    _userlogin(){
      if (this.state.display != 'block' ){
        this.setState({
          display:'block'
        });
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
    <nav className="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
         <UserLogin display={this.state.display}></UserLogin>
         <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                  
                    <div className="logo-container">
                        <NavItem activeOnlyWhenExact={false} className="nav-link" to="/">
                            <img src="../images/theme/logo.png" alt="modern tech" rel="tooltip" title="" data-placement="bottom" data-html="true" data-original-title="<b>WEBI TECH</b></br>گروهی مستعد وپویا در زمینه طراحی و دیزاین وب سایت</b>" />
                      
                        </NavItem>


                    </div>
                
            </div>

            <div className="collapse navbar-collapse" id="navigation-index">
                <ul className="nav navbar-nav navbar-right">
                   
                     <NavItem activeOnlyWhenExact={true} dataOriginalTitle="صفحه اصلی" className="active text-right nav-link" to="/">صفحه اصلی</NavItem>
                    
                    
                   
                       
                    <NavItem activeOnlyWhenExact={false} dataOriginalTitle="آخرین خبرها" className="nav-link" to="/blog">
                            بلاگ<i className="material-icons">dashboard</i>
                    </NavItem>
                
                 
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
                   
                         
                    <NavItem className="nav-link" dataOriginalTitle="با وبی تک بیشتر آشنا شوید." to="/about">
                       درباره ما<i className="material-icons">speaker_notes</i>
                    </NavItem>
                  
                    <NavItem className="nav-link" dataOriginalTitle="با ما در تماس باشید" to="/contact">
                       تماس با ما<i className="material-icons">perm_phone_msg</i>
                    </NavItem>
                    {this.state.username == '' ? <Menu title="ورود" data={[{title:'کاربر' , to:'#' , onClicking:()=>{this._userlogin()}},{title:'فروشنده' , to:'/seller/login'},{title:'نویسنده' , to:'/author/login'}]} /> : <NavItem className="nav-link" dataOriginalTitle="با ما در تماس باشید" to="/dashboard">{this.state.username}<i className="material-icons">perm_phone_msg</i></NavItem>}
                </ul>
                <div className="float-block">
                                                      
                </div>
            </div>
        </div>
    </nav>

        );
    }
}
 
export default Header;