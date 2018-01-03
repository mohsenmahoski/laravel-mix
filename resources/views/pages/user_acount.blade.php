@extends('main')
@section('header')
     <div class="header header-filter" style="background-image: url({{ asset('/images/theme/cooporation.jpg') }});">
        
     </div>
@endsection
@section('content')
	<div class="profile-page">
	        <div class="profile-content">
	            <div class="container-fluid">

	                <div class="row">
		                <div class="col-xs-8 col-xs-offset-2">
	        	           <div class="profile">
		                        <div class="user-avatar">
		                            <img src="{{ asset('images/theme/avatar/christian.jpg') }}" alt="Circle Image" class="img-circle img-responsive img-raised">
		                        </div>
		                        <div class="name">
		                            <h3 >{{ Auth::user()->name }}</h3>
									<h6>{{ Auth::user()->email }}</h6>
									<a href="#pablo" class="btn btn-just-icon btn-simple btn-danger"><i class="fa fa-dribbble"></i></a>
	                                <a href="#pablo" class="btn btn-just-icon btn-simple btn-info"><i class="fa fa-twitter"></i></a>
	                                <a href="#pablo" class="btn btn-just-icon btn-simple btn-warning"><i class="fa fa-pinterest"></i></a>
		                        </div>
		                    </div>
	    	            </div>
	                   
	                </div>


	                <div class="description text-center">
	                    <p> در ۱۵ فروردین ۱۳۲۳ در تهران به دنیا آمد و در ۲۷ فروردین ۱۳۹۰ در بورلی هیلز آمریکا چشم از جهان فرو بست. بیژن در طول دوران حرفه‌ای خود در میلان و فلورانس ایتالیا، مالیبو نیویورک و در اواخر عمر خود در بورلی هیلز زندگی کرده بود. بیژن همچنین به خاطر داشتن اتومبیل‌هایی نظیر بنتلی آزور زرد رنگ با تزیینات داخلی مشکی، مرسدس بنز اس‌ال‌آر مک لارن مشکی، فراری اف ۴۳۰ زردرنگ، رولزرویس فانتوم کوپه زرد رنگ و بوگاتی ویرون معروف بود. مجله Vanity Fair در سال ۱۹۸۹ نام بیژن را در لیست شیک‌پوش‌ترین‌های (خوش پوش‌ترین‌ها) جهان خود قرار داد.</p>
	                </div>

					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							<div class="profile-tabs">
			                    <div class="nav-align-center">
									<ul class="nav nav-pills nav-pills-icons" role="tablist">
										<li class="active">
				                            <a href="#work" role="tab" data-toggle="tab" aria-expanded="true">
												<i class="material-icons">palette</i>
												تخصص
				                            </a>
				                        </li>
	                                    <li class="">
											<a href="#connections" role="tab" data-toggle="tab" aria-expanded="false">
												<i class="material-icons">people</i>
												اعضای تیم
											</a>
										</li>
				                        <li class="">
				                            <a href="#media" role="tab" data-toggle="tab" aria-expanded="false">
												<i class="material-icons">camera</i>
				                                نمونه کارها
				                            </a>
				                        </li>
				                    </ul>


								</div>
							</div>
							<!-- End Profile Tabs -->
						</div>
	                </div>
	                <div class="tab-content">
				        <div class="tab-pane work active" id="work">
					        <div class="row">
		                        <div class="col-md-7 col-md-offset-1">
			                        <h4 class="title-black text-right">مجموعه تخصص ها</h4>
			                        <div class="row collections">
				                        <div class="col-md-6">
				                            <div class="card card-background" style="background-image: url({{ asset('images/users/chris4.jpg') }})">
	                    						<a href="#pablo"></a>
	                    						<div class="card-content">
	                    							<label class="label label-primary">جاوااسکریپت</label>
	                    							<a href="#pablo">
	                    								<h2 class="title white">ری اکت نی تیو</h2>
	                    							</a>
	                    						</div>
	                    					</div>
				                        </div>
	                                    <div class="col-md-6">
				                            <div class="card card-background" style="background-image: url({{ asset('images/users/chris1.jpg') }})">
	                    						<a href="#pablo"></a>
	                    						<div class="card-content">
	                    							<label class="label label-primary">مدیریت محتوا</label>
	                    							<a href="#pablo">
	                    								<h2 class="title white">وردپرس</h2>
	                    							</a>
	                    						</div>
	                                        </div>
	                                    </div>
	                                    <div class="col-md-6">
				                            <div class="card card-background" style="background-image: url({{ asset('images/users/chris6.jpg') }})">
	                    						<a href="#pablo"></a>
	                    						<div class="card-content">
	                    							<label class="label label-primary">مدیریت محتوا</label>
	                    							<a href="#pablo">
	                    								<h2 class="title white">مجنتو</h2>
	                    							</a>
	                    						</div>
	                                        </div>
	                                    </div>
	                                    <div class="col-md-6">
				                            <div class="card card-background" style="background-image: url({{ asset('images/users/christian.jpg') }})">
	                    						<a href="#pablo"></a>
	                    						<div class="card-content">
	                    							<label class="label label-primary">پی اچ پی</label>
	                    							<a href="#pablo">
	                    								<h2 class="title white">لاراول</h2>
	                    							</a>
	                    						</div>
	                                        </div>
	                                    </div>
	                                </div>
			                    </div>
			                    <div class="col-md-2 col-md-offset-1 stats">
				                    <h4 class="title-black text-right">فعالیت ها</h4>
				                    <hr>
				                    <ul class="list-unstyled">
					                    <li class="text-right"> محصول <b>60</b></li>
					                    <li class="text-right"> پلاگین ورد پرس <b>4</b></li>
					                    <li class="text-right"> وب سایت <b>331</b></li>
					                    <li class="text-right"> مشتری <b>1.2K</b></li>
					                </ul>
					                <hr>
					                <h4 class="title-black text-right">درباره تخصص</h4>
					                <p class="description">ایشان در حوزه طراحی گرافیکی وب سایت ، اپلیکیشن موبایل، بنرهای تبلیغاتی متحرک، طراحی هویت بصری سازمان، طراحی گرافیکی پست های شبکه های اجتماعی </p>
					                <hr>
					                <h4 class="title-black text-right">برچسب تخصص ها</h4>
					                <div class="mb-10">
					                   <span class="label label-primary">مدیریت نرم افزار</span>
					                </div>

					               	<span class="label label-info">طراحی وب</span>
				                </div>
		                    </div>
				        </div>
	                    <div class="tab-pane connections" id="connections">
	                        <div class="row">
	            				<div class="col-md-5 col-md-offset-1 mt-20">
	            					<div class="card card-profile card-plain">
	            						<div class="col-md-5">
	            							<div class="card-image">
		            								<a href="#pablo">
		            									<img class="img" src="{{ asset('images/users/face-7.jpg') }}">
		            								</a>
			            							<div class="colored-shadow" style="background-image: url(&quot;../assets/img/faces/avatar.jpg&quot;); opacity: 1;">
			            							    	
			            							</div>
	            							    </div>
	            						 </div>
	            						 <div class="col-md-7 text-right">
	            							<div class="card-content">
	            								<h4 class="title-black">استیفن رابینز</h4>
	            								<h6 class="category text-muted">توسعه دهنده</h6>

	            								<p class="card-description">
	            									بیژن در طول دوران حرفه‌ای خود در میلان و فلورانس ایتالیا، مالیبو نیویورک و در اواخر عمر خود در بورلی هیلز زندگی کرده بود...
	            								</p>
	            							</div>
	            						 </div>
	            					</div>
	            				</div>

	            				<div class="col-md-5 col-md-offset-1 mt-20">
	            					<div class="card card-profile card-plain">
	            						<div class="col-md-5">
	            							<div class="card-image">
		            								<a href="#pablo">
		            									<img class="img" src="{{ asset('images/users/card-profile2-square.jpg') }}">
		            								</a>
			            							<div class="colored-shadow" style="background-image: url(&quot;../assets/img/faces/avatar.jpg&quot;); opacity: 1;">
			            							    	
			            							</div>
	            							</div>
	            						 </div>
	            						 <div class="col-md-7 text-right">
	            							<div class="card-content">
	            								<h4 class="title-black">مایک راسل</h4>
	            								<h6 class="category text-muted"> رابط کاربریطراح</h6>

	            								<p class="card-description">
	            									مجله Vanity Fair در سال ۱۹۸۹ نام بیژن را در لیست شیک‌پوش‌ترین‌های (خوش پوش‌ترین‌ها) جهان خود قرار داد....
	            								</p>
	            							</div>
	            						 </div>
	            					</div>
	            				</div>
	                        </div>
	                        <div class="row">
	            			<div class="col-md-5 col-md-offset-1 mt-20">
		            				<div class="card card-profile card-plain">
			            						<div class="col-md-5">
			            							<div class="card-image">
				            								<a href="#pablo">
				            									<img class="img" src="{{ asset('images/users/marc.jpg') }}">
				            								</a>
					            							<div class="colored-shadow" style="background-image: url(&quot;../assets/img/faces/avatar.jpg&quot;); opacity: 1;">
					            							    	
					            							</div>
			            							    </div>
			            						 </div>
			            						 <div class="col-md-7 text-right">
			            							<div class="card-content">
			            								<h4 class="title-black">رابرت دنیلز</h4>
			            								<h6 class="category text-muted">متخصص سئو</h6>

			            								<p class="card-description">
			            									شم از جهان فرو بست. بیژن در طول دوران حرفه‌ای خود در میلان و فلورانس ایتالیا، مالیبو نیویورک و در اواخر عمر خود در بورلی هیلز زندگی کرده بود. بیژن همچنین به خاطر داشتن اتومبیل‌هایی نظیر بنتلی آزور زرد رنگ ب...
			            								</p>
			            							</div>
			            						 </div>
		            					</div>
	            				    </div>

		            				<div class="col-md-5 col-md-offset-1 mt-20">
		            					<div class="card card-profile card-plain">
			            					<div class="col-md-5">
			            							<div class="card-image">
				            								<a href="#pablo">
				            									<img class="img" src="{{ asset('images/users/face_1.jpg') }}">
				            								</a>
					            							<div class="colored-shadow" style="background-image: url(&quot;../assets/img/faces/avatar.jpg&quot;); opacity: 1;">
					            							    	
					            							</div>
			            							</div>
			            					</div>
			            				    <div class="col-md-7 text-right">
				            							<div class="card-content">
				            								<h4 class="title-black">جیانا میشل</h4>
				            								<h6 class="category text-muted">مدیریت روابط عمومی</h6>

				            								<p class="card-description">
				            									س بنز اس‌ال‌آر مک لارن مشکی، فراری اف ۴۳۰ زردرنگ، رولزرویس فانتوم کوپه زرد رنگ و بوگاتی ویرون معروف بود. مجله Vanity Fair در سال ۱۹۸۹ نام بیژن را در لیست شیک‌پوش‌ترین‌های (خوش پوش‌ترین‌ها) جهان خود قرار داد...
				            								</p>
				            							</div>
			            				    </div>
		            					 </div>
		            				  </div>
		                           </div>
	                        
	                        </div>
	                    <div class="tab-pane text-center gallery" id="media">
							<div class="row">
								<div class="col-md-4 mb-20">
                                  <div class="card">
                                      <div class="image" style="background-image: url('{{asset("/images/theme/ghali.jpg") }}'); background-position: center center; background-size: cover;">
                                         
                                          <div class="filter filter-white">
                                              <a target="blank" href="http://demo.theme-wordpress.ir/aday/" class="btn btn-primary btn-round btn-fill">
                                                  <i class="material-icons">remove_red_eye</i>نمایش دمو
                                              </a>
                                          </div>
                                      </div>
                                      <div class="content">
                                          <h3 class="blog-title text-right">
                                                        <b>
                                                          طراحی وب سایت شخصی با ورد پرس
                                                        </b> 
                                          </h3>
                                          <p class="category pull-right label label-info">
                                          وردپرس</p>
             
                                       <div class="clearfix"></div>                             <a class="card-link" href="#">
                                              <h4 class="blog-desc text-right">طراحی وب سایت دارای صفحات اصلی شامل معرفی تجارت ، ارتباط با شما و ...</h4>
                                          </a>
                                           <div class="footer">
                                              <div class="author">
                                                  <a class="card-link" href="#">
                                                     <img src="{{asset('/images/theme/avatar/face-4.jpg')}}" alt="..." class="avatar">
                                                     <span> Jayz </span>
                                                  </a>
                                              </div>
                                               <div class="stats pull-right">
                                                   <a class="card-link" href="#">
                                                      <i class="material-icons"></i> 92
                                                   </a>
                                              </div>
                                              <div class="stats pull-right">
                                                  <a class="card-link" href="#">
                                                      <i class="fa fa-comment"></i> 41
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </div> <!-- end card -->
                                </div>
                                <div class="col-md-4 mb-20">
                                   <div class="card">
                                      <div class="image" style="background-image: url('{{asset("/images/theme/total.jpg") }}');background-size: cover;">
                                         
                                          <div class="filter filter-white">
                                              <a target="blank" href="https://hamyarwp.com/preview/total/" class="btn btn-primary btn-round btn-fill">
                                                  <i class="material-icons">remove_red_eye</i> نمایش دمو
                                              </a>
                                          </div>
                                      </div>
                                      <div class="content">
                                          <h3 class="blog-title text-right">
                                                        <b>
                                                          طراحی وب سایت شرکتی وردپرس
                                                        </b> 
                                          </h3>
                                          <p class="category pull-right label label-info">
                                          وردپرس</p>
             
                                                <div class="clearfix"></div>                            
                                          <a class="card-link" href="#">
                                              <h4 class="blog-desc text-right">طراحی وب سایت شرکتی با استفاده از ورد پرس شامل معرفی تجارت شما و امکان ارتباط با مشتری و ...</h4>
                                          </a>
                                           <div class="footer">
                                              <div class="author">
                                                  <a class="card-link" href="#">
                                                     <img src="{{asset('/images/theme/avatar/face-4.jpg')}}" alt="..." class="avatar">
                                                     <span> Jayz </span>
                                                  </a>
                                              </div>
                                               <div class="stats pull-right">
                                                   <a class="card-link" href="#">
                                                      <i class="material-icons"></i> 92
                                                   </a>
                                              </div>
                                              <div class="stats pull-right">
                                                  <a class="card-link" href="#">
                                                      <i class="fa fa-comment"></i> 41
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </div> <!-- end card -->
                               </div>
                               <div class="col-md-4 mb-20">
			                        <div class="card">
			                            <div class="image" style="background-image: url('{{asset("/images/theme/magento-ecommerce.jpg") }}');); background-position: center center; background-size: cover;">
			                               
			                                <div class="filter filter-white">
			                                    <a target="blank" href="http://asai.ir/" class="btn btn-primary btn-round btn-fill">
			                                <i class="material-icons">remove_red_eye</i>نمایش دمو
			                                    </a>
			                                </div>
			                            </div>
			                            <div class="content">
			                                <h3 class="blog-title text-right">
			                                              <b>
			                                                طراحی فروشگاه اینترنتی حرفه ای مجنتو
			                                              </b> 
			                                </h3>
			                                <p class="category pull-right label label-info">
			                                مجنتو</p>
			    
			                                <div class="clearfix"></div>                            <a class="card-link" href="#">
			                                    <h4 class="blog-desc text-right">طراحی فروشگاه حرفه ای مجنتو شامل تمامی امکانات موجود برای یک فروشگاه اینترنتی</h4>
			                                </a>
			                                 <div class="footer">
			                                    <div class="author">
			                                        <a class="card-link" href="#">
			                                           <img src="{{asset('/images/theme/avatar/face-4.jpg')}}" alt="..." class="avatar">
			                                           <span> Jayz </span>
			                                        </a>
			                                    </div>
			                                     <div class="stats pull-right">
			                                         <a class="card-link" href="#">
			                                            <i class="fa fa-heart"></i> 92
			                                         </a>
			                                    </div>
			                                    <div class="stats pull-right">
			                                        <a class="card-link" href="#">
			                                            <i class="fa fa-comment"></i> 41
			                                        </a>
			                                    </div>
			                                </div>
			                            </div>
			                        </div> <!-- end card -->
                               </div>
							</div>
	                    </div>
				    </div>
	            </div>
	        </div>
	</div>
@endsection