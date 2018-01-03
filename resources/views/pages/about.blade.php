@extends('main')

@section('title','| About')
@section('header')
     <div class="header header-filter" style="background-image: url({{ asset('/images/theme/bg32.jpg') }});">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="brand">
                        <h1>درباره ما</h1>
                        <div class="separator separator-danger">✻</div>
                        <h3 class="text-center">خوشحالیم که با تیمی مجرب و به روز توانایی همکاری با بهترین ها را داریم.</h3>

                    </div>
                </div>
            </div>

        </div>
     </div>
@endsection
@section('content')
  <div class="section-basic">
    <div class="container">
            <div class="about-description text-center">
                <div class="row">
    				<div class="col-md-8 col-md-offset-2">
    					<h5 class="description">توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت و تولید بازی های رایانه‌ای می‌باشد.
                        توسعه سامان تمامی توان خود را به کار بسته تا با تکیه بر توان کارشناسان خود بهترین سرویس ها و راهکارهای تحت وب را با پشتیبانی مطلوب ارائه نماید و ثمره این تلاش طیف بسیار گسترده مشتریان شرکت می باشد.
                        </h5>
    				</div>
    			</div>
            </div>
            <div class="about-team team-1">
    			

    			<div class="row">
    				<div class="col-md-3">
    					<div class="card card-profile card-plain">
    						<div class="card-avatar">
    							<a href="#pablo">
    								<img class="img" src="{{ asset('images/theme/avatar/marc.jpg') }}">
    							</a>
    						</div>

    						<div class="card-content">
    							<h4 class="text-center">الکس توماس</h4>
    							<h6 class="category text-muted text-center">مدیریت نرم افزار</h6>

    							<p class="card-description text-justify">
    								توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت
    							</p>
    							<div class="footer">
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-twitter"><i class="fa fa-twitter"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-facebook"><i class="fa fa-facebook-square"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-google"><i class="fa fa-google"></i></a>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div class="col-md-3">
    					<div class="card card-profile card-plain">
    						<div class="card-avatar">
    							<a href="#pablo">
    								<img class="img" src="{{ asset('/images/theme/avatar/kendall.jpg')}}">
    							</a>
    						</div>

    						<div class="card-content">
    							<h4 class="text-center">میرانا اندرو</h4>
    							<h6 class="category text-muted text-center">گرافیست</h6>

    							<p class="card-description text-justify">
    								توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت
    							</p>
    							<div class="footer">
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-twitter"><i class="fa fa-twitter"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-dribbble"><i class="fa fa-dribbble"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-linkedin"><i class="fa fa-linkedin"></i></a>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div class="col-md-3">
    					<div class="card card-profile card-plain">
    						<div class="card-avatar">
    							<a href="#pablo">
    								<img class="img" src="{{ asset('/images/theme/avatar/christian.jpg') }}">
    							</a>
    						</div>

    						<div class="card-content">
    							<h4 class="text-center">کریستین مایک</h4>
    							<h6 class="category text-muted text-center">توسعه دهنده وب</h6>

    							<p class="card-description text-justify">
    								توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت
    							</p>
    							<div class="footer">
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-facebook"><i class="fa fa-facebook-square"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-dribbble"><i class="fa fa-dribbble"></i></a>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div class="col-md-3">
    					<div class="card card-profile card-plain">
    						<div class="card-avatar">
    							<a href="#pablo">
    								<img class="img" src="{{ asset('/images/theme/avatar/avatar.jpg') }}">
    							</a>
    						</div>

    						<div class="card-content">
    							<h4 class="text-center">ربکا سانیل</h4>
    							<h6 class="category text-muted text-center">روابط عمومی</h6>

    							<p class="card-description text-justify">
    								توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت
    							</p>
    							<div class="footer">
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-google"><i class="fa fa-google"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-twitter"><i class="fa fa-twitter"></i></a>
    								<a href="#pablo" class="btn btn-just-icon btn-simple btn-dribbble"><i class="fa fa-dribbble"></i></a>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
            </div>
           <div class="section">
                       <div class="row">
                               <div class="col-md-8 col-md-offset-2">
                                            <h2 class="text-center title title-black">مایل به همکاری هستید؟</h2>
                                            <h4 class="text-center description">توسعه سامان فعالیت خود را بصورت تخصصی از سال 1381 در زمینه تجارت الکترونیک و فناوری اطلاعات آغاز کرد. فعالیت های شرکت در سه مسیر کلی تولید سیستم‌های تحت وب، ارائه سرویس‌های بنیادی تحت وب و سرویس‌های تخصصی اینترنت</h4>
                                            <form class="contact-form">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group text-right is-empty">
                                                            <label class="control-label">نام شما</label>
                                                            <input type="email" class="form-control">
                                                        <span class="material-input"></span></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group text-right is-empty">
                                                            <label class="control-label">ایمیل</label>
                                                            <input type="email" class="form-control">
                                                        <span class="material-input"></span></div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group text-right">
                                                            <label class="control-label">تخصص</label>
                                                            <select class="select form-control" placeholder="Speciality">
                                                              <option value="1">من فرانت اند کار هستم</option>
                                                              <option value="2">من بک اند کار هستم</option>
                                                              <option value="3">من یه حرفه ای هستم</option>
                                                            </select>
                                                        <span class="material-input"></span></div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-4 col-md-offset-4 text-center">
                                                        <button class="btn btn-primary btn-round">
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

@endsection