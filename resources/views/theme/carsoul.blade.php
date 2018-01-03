<div class="section-fluid" id="carousel">
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-md-8">

                        <!-- Carousel Card --> 
                        <div class="card card-raised card-carousel mb-15">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                <div class="carousel slide" data-ride="carousel">

                                    <!-- Indicators -->
                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                      
                                        <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                                       
                                        <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>

                                    </ol>

                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                       @php
                                         $active = false;
                                       @endphp
                                       @foreach($slider as $slide)
                                           @if($active == false)
                                                    <div class="item active">
                                                        <img src="{{ asset('images/slider/'.$slide->image) }}" alt="Awesome Image">
                                                        @if($slide->caption_bottom != null)
                                                            <div class="carousel-caption">
                                                                <h4 class="text-right">
                                                                   <i class="material-icons">location_on</i>
                                                                   {{ $slide->caption_bottom }}
                                                                    
                                                                </h4>
                                                            </div>
                                                        @endif
                                                        @if($slide->caption_left_top != null)
                                                            <div class="carousel-caption-left carousel-caption">
                                                                <h4 class="text-right">
                                                                   <i class="material-icons">location_on</i>
                                                                   {{ $slide->caption_left_top }}
                                                                    
                                                                </h4>
                                                            </div>
                                                        @endif
                                                        @if($slide->caption_right_top != null)
                                                            <div class="carousel-caption-right carousel-caption">
                                                                <h4 class="text-right">
                                                                   <i class="material-icons">location_on</i>
                                                                   {{ $slide->caption_right_top }}
                                                                    
                                                                </h4>
                                                            </div>
                                                        @endif
                                                    </div>
                                                        @php
                                                           $active = true;
                                                        @endphp
                                            @else
                                                <div class="item">
                                                        <img src="{{ asset('images/slider/'.$slide->image) }}" alt="Awesome Image">
                                                        @if($slide->caption_bottom != null)
                                                            <div class="carousel-caption">
                                                                <h4 class="text-right">
                                                                   <i class="material-icons">location_on</i>
                                                                   {{ $slide->caption_bottom }}
                                                                    
                                                                </h4>
                                                            </div>
                                                        @endif
                                                        @if($slide->caption_left_top != null)
                                                            <div class="carousel-caption-left carousel-caption">
                                                                <h4 class="text-right">
                                                                   <i class="material-icons">location_on</i>
                                                                   {{ $slide->caption_left_top }}
                                                                    
                                                                </h4>
                                                            </div>
                                                        @endif
                                                        @if($slide->caption_right_top != null)
                                                            <div class="carousel-caption-right carousel-caption">
                                                                <h4 class="text-right">
                                                                   <i class="material-icons">location_on</i>
                                                                   {{ $slide->caption_right_top }}
                                                                    
                                                                </h4>
                                                            </div>
                                                        @endif
                                                    </div>
                                            @endif
                                       @endforeach
                                       
                                    </div>

                                    <!-- Controls -->
                                    <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                        <i class="material-icons">keyboard_arrow_left</i>
                                    </a>
                                    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                        <i class="material-icons">keyboard_arrow_right</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- End Carousel Card -->
                    </div>
                    <div class="col-md-4 col-xs-12">
                     
                           <a href=""  class="mask item-banner mb-10">
                            	<img  src="{{ asset('images/theme/banner1.jpg') }}" alt="Rounded Image" class="banner  img-responsive">
                                <div class="fade-caption">  
                                    <h5 class="caption-title text-right">یک فروشگاه اینترنتی موفق چه امکاناتی دارد؟</h5>  
                                    
                                    <p class="text-right">یک فروشگاه اینترنتی برا ی موفقیت نیاز به فاکتور هایی خاص  نظیر سرعت اجرایی بالا ، ظاهری زیبا و کاربر پسند و..</p>  
                                </div>  
                           </a>
                      
                     
                    </div>
                    <div class="col-md-4 col-xs-12">
                     
                           <a href=""  class="mask item-banner">
                                <img  src="{{ asset('images/theme/banner2.jpg') }}" alt="Rounded Image" class="banner  img-responsive">
                                <div class="fade-caption">  
                                    <h5 class="caption-title mb-20 text-right" >چطور کار وتخصص خود را به دیگران معرفی کنیم؟</h5>  
                                    <p class="text-right">با داشتن وب سایتی حرفه ای موفقیت کار خود را تضمین کنید...</p>  
                                </div>  
                           </a>
                      
                     
                    </div>
                </div>
            </div>
    </div>