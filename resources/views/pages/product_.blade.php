@extends('main')

@section('stylesheet')
    <script src="{{ asset('js/zooming/jquery.min.js') }}"></script>

      <!-- CSS STYLE-->
     <link rel="stylesheet" type="text/css" href="{{ asset('css/xzoom.css') }}" media="all" />

            <!-- XZOOM JQUERY PLUGIN  -->
     <script type="text/javascript" src="{{ asset('js/zooming/xzoom.min.js')}}"></script>
@endsection
@section('header')
    <div class="header header-filter" style="background-image: url({{ asset('/images/theme/cooporation.jpg') }});">
        
     </div>
@endsection

@section('body_class' , 'product-page')
@section('content')
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        
                
        
              <div class="tab-content">
                               
                                  <div class="tab-pane active" id="product-page_orginal">
                                     <img  xoriginal="{{ asset('/images/products/'.$product->orginal_img) }}"  class="xzoom tab-pane" src="{{ asset('/images/products/'.$product->orginal_img) }}">
                                 </div> 
                                  @for($i=0;$i<count($images);$i++)
                                    <div class="tab-pane" id="product-page{{$i+2}}">
                                       <img  xoriginal="{{ asset('/images/products/'.$images[$i]) }}"  class="xzoom tab-pane"  src="{{ asset('/images/products/'.$images[$i]) }}">
                                    </div>
                                  @endfor
              </div>
              @include('theme.product_images_slider') 
      </div>
       
        <div class="col-md-6 col-sm-6">
                <div class="col-md-12">
                   <h2 class="title title-black"> {{ $product->name }} </h2>
                   @foreach($product->procat as $procat)
                    <h2 class="title title-black"> {{ $procat->name }} </h2>
                  @endforeach
                    <h3 class="main-price text-right">{{ $product->price }} ریال</h3>
                </div>
    						
    					
                
                
    						<div class="row pick-size">
                        <div class="col-md-6 col-sm-6 text-right">
                                            <label>انتخاب رنگ</label>
                            <div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle select-with-transition" data-toggle="dropdown" role="button" title="سفید" aria-expanded="false"><span class="filter-option pull-left">سفید</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span><div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 574px; top: 733px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 612px; top: 739px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 612px; top: 739px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 557px; top: 724px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 568px; top: 730px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 538px; top: 737px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 550px; top: 732px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 541px; top: 728px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 542px; top: 728px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 542px; top: 728px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div></div></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class=""><a tabindex="0" class="text-right" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">قرمز</span><span class="material-icons  check-mark"> done </span><div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 30.5px; top: 16.6094px; background-color: rgb(255, 255, 255); transform: scale(22.8125);"></div></div></a></li><li data-original-index="1" class=""><a tabindex="0" class="text-right" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">خاکستری</span><span class="material-icons  check-mark"> done </span><div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 57.5px; top: 33.6094px; background-color: rgb(255, 255, 255); transform: scale(22.8125);"></div><div class="ripple ripple-on ripple-out" style="left: 58.5px; top: 14.6094px; background-color: rgb(255, 255, 255); transform: scale(22.8125);"></div></div></a></li><li data-original-index="2" class="selected"><a tabindex="0" class="text-right" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">سفید</span><span class="material-icons  check-mark"> done </span><div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 53.5px; top: 7.60938px; background-color: rgb(255, 255, 255); transform: scale(22.8125);"></div><div class="ripple ripple-on ripple-out" style="left: 34.5px; top: 2.60938px; background-color: rgb(255, 255, 255); transform: scale(22.8125);"></div></div></a></li></ul></div><select class="selectpicker" data-style="select-with-transition" data-size="7" tabindex="-98">
                              <option value="1">قرمز</option>
                              <option value="2">خاکستری</option>
                              <option value="3">سفید</option>
                            </select></div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 text-right">
                                            <label>انتخاب سایز</label>
                            <div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle select-with-transition" data-toggle="dropdown" role="button" title="متوسط" aria-expanded="false"><span class="filter-option pull-left">متوسط</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span><div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 762px; top: 725px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div><div class="ripple ripple-on ripple-out" style="left: 742px; top: 740px; background-color: rgb(60, 72, 88); transform: scale(24.0625);"></div></div></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class=""><a tabindex="0" class="text-right" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text"> کوچک </span><span class="material-icons  check-mark"> done </span></a></li><li data-original-index="1" class="selected"><a tabindex="0" class="text-right" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">متوسط</span><span class="material-icons  check-mark"> done </span><div class="ripple-container"><div class="ripple ripple-on ripple-out" style="left: 90px; top: 2.60938px; background-color: rgb(255, 255, 255); transform: scale(22.8125);"></div></div></a></li><li data-original-index="2"><a tabindex="0" class="text-right" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text"> بزرگ </span><span class="material-icons  check-mark"> done </span></a></li></ul></div><select class="selectpicker" data-style="select-with-transition" data-size="7" tabindex="-98">
                              <option value="1"> کوچک </option>
                              <option value="2">متوسط</option>
                              <option value="3"> بزرگ </option>
                            </select></div>
                                        </div>
                </div>
                <div class="row">
                            <div class="col-md-12">
                                  <button class="pull-left btn btn-rose btn-success">اضافه به سبد خرید  &nbsp;
                                     <i class="material-icons">shopping_cart</i>
                                  </button>
                            </div>
                </div>
                <div class="clearfix"></div>
                <div id="acordeon mt-20">
                     <div class="panel-group" id="accordion">
                         <div class="panel panel-border panel-default">
                                <div class="panel-heading text-right" role="tab" id="headingOne">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h4 class="panel-title">
                                          توضیحات محصول
                                                <i class="pull-left material-icons">keyboard_arrow_down</i>
                                        </h4>
                                    </a>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in">
                                  <div class="panel-body">
                                    <p class="text-justify">
                                     {{ $product->description }}
                                    </p>
                                  </div>
                                </div>
                         </div>
                         <div class="panel panel-border panel-default">
                                <div class="panel-heading text-right" role="tab" id="headingOne">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-controls="collapseOne">
                                        <h4 class="panel-title">
                                           اطلاعات فروشنده
                                        <i class="pull-left material-icons">keyboard_arrow_down</i>
                                        </h4>
                                    </a>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse">
                                  <div class="panel-body text-justify">
                                      <h4>نام فروشنده : {{ $product->seller->name }}</h4>
                                    
                                      <p>اطلاعات فروشگاه : {{ $product->seller->shop_description }}</p>
                                      
                                  </div>
                                </div>
                         </div>
                         <div class="panel panel-border panel-default">
                                <div class="panel-heading text-right" role="tab" id="headingOne">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-controls="collapseOne">
                                        <h4 class="panel-title">
                                           هشدار و توجهات محصول
                                        <i class="pull-left material-icons">keyboard_arrow_down</i>
                                        </h4>
                                    </a>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse">
                                  <div class="panel-body">
                                    <p class="text-right">{{ $product->alarm }}</p>
                                  </div>
                                </div>
                         </div>

                      </div>
                </div><!--  end acordeon -->

    			      
                    
        </div> 
      
    </div>
  </div>
   
@endsection

@section('scripts')
     <script type="text/javascript">
       
      
            
      $( ".xzoom").each(function() {
        $( this ).xzoom({tint: '#333', Xoffset: 15});
      });
     
      </script> 
      
@endsection