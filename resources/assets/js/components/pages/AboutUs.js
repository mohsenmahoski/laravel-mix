import React ,{Component} from 'react';
import axios from 'axios';
import CardBlog from '../items/CardBlog';
import InfiniteScroll from 'react-infinite-scroller';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import Socials from '../items/Socials';
import { DotLoader } from 'react-spinners';


export default class AboutUs extends Component{
	render(){
		return(
                    <div>
                    <Header redirect={this.props.location} />
		                       	<div className="header header-filter">
							        <div className="container flex-center">
							                <div className="col-md-12 flex-center" style={{ background:'url("/images/theme/bg32.jpg")',minHeight:'325px' }}>  
							                    <div className="shape"></div>
							                    <div className="caption text-center">
							                        <h3 className="text-center">درباره وبی تک و اعضا</h3>
							                        <small>فعالیت ها و سوابق</small>
							                    </div>
							                </div>
							        </div>
		     					</div>
		     					<div className="row">
							   	  <div className="container">
							     	<div className="main main-raised">
									<Socials />   
			                     	<div className="section-fluid">
				                       <div className="container"> 
												<div className="section-basic">
												    <div className="container">
												            <div className="about-description text-center">
												                <div className="row flex-center">
												    				<div className="col-md-8">
												    					<h5 className="description">کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
																		   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
																		</h5>
												    				</div>
												    			</div>
												            </div>
												            <div className="about-team team-1">
												    			

												    			<div className="row">
												    				<div className="col-md-3">
												    					<div className="card card-profile card-plain">
												    						<div className="card-avatar">
												    							<a href="#pablo">
												    								<img className="img" src="/images/theme/avatar/marc.jpg"/>
												    							</a>
												    						</div>

												    						<div className="card-content">
												    							<h4 className="text-center">الکس توماس</h4>
												    							<h6 className="category text-muted text-center">مدیریت نرم افزار</h6>

												    							<p className="card-description text-justify rtl" style={{ minHeight:'450px'}}>
												    								چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
												    							</p>
												    							<div className="footer">
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-facebook"><i className="fa fa-facebook-square"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-google"><i className="fa fa-google"></i></a>
												    							</div>
												    						</div>
												    					</div>
												    				</div>

												    				<div className="col-md-3">
												    					<div className="card card-profile card-plain">
												    						<div className="card-avatar">
												    							<a href="#pablo">
												    								<img className="img" src="/images/theme/avatar/kendall.jpg"/>
												    							</a>
												    						</div>

												    						<div className="card-content">
												    							<h4 className="text-center">میرانا اندرو</h4>
												    							<h6 className="category text-muted text-center">گرافیست</h6>

												    							<p className="card-description text-justify rtl" style={{ minHeight:'450px'}}>
												    								در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
												    							</p>
												    							<div className="footer">
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-dribbble"><i className="fa fa-dribbble"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-linkedin"><i className="fa fa-linkedin"></i></a>
												    							</div>
												    						</div>
												    					</div>
												    				</div>

												    				<div className="col-md-3">
												    					<div className="card card-profile card-plain">
												    						<div className="card-avatar">
												    							<a href="#pablo">
												    								<img className="img" src="/images/theme/avatar/christian.jpg"/>
												    							</a>
												    						</div>

												    						<div className="card-content">
												    							<h4 className="text-center">کریستین مایک</h4>
												    							<h6 className="category text-muted text-center">توسعه دهنده وب</h6>

												    							<p className="card-description text-justify rtl" style={{ minHeight:'450px'}}>
												    								حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
												    							</p>
												    							<div className="footer">
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-facebook"><i className="fa fa-facebook-square"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-dribbble"><i className="fa fa-dribbble"></i></a>
												    							</div>
												    						</div>
												    					</div>
												    				</div>
												    				<div className="col-md-3">
												    					<div className="card card-profile card-plain">
												    						<div className="card-avatar">
												    							<a href="#pablo">
												    								<img className="img" src="/images/theme/avatar/avatar.jpg"/>
												    							</a>
												    						</div>

												    						<div className="card-content">
												    							<h4 className="text-center">ربکا سانیل</h4>
												    							<h6 className="category text-muted text-center">روابط عمومی</h6>

												    							<p className="card-description text-justify rtl" style={{ minHeight:'450px'}}>
												    								با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
												    							</p>
												    							<div className="footer">
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-google"><i className="fa fa-google"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
												    								<a href="#pablo" className="btn btn-just-icon btn-simple btn-dribbble"><i className="fa fa-dribbble"></i></a>
												    							</div>
												    						</div>
												    					</div>
												    				</div>
												    			</div>
												            </div>
												           <div className="section">
												                       <div className="row flex-center">
												                               <div className="col-md-8">
												                                            <h2 className="text-center title title-black">مایل به همکاری هستید؟</h2>
												                                            <h4 className="text-center description">توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت</h4>
												                                            <form className="contact-form">
												                                                <div className="row">
												                                                    <div className="col-md-4">
												                                                        <div className="form-group text-right is-empty">
												                                                            <label className="control-label">نام شما</label>
												                                                            <input type="email" className="form-control"/>
												                                                        <span className="material-input"></span><span className="material-input"></span></div>
												                                                    </div>
												                                                    <div className="col-md-4">
												                                                        <div className="form-group text-right is-empty">
												                                                            <label className="control-label">ایمیل</label>
												                                                            <input type="email" className="form-control"/>
												                                                        <span className="material-input"></span><span className="material-input"></span></div>
												                                                    </div>
												                                                    <div className="col-md-4">
												                                                        <div className="form-group text-right">
												                                                            <label className="control-label">تخصص</label>
												                                                            <select className="select form-control" placeholder="Speciality">
												                                                              <option value="1">من فرانت اند کار هستم</option>
												                                                              <option value="2">من بک اند کار هستم</option>
												                                                              <option value="3">من یه حرفه ای هستم</option>
												                                                            </select>
												                                                        <span className="material-input"></span><span className="material-input"></span></div>
												                                                    </div>
												                                                </div>

												                                                <div className="row flex-center">
												                                                    <div className="col-md-4 col-md-offset-4 text-center">
												                                                        <button className="btn btn-primary btn-round">
												                                                            ارسال
												                                                        </button>
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