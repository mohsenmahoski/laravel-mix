
<div class="contactus-1 section-image" style="background-image: url('{{asset('images/theme/busy_city.jpg') }}')">

        <div class="container-fluid">
            <div class="row">
                 <div class="col-md-5 col-md-offset-1">
                    <div class="card card-contact">
                       {{ Form::open(['route'=>'send_message' ,'data-parsley-validate' => '', 'role'=>'form' ,'id' =>'contact-form']) }}
                            <div class="header header-raised header-primary text-center">
                                <h4 class="card-title">تماس با ما</h4>
                            </div>
                            <div class="card-content">
                                   <div class="row">
                                       <div class="col-md-6 ">
                                                <div class="text-right form-group label-floating is-empty">
                                                 {{ Form::label('family','نام خانوادگی',['class'=>'control-label']) }}
                                                 {{ Form::text('family',null,['class'=>'form-control','required'=>"",'data-parsley-required-message'=>'نام خانوادگی خود را وارد کنید.']) }}    
                                                <span class="material-input"></span></div>
                                       </div>  
                                       <div class="col-md-6">
                                            <div class="text-right form-group label-floating is-empty">
                                             {{ Form::label('name','نام',['class'=>'control-label']) }}
                                             {{ Form::text('name',null,['class'=>'form-control','required' => '','data-parsley-required-message'=>'نام خود را وارد کنید.']) }}    
                                            <span class="material-input"></span></div>
                                       </div>
                                   </div>
                                    
                                   <div class="text-right form-group label-floating is-empty">
                                        {{ Form::label('email','ایمیل',['class'=>'control-label']) }}
                                         {{ Form::email('email',null,['class'=>'form-control','required','data-parsley-required-message'=>'آدرس پست الکترونیکی خود را وارد کنید.']) }}    
                                        <span class="material-input"></span>
                                   </div>
                                   <div class="text-right form-group label-floating is-empty">
                                         {{ Form::label('message','متن پیام',['class'=>'control-label']) }}
                                         {{ Form::textarea('message',null,['class'=>'form-control']) }}    
                                        <span class="material-input"></span>
                                   </div>
                                   <div class="row">
                                     <div class="col-md-6 pt-10 text-center">
                                        <div class="checkbox">
                                            <label>
                                                
                                                من ربات نیستم
                                                <input type="checkbox" name="no_robot">
                                            </label>
                                        </div>
                                     </div>
                                     <div class="col-md-6 text-center">

                                          {{ Form::submit('ارسال پیام' , ['class'=>'btn btn-primary'] ) }}  
                                     </div>
                                   </div>
                             
                           </div>
                       {{ Form::close() }}
                    </div>
                 </div>
                 <div class="col-md-5">
                    <h2 class="title">راه های ارتباط با ما</h2>
                    <h5 class="card-description text-right">برای کسب اطلاعات بیشتر می توانید با استفاده از راه های ارتباطی با ما تماس بگیرید </h5>
                    <div class="info info-horizontal">
                        <div class="icon icon-primary">
                            <i class="material-icons">pin_drop</i>
                        </div>
                        <div class="card-description text-right">
                            <h4 class="info-title">آدرس شرکت وبی تک</h4>
                            <p> مشهد بلوار وکیل آباد ....<br>
                               <br>
                                
                            </p>
                        </div>
                    </div>
                    <div class="info info-horizontal">
                        <div class="icon icon-primary">
                            <i class="material-icons">phone</i>
                        </div>
                        <div class="card-description text-right">
                            <h4 class="info-title">تلفن های تماس</h4>
                            <p> مدیریت<br>
                                +40 762 321 762<br>
                                09105514062
                            </p>
                        </div>
                    </div>

                 </div>
                
            </div>
        </div>
    </div>