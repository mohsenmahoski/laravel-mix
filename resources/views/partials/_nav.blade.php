<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="http://www.creative-tim.com">
                    <div class="logo-container">
                        <div class="logo">
                         <a  href="{{ url('/') }}" class="">
                            <img src="{{asset('images/theme/logo.png')}}" alt="modern tech" rel="tooltip" title="<b>WEBI TECH</b></br>گروهی مستعد وپویا در زمینه طراحی و دیزاین وب سایت</b>" data-placement="bottom" data-html="true">
                        </a>
                        </div>
                        


                    </div>
                </a>
            </div>

            <div class="collapse navbar-collapse" id="navigation-index">
                <ul class="nav navbar-nav navbar-right">
                    <li class="{{ Request::is('/') ? 'active' : '' }} text-right">
                        <a href="/"><i class="material-icons">home</i>صفحه اصلی</a>
                    </li>
                    {{-- <li class="{{ Request::is('shop') ? 'active' : '' }} text-right">
                        <a href="/shop"><i class="material-icons">shopping_basket</i>فروشگاه</a>
                    </li> --}}
                    <li class="{{ Request::is('blog') ? 'active' : '' }} text-right">
                         <a href="/blog" rel="tooltip" data-placement="bottom" data-original-title="آخرین خبرها" ><i class="material-icons">dashboard</i>بلاگ</a>
                    </li>
                 
                    <li class="text-right">
                         <ul class="nav navbar-nav prl-15">
                                  <li class="dropdown text-right" id="categories">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="material-icons">view_carousel</i>قالب ها
                                               
                                                <div class="ripple-container"></div>
                                            </a>
                                            <ul class="dropdown-menu">
                                                 
                                                       <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">فروشگاهی</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/64503.html">قالب (Yummy)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="http://www.templatemonsterpreview.com/65634.html">قالب (maxShop)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/51298.html">قالب  (Qjewelry)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/44949.html">قالب (JEWELRY)</a></li>
                                                            </ul>
                                                       </li>
                                                       <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">گیم و بازی</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/52169.html">قالب  (Games)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/52656.html">قالب (Gameportal)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/58659.html">قالب (Finest Game)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/53931.html">قالب (Gameworld)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/52906.html">قالب (Gameportal)</a></li>
                                                            </ul>
                                                       </li>
                                                       <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">الکترونیک ودیجیتال</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/63380.html">قالب (camPhone)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/64920.html">قالب  (iREPAIR)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/63987.html">قالب (Mr.Gizmo)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="http://www.templatemonsterpreview.com/65001.html">قالب (Spotlight)</a></li> 
                                                            </ul>
                                                       </li>
                                                       <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">املاک وساختمان</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/63498.html">قالب  (Architera)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/58640.html">قالب (INTERNA)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/58705.html">قالب (ARCHITECTURE)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/58705.html">قالب (HANDYMAN)</a></li>
                                                            </ul>
                                                       </li>
                                                       <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">گالری اتومبیل و وسیله نقلیه</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/64361.html">قالب (JetBull)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/61226.html">قالب (Citymotors)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/64595.html">قالب (Rentallo)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/58378.html">قالب (WildRide)</a></li>
                                                            </ul>
                                                       </li>
                                                       <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">آموزشگاهی</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/54046.html">قالب (WELINSON)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/60129.html">قالب (Happy Learning)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="http://www.templatemonsterpreview.com/64701.html">قالب (Newsider)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/63613.html">قالب (Longriver University)</a></li>
                                                            </ul>
                                                       </li>
                                                        <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" target="blank" href="#" class="menu">کلینیک دامپزشکی و حیوانات</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/51973.html">قالب (HORSE CLUB)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/51296.html">قالب (Aquamarine)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/62035.html">قالب (PetCenter)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/62029.html">قالب (Furry)</a></li>
                                                            </ul>
                                                       </li>
                                                        <li class="dropdown-submenu text-right">
                                                            <a tabindex="-1" href="#" class="menu">هنری</a>
                                                            <ul class="submenu" id="sub">
                                                              <li><a tabindex="-1" href="https://www.templatemonster.com/demo/65154.html">قالب هنری(CraftBird)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="http://www.templatemonsterpreview.com/65456.html">قالب هنری(National Museum)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/60115.html">قالب هنری(ArtWork)</a></li>
                                                              <li><a tabindex="-1" target="blank" href="https://www.templatemonster.com/demo/52560.html">قالب هنری(THEATRE)</a></li>
                                                            </ul>
                                                       </li>
                                            </ul>

                                  </li>  

                         </ul>
                    </li>
                    <li class="{{ Request::is('about_us') ? 'active' : '' }} text-right">
                          <a rel="tooltip" href="/about_us"  data-placement="bottom" data-original-title="درباره تیم ما" ><i class="material-icons" >speaker_notes</i>درباره ما</a>
                    </li>
                    <li class="{{ Request::is('contact') ? 'active' : '' }} text-right">
                        <a rel="tooltip" data-placement="bottom" data-original-title="با ما در تماس باشید" href="/contact_us" ><i class="material-icons">perm_phone_msg</i>ارتباط باما</a>
                    </li>
                      <li class="text-right dropdown">
                                            <a href="#" class="dropdown-toggle last-a" data-toggle="dropdown" aria-expanded="true">حساب کاربری
                                                <b class="caret"></b>
                                            <div class="ripple-container"></div></a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                
                                                  @if(Auth::check())
                                                       <li>
                                                         {{ Form::open(['route'=>'logout' ,'class'=>'prl-5']) }}
                                                         <button type="submit" class="btn btn-custom text-right btn-block"><i class="material-icons">face</i>خروج</button></a>
                                                         {{ Form::close() }}
                                                       </li>
                                                       <li>
                                                            <a href="{{ route('users.account') }}" class="text-right"><i class="material-icons">account_circle</i>  نمایش پروفایل</a>
                                                       </li>
                                                       <li>
                                                           <a href="#" class="text-right"><i class="material-icons">settings</i> ویرایش اطلاعات حساب</a>
                                                       </li>

                                                  @else
                                                      <li>
                                                          <a href="#" class="text-right" data-toggle="modal" data-target="#LoginModal">
                                                            <i class="material-icons">face</i>      ورود
                                                            <div class="ripple-container"></div>
                                                         </a>
                                                      </li>
                                                       
                                                         
                                                      <li>
                                                           <a href="#" class="text-right" data-toggle="modal" data-target="#myModal">
                                                                <i class="material-icons">contacts</i> عضویت
                                                                <div class="ripple-container"></div>
                                                          </a>
                                                           
                                                      </li>
                                                  @endif
                                                
                                                
                                                
                                              
                                            </ul>
                      </li>   
                </ul>
                <div class="float-block">
                                                      
                </div>
            </div>
        </div>
    </nav>

<script type="text/javascript">
    $(document).ready(function(){
          
          $('.dropdown-submenu #sub').on("mouseleave" , function(e){
            $(this).removeClass('active');
          });
          $('.dropdown-menu').on("mouseleave" , function(e){
              $('#categories').removeClass('open');
               $('ul.active').removeClass('active');
          });
          $('#categories').on("mouseenter" , function(e){
             $(this).addClass('open');
          });
          $('#categories').on("mouseleave" , function(e){
             $(this).removeClass('open');
          });
          $('.dropdown-submenu a.menu').hover( function(e){
            $('ul.active').removeClass('active');
            $(this).next('ul').addClass('active');
           });
      
    });
   
</script>