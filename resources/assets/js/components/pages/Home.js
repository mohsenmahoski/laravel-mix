import React, { Component } from 'react';
import Carousel from '../items/Carousel';
import Tabs from '../items/Tabs';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import LatestBlogs from '../items/LatestBlogs';
import axios from 'axios';
import Socials from '../items/Socials';
import Message from '../items/Message';


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
            back4:null,
            
            height:0,
            language:null,
            messagedisplay:'none',

            posts:[],
        }
    }
    componentWillMount(){
        axios.get('api/home')
        .then(response=>{
            this.setState({
                posts:response.data
            });
        })
        .catch(err=>{
            console.log(response.error);
        });
    }
    _message(char){
        if (char=='R'){
            this.setState({
                height:window.innerHeight,
                messagedisplay:'block',
                language:'R',
            })
        }
        if (char=='RN'){
            this.setState({
                height:window.innerHeight,
                messagedisplay:'block',
                language:'RN',
               
            })
        }
        if (char=='L'){
            this.setState({
                height:window.innerHeight,
                messagedisplay:'block',
                language:'L',
            })
        }
        if (char=='W'){
            this.setState({
                 height:window.innerHeight,
                language:'W',
                messagedisplay:'block',
            })
        }
        if (char=='M'){
            this.setState({
                height:window.innerHeight,
                messagedisplay:'block',
                language:'M',
            })
        }
    }
    _messagehtml(char){
          if (char=='R'){
             return(
                     <div>
                          <img src="/images/theme/reactjs.jpg" />
                          <p className="rtl">
                                     React یک Libarary متن باز و البته رایگان جاوا اسکریپت برای طراحی رابط کاربری است. این کتابخانه جاوا اسکریپت در ماه مه سال ۲۰۱۳ به صورت عمومی منتشر شد. جالب است بدانید که این فریم ورک در ابتدا توسط یکی از مهندسین فعال در فیسبوک به وجود آمد. آقای «جردن واک» در سال ۲۰۱۱ این فریم ورک را تحت تاثیر XHP که یک کامپوننت HTML برای زبان برنامه نویسی PHP‌ است، ایجاد کرد. در همین سال React روی قسمت News Feed شبکه اجتماعی فیسبوک به کار گرفته شد و ۲ سال بعد، یعنی در سال ۲۰۱۳ هم استفاده از آن توسط فیسبوک به اینستاگرام تعمیم پیدا کرد.
                                     نکته مهم در کاربرد React JS این است که این کتابخانه صرفا در الگوی طراحی MVC، عهده‌دار بخش View است. View یا اینترفیس در واقع مرتبط با نمایش اجزا هستند و طبعا React JS به جای پرداختن به الگوی MVC به وظایفی می‌پردازد که مربوط به نمایش اجزا می‌پردازد. از دیگر کاربردهای React JS استفاده در طراحی و ایجاد سایت تک صفحه‌ای است.
                                     زمانی که یک موسسه یا شرکت عظیم با طرفداران فوق‌العاده زیاد، عهده‌دار نگهداری و توسعه یک کتابخانه جاوا اسکریپتی می‌شود، دیگر نباید شکی به این کتابخانه داشت. امروزه همه ما از Facebook و Instagram استفاده می‌کنیم و می‌دانیم که چقدر این دو شبکه اجتماعی از نگاه فنی کم اشکال و قابل اطمینان هستند و در سطح بالایی قرار دارند. حال در نظر بگیرید که این شرکت بزرگ عهده‌دار توسعه چنین کتابخانه مهمی بوده که از آن در ایجاد یک رابط کاربری زیبا و عام پسند استفاده کرده است. بنابراین، طراحان سایت و توسعه دهندگان وب، خیلی زود سراغ React رفتند. 
                                     React کتابخانه‌ای است که با استفاده از آن تمام جنبه‌های ظاهری یا همان بخش View در طراحی سایت یا توسعه اپلیکیشن موبایل را به عهده می‌گیرد. با استفاده از React، بسیاری از پیچیدگی‌ها و درگیری‌های مختلف برنامه نویسی از روی دوش شما برداشته می‌شود.
                          </p>
                           <button className="btn btn-primary" onClick={()=>this.setState({height:0,messagedisplay:'none'})}>بازگشت</button>
                     </div>
                    
                );
          }
          if (char=='RN'){
             return(
                     <div>
                     <img src="/images/theme/reactnative.jpg" />
                     <p className="rtl">
                                    بذارید یکم برم به عقب. فیس بوک ابتدای سال ۲۰۱۵ اولین نسخه stable یک کتابخانه جاوااسکریپت open-source رو منتشر کرد برای توسعه رابط کاربری (user interface) وب اپلیکیشن ها. اسم این کتابخانه React (یا ReactJS) بود. این کتابخانه با ساختار بسیار ساده و سرعت بسیار بالایی که داشت خیلی سریع مورد توجه قرار گرفت. طوری که با وجود اینکه مدت کوتاهی از اومدنش گذشته، بجز فیس بوک کمپانی هایی از قبیل یاهو، Airbnb و Netflix هم دارن ازش استفاده می کنن.
                                    React native یک فریم ورک جاوا اسکریپت برای ساختن برنامه های موبایلِ native است. این فریم ورک از فریم ورکِ React استفاده می کنه و APIها و کامپوننت های تعبیه شده ی داخلیِ زیادی داره.
                    </p>
                     <button className="btn btn-primary" onClick={()=>this.setState({height:0,messagedisplay:'none'})}>بازگشت</button>
                    </div>
                );
          }
          if (char=='L'){
             return(
                     <div>
                     <img src="/images/theme/laravelcard.jpg" />
                     <p className="rtl">
                                    Laravel یکی از فریم‎ ورک‎ های زبان  PHP است که برای توسعه اپلیکیشن ‎های وب در نظر گرفته شده است و بر پایه MVC کار می‎ کند. فریم‎ ورک لاراول، برنامه‎ نویسی برنامه‎ های کاربردی تحت وب با زبان PHP را ساده‎تر می‎ نماید و کمک بسزایی برای انجام پروژه ‎های  PHP و توسعه آسان آن‎ها می‎ کند. فریم ‎ورک Laravel بر روی اجزای مختلف فریم ورک symfony ساخته شده است و به برنامه شما پایه‎ای بزرگ از کد ‎های قابل اعتماد و تست شده می ‎دهد. لاراول مجموعه ای از بهترین راه حل ها با سینتکس پر معنا و خلاقانه را ارائه می‌کند که به درستی انجام می‌ پذیرند. لاراول توسط آسان سازی کارهای معمول مانند احراز هویت، روتینگ، sessionها ، کار با بانکهای اطلاعاتی و … که تقریبا در تمامی پروژه های تحت وب استفاده می‌شوند، مسائل و مشکلات ناشی از توسعه را هم برای توسعه دهنده و هم برای کارفرما کاهش می دهد. لاراول، سیمفونی، کیک پی اچ پی و کد ایگنایتر از محبوب ترین فریم ورک های زبان PHP هستند که بررسی میزان محبوبیت آنها در گوگل ترند حاکی از رشد روز افزون فریم ورک Laravel است.
                     </p>
                      <button className="btn btn-primary" onClick={()=>this.setState({height:0,messagedisplay:'none'})}>بازگشت</button>
                     </div>
                );
          }
          if (char=='W'){
             return(
                     <div>
                     <img src="/images/theme/wordpresscard.jpg" />
                     <p className="rtl">
                                    وردپرس یک سیستم مدیریت محتوا برای سایت‌ها و وبلاگ‌ها می‌باشد. وردپرس در ابتدا تنها یک سیستم رایگان وبلاگ نویسی بود که امکانات خوبی را در اختیار وبلاگ نویسان قرار می‌داد و سپس به صورت یک CMS یا نرم‌افزار کدباز برای مدیریت محتوای سایت‌ها معرفی شد.

                                    سایت‌های وردپرسی با استفاده از افزونه‌های نوشته شده برای وردپرس می‌توانند انواع امکانات را دربرگیرند. به عنوان مثال برای راه اندازی یک فروشگاه اینترنتی در کنار سایت وردپرسی کافیست یکی از افزونه‌هایی که برای این منظور طراحی شده‌اند را به هسته وردپرس خود اضافه کنید. به عنوان مثال افزونه‌های WooCommerce و EDD دو افزونه وردپرس هستند که برای راه اندازی فروشگاه اینترنتی جهت فروش کالای فیزیکی یا فایل‌های دانلودی استفاده می‌شوند. همچنین قابلیت تبدیل شدن سایت به یک شبکه اجتماعی با افزونه قدرتمند Buddypress یا ایجاد یک تالار گفتگو یا انجمن با افزونه BBpress، در وردپرس وجود دارد. با توجه به فراوانی و تنوع افزونه‌های وردپرس تقریباً هر امکانی را می‌توان به سایت وردپرسی اضافه کرد.

                                    وردپرس با زبان برنامه‌نویسی پی اچ پی نوشته شده و توسط مای‌اس‌کیوال پشتیبانی می‌شود. همچنین نسخه‌ای برای پست‌گرس‌کیوال نیز موجود می‌باشد این سیستم کاملاً رایگان و متن باز است.

                                    وردپرس در ادامه راه پروژهٔ موفق b۲ است که در سال ۲۰۰۳ شکل گرفت. نام وردپرس را کریستیان اِسلِک، دوست مت مولنوگ (توسعه‌دهندهٔ اصلی وردپرس) پیش نهاد و از آن روز وردپرس با سرعت و پیشرفتی قابل ملاحظه تبدیل به معروف‌ترین و پرکاربردترین ابزار ساخت وبلاگ و سایت بر روی هاست شده‌است.
                    
                    </p>
                     <button className="btn btn-primary" onClick={()=>this.setState({height:0,messagedisplay:'none'})}>بازگشت</button>
                    </div>
                );
          }
          if (char=='M'){
             return(
                     <div>
                     <img src="/images/theme/magentocard.jpg" />
                     <p className="rtl">
                                      Magento  یک پلت فرم  تجارت الکترونیک است که بر روی  تکنولوژی open source ساخته می شود. Magento  علاوه بر ایجاد یک تجارت آنلاین به همراه سبد خرید، به کنترل مقدار و عملکرد فروشگاه های آنلاین خود نیز می پردازد.Magento ، مارکتینگ قدرتمند، بهینه سازی موتور جستجو (SEO) و اسباب مدیریت کاتالوگ را ارائه می دهد. ما بر این باوریم که Magento یکی از بهترین پلت فرم های تجارت الکترونیک موجود در حال حاضر است.
                                      توانایی Magento  در انعطاف پذیری این اجازه را می دهد که بدون ایجاد تغییر در پلت فرم ها، فروشگاهی با تعداد کمی محصول و سطح نیاز 
                                      ساده، به فروشگاهی با تعداد محصولات بالا و سفارشات زیاد تغییر کند. Magento گونه های گوناگونی از نحوه ی ورود و تم ها را ارائه می دهد، که می تواند تجربه مشتریان رابالا ببرد. جنبه های مختلفی در فروشگاه های آنلاین وجود دارد که نیاز به پیکره بندی دارند، حال اینکه این پیکره بندی ها به چه صورت انجام شوند، به هوش تجاری بستگی دارد. هنگامی که نوبت به custom functionality  رسید، اینجا نیاز به برنامه نویسی پیچیده است.
                                      Magento  به گونه ای طراحی شده است که افراد عادی ( نه الزاما توسعه دهندگان) نیز بتوانند از آن استفاده کنند. Magento  بسیار بزرگ و مفید است. اما در بعضی موارد میانگین افراد در استفاده از آن، به بن بست می رسند.
                                      دلایل زیادی برای درخواست از توسعه دهندگان برای تطبیق وب سایت های Magento، وجود دارد.
                                      Magento  حتی در سطح ابتدایی خود  نیز از سایت Drupal، بهتر بوده و یک سیستم قوی و بازدارنده از خطا ست. هنگامی که شما شروع به ادغام با دیگر سیستم ها می کنید، یا می خواهید که محصولات خود را به صورت انبوه معرفی کنید، نیاز به همکاری یک توسعه دهنده ی مجرب دارید. برای مثال، ما مشتریانی داشتیم که نیاز به امکانات اضافی برای نمایش صفحات اصلی، داشتند. معمولا شما می توانید محصولات را در گروه های 5، 25 و 50 تای نمایش دهید. ما یک متقاضی داشتیم که خواهان 2000 نمایش بود. عملکرد ممکن است تا حدی تغییر کند، فراتر از آن، برای بالا بردن سطح کارایی سیستم، نیاز به یک متخصص واقعی در Magento  است.
                                      یک توسعه دهنده ی مجرب اغلب به شما گوشزد می کند که اساس تجارت الکترونیک، سرعت است. هیچ کسی نمی خواهد وقتی که در حال خرید آنلاین است، منتظر بالا آمدن سایت شود. با همچین لیستی قوی از ویژگی ها در یک برنامه ی کاربردی، شما می توانید آنها را بر روی سرور قراردهید. از آنجایی که ما هنوز متقاضی ای که خواهان سرورهای بیشتر برای فروشگاه آنلاین خود است، نداشته ایم،اما من توانایی پیش بینی وقوع این وضعیت را در آینده دارم. 
                                      مزایای استفاده از Magento:
                                      نصب راحت و اضافه کردن گزینه ی ورود و خروج
                                      وجود تکنولوژی open source  که تجارت الکترونیک را انعطاف پذیر و مقیاس پذیر می کند
                                      برنامه ای موثر و به صرفه 
                                      امکان اعمال تخفیفات و تبلیغات
                                      ایجاد و پیشتیبانی بیش از 50 درگاه پرداختی
                     </p>
                     <button className="btn btn-primary" onClick={()=>this.setState({height:0,messagedisplay:'none'})}>بازگشت</button>
                     </div>
                );
          }
    }
    _messageComponent(){
      const {height,messagedisplay} = this.state;
     
      return(
           <div className="container">
            <Message height={height} display={messagedisplay}>{this._messagehtml(this.state.language)}</Message>
           </div>
        );
    }
    render() {
        return (
        	<div style={{ position:'relative' }}>
             <Header redirect={this.props.location} />
              {this._messageComponent()}
                      <div className="header header-filter">
                            <div className="row">
                                <div className="container">
                                    <div className="brand">
                                        <Carousel />
                                    </div>
                                </div>
                            </div>
                      </div>
                      <div className="row">
                       <div className="container">
                        <div className="main main-raised">
                                  <Socials />  
                                <div className="section">
						                       <div className="row"> 
                                       <div className="col-12 text-center">
                                            <h3 className="text-center black-title"><b>کمی بیشتر با توانمندی های وبی تک آشنا شوید</b></h3>
                                            <p className="rtl text-center"><b>تکنولوژی های مورد استفاده در طراحی وب</b></p>
                                       </div>
                                       <div className="container flex-center">
                                                <a href="#" onClick={()=>{this._message('R')}}  className="mask item-banner">
                                                    <img  src="images/theme/reactjs.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption flex-center">  
                                                        <h3 className="caption-title text-right">React Js</h3> 
                                                    </div>  
                                                </a>
                                                 <a href="#" onClick={()=>{this._message('RN')}}  className="mask item-banner">
                                                    <img  src="images/theme/reactnative.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption flex-center">  
                                                        <h3 className="caption-title mb-20 text-right" >React Native</h3>  
                                                    </div>  
                                                </a>
                                                 <a href="#" onClick={()=>{this._message('L')}}  className="mask item-banner">
                                                    <img  src="images/theme/laravelcard.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption flex-center">  
                                                        <h3 className="caption-title mb-20 text-right" >Laravel</h3>
                                                    </div>  
                                                </a>
                                                <a href="#" onClick={()=>{this._message('W')}}  className="mask item-banner">
                                                    <img  src="images/theme/wordpresscard.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption flex-center">  
                                                        <h3 className="caption-title mb-20 text-right" >WordPress</h3> 
                                                    </div>  
                                                </a>
                                                 <a href="#" onClick={()=>{this._message('M')}}  className="mask item-banner">
                                                    <img  src="images/theme/magentocard.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                                    <div className="fade-caption flex-center">  
                                                        <h3 className="caption-title mb-20 text-right" >Magento</h3> 
                                                    </div>  
                                                </a>
                                       </div>
                                   </div>
                                </div>
                              <div className="section section-bg">
                                   <div className="row">
                                      <div className="container-fluid">
                                         <div className="col-12 text-center">
                                                <h2 className="title title-black ">چرا وبی تک ؟</h2>
                                                <h5 className="description"><b>وبی تک</b> با سال ها تجربه در حوزه طراحی سایت ، از تاثیر یک سایت حرفه ای در معرفی کسب و کار شرکت ها آگاه است . در همین راستا این شرکت با در اختیار داشتن تیمی حرفه ای و مطابق با آخرین تکنولوژی های روز دنیا ، تخصص و خلاقیت را در کنار هم قرار داده تا وب سایت شما علاوه بر داشتن ظاهری زیا و متفاوت ، تبدیل به ابزاری قدرتمند برای نمایش شخصیت کاریتان و افزایش فروش شما گردد . </h5>
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
                              </div>
                              <LatestBlogs posts={this.state.posts} />
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
                                      <div className="container-fluid">
                                        <div className="flex-center">
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
                                                    <h3 className="title text-center">طراحی المان های وب سایت</h3>
                                                    <h6 className="category text-right withe">طراحی اجزای تشکیل دهنده وب سایت با استفاده از Bootstrap 4</h6>
                                                    <h5 className="description text-justify">برای داشتن وب سایتی منحصر به فرد با دیزاین خاص باید المان های وب سایت مانند دکمه های وب سایت ، منو و ... طراحی شوند.همواره استفاده از Bootstrap در طراحی وب سایت باعث می شود طراحی وب سایت استاندارد و چشم نواز شود.ما با تغییر و شخصی سازی Bootstrap دیزاین و طراحی خاص برای وب سایت شما فراهم می کنیم .</h5>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                              </div>
                              
                              <div className="subscribe-line subscribe-line-image custom-filter" data-parallax="true" style={{ backgroundImage: "url('/images/theme/office.jpg')" }}>
                                     <div className="row">
                                        <div className="container">
                                            <div className="flex-center">
                                                <div className="col-md-6">
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
                        </div>
                       </div>
                     </div>
                    <Footer />
            </div>
        );
    }
}
 
export default Home;