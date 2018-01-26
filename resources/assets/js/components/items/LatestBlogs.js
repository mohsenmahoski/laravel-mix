import React,{Component} from 'react';



class LatestBlogs extends Component{
	render(){
		return(
               <div className="section section-bg news">
                                                <div className="col-12 text-center">
                                                        <blockquote className="blockquote text-center">
                                                          <h1 className="title mb-0">آخرین مطالب و خبر ها</h1>
                                                          <footer className="blockquote-footer"><small>خبرهای دنیای فناوری اطلاعات</small></footer>
                                                        </blockquote>
                                                </div>
                                                <div className="row">
                                                     <div className="container ">
                                                            <div id="latestblogs" className="carousel slide" data-ride="carousel">
															  <ol className="carousel-indicators">
															    <li data-target="#latestblogs" data-slide-to="0" className="active"></li>
															    <li data-target="#latestblogs" data-slide-to="1"></li>
															    <li data-target="#latestblogs" data-slide-to="2"></li>
															  </ol>
															  <div className="carousel-inner">
															    <div className="carousel-item active">
                                                                     <div className="flex-center">
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
															    <div className="carousel-item ">
															      <div className="flex-center">
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
															    <div className="carousel-item ">
															        <div className="flex-center">
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
                                                     </div>
                                                </div>            
               </div>
			);
	}
}


export default LatestBlogs;



