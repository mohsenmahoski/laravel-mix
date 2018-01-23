import React, { Component } from 'react';
import Carousel from '../items/Carousel';
import Tabs from '../items/Tabs';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            left:0,
            front:null,
            back:null,
            left2:80,
            front2:null,
            back2:null,
            left3:200,
            front4:null,
            back3:null,
            left4:150,
            front4:null,
            back4:null
        }
    }
    componentDidMount(){
       this.setState({
            front : setInterval(this._front.bind(this),65),
            front2 : setInterval(this._front2.bind(this),55),
            front3 : setInterval(this._front3.bind(this),60),
            front4 : setInterval(this._front4.bind(this),60)
       }); 
    }
    
    _front(){
        const {left,front} = this.state;
        if (left<10){
            this.setState({left:left+1});
        }else{
            clearInterval(front);
            this.setState({back : setInterval(this._back.bind(this),65)}); 
        }
    }
     _back(){
        const {left,back} = this.state;
        if (left>0){
            this.setState({left:left-1});
        }else{
            clearInterval(back);
            this.setState({front : setInterval(this._front.bind(this),65)}); 
        }
    }
    _front2(){
        const {left2,front2} = this.state;
        if (left2<200){
            this.setState({left2:left2+1});
        }else{
            clearInterval(front2);
            this.setState({back2 : setInterval(this._back2.bind(this),55)}); 
        }
    }
    _back2(){
        const {left2,back2} = this.state;
        if (left2>80){
            this.setState({left2:left2-1});
        }else{
            clearInterval(back2);
            this.setState({front2 : setInterval(this._front2.bind(this),55)}); 
        }
    }
    _front3(){
        const {left3,front3} = this.state;
        if (left3<300){
            this.setState({left3:left3+1});
        }else{
            clearInterval(front3);
            this.setState({back3 : setInterval(this._back3.bind(this),60)}); 
        }
    }
    _back3(){
        const {left3,back3} = this.state;
        if (left3>200){
            this.setState({left3:left3-1});
        }else{
            clearInterval(back3);
            this.setState({front3 : setInterval(this._front3.bind(this),60)}); 
        }
    }
    _front4(){
        const {left4,front4} = this.state;
        if (left4<350){
            this.setState({left4:left4+1});
        }else{
            clearInterval(front4);
            this.setState({back4 : setInterval(this._back4.bind(this),60)}); 
        }
    }
    _back4(){
        const {left4,back4} = this.state;
        if (left4>150){
            this.setState({left4:left4-1});
        }else{
            clearInterval(back4);
            this.setState({front4 : setInterval(this._front4.bind(this),60)}); 
        }
    }
    render() {
    	
        return (
        	<div>
             <Header />
                      <div className="header header-filter">
                        <div className="container">
                            <div className="row">
                                <div className="container">
                                    <div className="brand">
                                        <Carousel />
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                     <div className="main main-raised">
                                <nav className="navbar navbar-default">
                                        <div className="container-fluid">
                                             <div className="collapse navbar-collapse menu" id="example-navbar">
                                                    <div className="social pull-left">
                                                         <a className="cyrcle-icon" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                         <a className="cyrcle-icon" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                                         <a className="cyrcle-icon" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                         <a className="cyrcle-icon" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                         <a className="cyrcle-icon" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                                    </div>  
                                                    <div className="path pull-right">
                                                         <a href="/" className="pull-right">صفحه اصلی<div className="ripple-container"></div></a>
                                                          <a href="/" className="pull-right">صفحه اصلی<div className="ripple-container"></div></a>
                                                    </div>           
                                             </div>
                                        </div>
                                </nav>
                                 
						          <div className="row"> 
                                       <h3 className="text-center black-title"><b>قالب کار خود را انتخاب کنید</b></h3>
                                       <p className="rtl text-center"><b>شما می توانید از بین قالب های متنوع قالب مناسب برای کسب و کار خود را انتخاب کنید.</b></p>
                                       <div className="container-fluid flex-center">
                                                <a href=""  className="mask item-banner">
                                                    <img  src="images/theme/banner1.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption">  
                                                        <h5 className="caption-title text-right">یک فروشگاه اینترنتی موفق چه امکاناتی دارد؟</h5>  
                                                        
                                                        <p className="text-right">یک فروشگاه اینترنتی برا ی موفقیت نیاز به فاکتور هایی خاص  نظیر سرعت اجرایی بالا ، ظاهری زیبا و کاربر پسند و..</p>  
                                                    </div>  
                                                </a>
                                                <a href=""  className="mask item-banner">
                                                    <img  src="images/theme/banner2.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption">  
                                                        <h5 className="caption-title mb-20 text-right" >چطور کار وتخصص خود را به دیگران معرفی کنیم؟</h5>  
                                                        <p className="text-right">با داشتن وب سایتی حرفه ای موفقیت کار خود را تضمین کنید...</p>  
                                                    </div>  
                                                </a>
                                                 <a href=""  className="mask item-banner">
                                                    <img  src="images/theme/banner2.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption">  
                                                        <h5 className="caption-title mb-20 text-right" >چطور کار وتخصص خود را به دیگران معرفی کنیم؟</h5>  
                                                        <p className="text-right">با داشتن وب سایتی حرفه ای موفقیت کار خود را تضمین کنید...</p>  
                                                    </div>  
                                                </a>
                                                 <a href=""  className="mask item-banner">
                                                    <img  src="images/theme/banner2.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption">  
                                                        <h5 className="caption-title mb-20 text-right" >چطور کار وتخصص خود را به دیگران معرفی کنیم؟</h5>  
                                                        <p className="text-right">با داشتن وب سایتی حرفه ای موفقیت کار خود را تضمین کنید...</p>  
                                                    </div>  
                                                </a>
                                       </div>
                                </div>
						      <Tabs />
                              <div className="section">
                                   <div className="row">
                                         <div className="container-fluid">
                                            <div className="row"> 
                                                  <div className="col-md-8 col-md-offset-2 text-center">
                                                    <h2 className="title title-black ">چرا وبی تک ؟</h2>
                                                    <h5 className="description"><b>وبی تک</b> با سال ها تجربه در حوزه طراحی سایت ، از تاثیر یک سایت حرفه ای در معرفی کسب و کار شرکت ها آگاه است . در همین راستا این شرکت با در اختیار داشتن تیمی حرفه ای و مطابق با آخرین تکنولوژی های روز دنیا ، تخصص و خلاقیت را در کنار هم قرار داده تا وب سایت شما علاوه بر داشتن ظاهری زیا و متفاوت ، تبدیل به ابزاری قدرتمند برای نمایش شخصیت کاریتان و افزایش فروش شما گردد . </h5>
                                                  </div>
                                            </div>

                                          <div className="col-md-12 flex-center">
                                                <div className="card note-card">
                                                        <div className="col-md-12 text-center mb-10">
                                                            <a href="#" className="link-none font-icon">
                                                             
                                                                <i className="bordered material-icons mb-10 " aria-hidden="true">account_balance</i>
                                                            
                                                               
                                                               <div className="clearfix"></div>
                                                               <strong>طراحی فروشگاه اینترنتی</strong>
                                                            </a>
                                                       </div>
                                                         <p className="text-justify">
                                                            طراحی فروشگاهی یکی دیگر از خدمات شرکت طراحی وبسایت مدرن تک است، طراحی فروشگاه های اینترنتی که برای ایجاد کسب و کار آنلاین مناسب هستند، ما با چندین سال تجربه در زمینه طراحی وب سایت فروشگاهی یک گزینه عالی برای طراحی وبسایت فروشگاهی است


                                                         </p>
                                                 </div>
                                                 <div className="card note-card">
                                                        <div className="col-md-12 text-center mb-10">
                                                            <a href="#" className="link-none font-icon">
                                                               <i className="material-icons mb-10  bordered" aria-hidden="true">update</i>
                                                               <div className="clearfix"></div>
                                                               <strong>ضمانت و پشتییبانی سایت</strong>
                                                            </a>
                                                       </div>
                                                         <p className="text-justify">ما وب سایت شما را به طور
                                                           24 ساعته توسط تیمی مجرب پشتیبانی کرده و در صورت عدم رضایت وجه شما را باز پس میگردانیم
                                                         </p>
                                                 </div>
                                                 <div className="card note-card">
                                                        <div className="col-md-12 text-center mb-10">
                                                            <a href="#" className="link-none font-icon">
                                                               <i className="material-icons mb-10  bordered" aria-hidden="true">assignment</i>
                                                               <div className="clearfix"></div>
                                                               <strong>طراحی وب سایت شخصی</strong>
                                                            </a>
                                                       </div>
                                                         <p className="text-justify">داشتن یک وب سایت مانند این میباشد که شما رزومه خود را برای هر کسی ارسال یا همان پست مینمایید و شما زمانی که هر هفته با چندین فرصت شغلی که به شما پیشنهاد داده میشود مواجه خواهید شد.
                                                         </p>
                                                 </div>
                                                 <div className="card note-card">
                                                            <div className="col-md-12 text-center mb-10">
                                                                <a href="#" className="link-none font-icon">
                                                                   <i className="material-icons mb-10  bordered" aria-hidden="true">verified_user</i>
                                                                   <div className="clearfix"></div>
                                                                   <strong>طراحی وب سایت سازمانی</strong>
                                                                </a>
                                                            </div>
                                                             <p className="text-justify"> امروزه با توجه به اینکه در دستور کار اکثر سازمان های بزرگ خصوصی و دولتی سرعت بخشیدن به ارائه خدمات برای ارباب رجوع از اولویت های کاری می باشد داشتن یک وب سایت سازمانی مسئله ای مهم خواهد بود. 
                                                             </p>
                                                </div>
                                             </div>
                                         </div>
                                   </div>
                              </div>
                              <div className="section section-bg news">
                                                <div className="col-12 text-center">
                                                        <blockquote className="blockquote text-center">
                                                          <h1 className="title mb-0">آخرین مطالب و خبر ها</h1>
                                                          <footer className="blockquote-footer"><small>خبرهای دنیای فناوری اطلاعات</small></footer>
                                                        </blockquote>
                                                </div>
                                                <div className="row">
                                                     <div className="container ">
                                                              <div className="col-md-12 flex-center rtl">
                                                                        
                                                                            <div className="card">
                                                                              <img className="card-img-top" src="./images/blog1.jpg" alt="Card image cap" />
                                                                              <div className="card-body">
                                                                                <p className="rtl">برگزاری کارگاه آموزشی استانداردهای مبانی کیفیت نرم افزار</p>
                                                                                <a href="#" className="btn btn-outline-secondary">ادامه خبر</a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="card">
                                                                              <img className="card-img-top" src="./images/blog2.jpg" alt="Card image cap" />
                                                                              <div className="card-body">
                                                                                <p className="rtl">کارگاه آموزشی سرویس های ابری درون سازمانی در سالن امام جواد (ع) برگزار شد.</p>
                                                                                <a href="#" className="btn btn-outline-secondary">ادامه خبر</a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="card">
                                                                              <img className="card-img-top" src="./images/blog3.jpg" alt="Card image cap" />
                                                                              <div className="card-body">
                                                                                <p className="rtl">برگزاری کارگاه آموزشی در ستاد وزارت خانه به منظور به منظور آشنایی کارکنان با امکانات جدید mail server جدید</p>
                                                                                <a href="#" className="btn btn-outline-secondary">ادامه خبر</a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="card">
                                                                              <img className="card-img-top" src="./images/blog4.jpg" alt="Card image cap" />
                                                                              <div className="card-body">
                                                                                <p className="rtl">برگزاری نشست تقدیر و تشکر از مشارکت فعال اعضای کمیته ملی و ارزیابی عملکرد حوزه فناوری اطلاعات دانشگاه ها</p>
                                                                                <a href="#" className="btn btn-outline-secondary">ادامه خبر</a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="card">
                                                                              <img className="card-img-top" src="./images/blog5.jpg" alt="Card image cap" />
                                                                              <div className="card-body">
                                                                                <p className="rtl">گسترش خدمات نوین الکترونیک سازمانی وزارت بهداشت، درمان وآموزش پزشکی</p>
                                                                                <a href="#" className="btn btn-outline-secondary">ادامه خبر</a>
                                                                              </div>
                                                                            </div>
                                                                            <div className="card">
                                                                              <img className="card-img-top" src="./images/blog6.jpg" alt="Card image cap" />
                                                                              <div className="card-body">
                                                                                <p className="rtl">ششمین همایش مدیران آمار و فناوری اطلاعات سال 1396</p>
                                                                                <a href="#" className="btn btn-outline-secondary">ادامه خبر</a>
                                                                              </div>
                                                                            </div>
                                                                        
                                                              </div>
                                                     </div>
                                                </div>
                                               
                              </div>
                              <div className="parallex navigation-example custom-filter" style={{backgroundImage: "url('../images/theme/developer.jpg')"}}>
                                      <div className="section">
                                           <div className="row">
                                                <div className="container">
                                                          <div className="col-md-12 text-center">
                                                                <h4 className="withe"><b>نیازمند چه تکنولوژی هستید؟</b></h4>
                                                                <div className="clearfix"></div>
                                                                <h6 className="withe pb-20">استفاده از تکنولوژی های متنوع در طراحی وب سایت</h6>
                                                          </div>
                                                       <div className="col-md-12 text-center ">
                                                            <img src="/images/tech/bootstrap.png" className="responsive "/>
                                                            <img src="/images/tech/laravel.png" className=" responsive"/>
                                                             <img src="/images/tech/nodejs.png" className=" responsive"/>
                                                             
                                                             <img src="/images/tech/magento-logo.png" className="responsive "/>
                                                             <img src="/images/tech/react.png" className="responsive "/>
                                                             <img src="/images/tech/wordpress-logo-vector-01.png" className="responsive "/>
                                                       </div>
                                                        
                                                                
                                                 </div>  
                                           </div>
                                      </div>
                              </div>
                              <div className="section section-components section-dark">
                                    <div className="row">
                                      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <img id="floatimages" className="components-macbook" src="/images/theme/laptop-basic.png" alt=""/>
                                                <img className="table1" src="/images/theme/table.jpg" alt="" style={{ left:this.state.left4 }}/>
                                                <img className="share-btn-img" src="/images/theme/share-btn.png" alt="" style={{ left:this.state.left3 }}/>
                                                <img className="coloured-card-btn-img" src="/images/theme/coloured-card-with-btn.png" alt="" style={{ left:this.state.left2 }}/>
                                                <img className="coloured-card-img" src="/images/theme/coloured-card.png" alt="" style={{ left:this.state.left }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                            <div className="container-fluid basic-container">
                                                <h3 className="title">طراحی المان های وب سایت</h3>
                                                <h6 className="category text-right withe">طراحی اجزای تشکیل دهنده وب سایت با استفاده از Bootstrap 4</h6>
                                                <h5 className="description text-justify">برای داشتن وب سایتی منحصر به فرد با دیزاین خاص باید المان های وب سایت مانند دکمه های وب سایت ، منو و ... طراحی شوند.همواره استفاده از Bootstrap در طراحی وب سایت باعث می شود طراحی وب سایت استاندارد و چشم نواز شود.ما با تغییر و شخصی سازی Bootstrap دیزاین و طراحی خاص برای وب سایت شما فراهم می کنیم .</h5>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                              </div>
                              
                              <div className="subscribe-line subscribe-line-image custom-filter" data-parallax="true" style={{ backgroundImage: "url('/images/theme/office.jpg')" }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3">
                                                <div className="text-center">
                                                    <h3 className="title withe">ثبت نام در اشتراک خبرنامه</h3>
                                                    <p className="card-description withe">
                                                        باثبت نام در خبرنامه مدرن تک از جدیدترین خبرهای دنیای فنااوری اطلاعات مطلع شوید و اولین فردی باشید محصولات جدید وبی تک دیدن می کند
                                                    </p>
                                                </div>

                                                <div className="card card-raised card-form-horizontal">
                                                    <div className="card-content">
                                                        <form>
                                                          <input name="_token" type="hidden"/>
                                                           <div className="row">
                                                               <div className="col-sm-4">
                                                                   <input className="btn-primary btn btn-rose btn-block" type="submit" value="ثبت نام" />
                                                               </div>
                                                          
                                                               <div className="col-sm-8">
                                                                    <div className="input-group">
                                                                        <div className="form-group is-empty">
                                                                         <input className="text-right form-control" name="email" type="email" />
                                                                           <span className="material-input"></span>
                                                                           <span className="material-input"></span>
                                                                        <span className="material-input"></span></div>
                                                                        <span className="input-group-addon">
                                                                            <i className="material-icons">mail</i>
                                                                        </span>
                                                                    </div>
                                                               </div>
                                                           </div>
                                                        </form>
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
 
export default Home;