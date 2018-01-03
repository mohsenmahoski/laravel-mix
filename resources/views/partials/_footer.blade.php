@php
  $footer= DB::table('footers')->where('id' , 1)->first();
  $footer = $footer->footer;
@endphp


<footer class="footer footer-big footer-color-black">
        
          
               
	                   {{--   @if($footer != '')
					      {!! html_entity_decode($footer) !!}
					     @endif --}}
				    
            
            <div class="container">
            <div class="row">
            <div class="text-right col-md-2 col-md-offset-1 col-sm-3">
                    <div class="info">
                        <h5 class="title text-right">همراه ما باشید</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#" class="btn btn-social btn-facebook btn-simple">
                                        <i class="fa fa-facebook-square"></i> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social btn-dribbble btn-simple">
                                        <i class="fa fa-dribbble"></i> Dribbble
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social btn-twitter btn-simple">
                                        <i class="fa fa-twitter"></i> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-social btn-reddit btn-simple">
                                        <i class="fa fa-google-plus-square"></i> Google+
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </div>
                
                
                <div class="text-right col-md-3 col-sm-3">
                    <div class="info">
                        <h5 class="title text-right">آخرین خبرها</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                       
                                        طراحی فروشگاهی حرفه ای با مجنتو یکی از راه کارهای موثر در افزایش و رونق کسب و کار شما خواهد بود ...
                                        <hr class="hr-small on-dark">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                       طراحی سایت با ورد پرس این امکان را به شما می دهد تا در کمترین زمان ممکن به تجارت خود حرکت دهید...
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="text-right col-md-2  col-sm-2">
                    <div class="info">
                        <h5 class="title text-right">پشتیبانی</h5>
                         <nav>
                            <ul>
                                
                                <li>
                                    <a href="#">نحوه انجام کار</a>
                                </li>
                                <li>
                                    <a href="#">قوانین و مقررات</a>
                                </li>
                                <li>
                                    <a href="#">بازگشت وجه</a>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="text-right col-md-2 col-sm-3">
                    <div class="info">
                        <h5 class="title text-right">شرکت</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">صفحه اصلی</a></li>
                                <li>
                                    <a href="#">درباره ما</a>
                                </li>
                                <li>
                                    <a href="#">نمایش پروژه ها</a>
                                </li>
                               
                                <li>
                                    <a href="#">تماس با ما</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <hr class="on-dark">
            <div class="copyright text-center">
                 © <script async="" src="//www.google-analytics.com/analytics.js"></script>(<script> document.write(new Date().getFullYear()) </script>)  تمامی حقوق برای وب سایت وبی تک محفوظ است
            </div>
        </div>
</footer>