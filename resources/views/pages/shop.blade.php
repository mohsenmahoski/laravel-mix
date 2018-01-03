@extends('main')
@section('header')
     <div class="header header-filter" style="background-image: url({{ asset('/images/shop/bg6.jpg') }});">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="brand">
                        <h2>به فروشگاه مدرن خوش آمدید</h1>
                        <div class="separator separator-danger">✻</div>
                        <h3 class="text-center">جدیدترین مدل ها را در فروشگاه ما پیدا کنید</h3>
                    </div>
                </div>
            </div>

        </div>
     </div>
@endsection
@section('content')
	<div class="section-basic">
		<div class="row">
		   <div class="container-fluid">
							<div class="col-md-3">
								<div class="card card-refine card-plain">
									<div class="card-content">
										<h4 class="card-title">
											فیلتر محصولات
											<button class="pull-left btn btn-default btn-fab btn-fab-mini btn-simple pull-right" rel="tooltip" title="" data-original-title="اعمال فیلتر">
												<i class="material-icons">cached</i>
											</button>
										</h4>
										<div class="panel panel-default panel-rose">
											<div class="panel-heading" role="tab" id="headingOne">
												<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
													<h4 class="panel-title text-right">بازه قیمت</h4>
													<i class="material-icons">keyboard_arrow_down</i>
												</a>
											</div>
											<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
												<div class="panel-body panel-refine">
													<span id="price-left" class="text-right price-left pull-left" data-currency="€">42 ریال </span>
													<span id="price-right" class="text-right price-right pull-right" data-currency="€">880 ریال</span>
													<div class="clearfix"></div>
													<div id="sliderRefine" class="slider slider-rose noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-origin" style="left: 1.37931%;"><div class="noUi-handle" data-handle="0" style="z-index: 5;"></div></div><div class="noUi-connect" style="left: 1.37931%; right: 2.29885%;"></div><div class="noUi-origin" style="left: 97.7011%;"><div class="noUi-handle" data-handle="1" style="z-index: 4;"></div></div></div></div>
												</div>
											</div>
										</div>

										<div class="panel panel-default panel-rose">
											<div class="panel-heading" role="tab" id="headingTwo">
												<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
													<h4 class="panel-title text-right">نوع لباس</h4>
													<i class="material-icons">keyboard_arrow_down</i>
												</a>
											</div>
											<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
												<div class="panel-body">
													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox" checked=""><span class="checkbox-material"><span class=""></span></span>
															بولیز
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															کت و شلوار
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															تی شرت
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															شلوار لی
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
														دامن
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															روسری
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															کت دامن
														</label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															جلیقه
														</label>
													</div>
												</div>
											</div>
										</div>

										

										<div class="panel panel-default panel-rose">
											<div class="panel-heading" role="tab" id="headingFour">
												<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
													<h4 class="panel-title text-right">رنگ</h4>
													 <i class="material-icons">keyboard_arrow_down</i>
												</a>
											</div>
											<div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
												<div class="panel-body">
													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox" checked=""><span class="checkbox-material"><span class=""></span></span>
															همه
													   </label>
													</div>

													<div class="checkbox">
														<label>
															<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
															مشکی
													  </label>
													</div>

													<div class="checkbox">
														<label>
				 											<input type="checkbox" value="" data-toggle="checkbox">
				 											<span class="checkbox-material">
				 											<span class=""></span>
				 										    </span>
				 											آبی
			 										   </label>
													</div>

												   <div class="checkbox">
													    <label>
		    												<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
		    												قهوه ای
		    										    </label>
												   </div>

												   <div class="checkbox">
													    <label>
		    												<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
		    												خاکستری
		    										    </label>
												   </div>

												  <div class="checkbox">
														<label>
		   													<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
		   													سبز
		   										   		</label>
												  </div>

												  <div class="checkbox">
													  	<label>
													   		<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
													   		زرد
													 	</label>
												  </div>

												   <div class="checkbox">
													   	<label>
													   		<input type="checkbox" value="" data-toggle="checkbox"><span class="checkbox-material"><span class=""></span></span>
													   		صورتی
													 	</label>
												   </div>
												</div>
											</div>
										</div>
									</div>
								</div><!-- end card -->
							</div>

							<div class="col-md-9">
							    <div class="col-md-12">
									
										@include('theme.products-slider')
									
								</div>
			   					<div class="col-md-12">
									
										@include('theme.products-deals')
									
								</div>
			                </div>					
		   </div>
			                <div class="container-fluid">@include('theme.product_grid')</div>
			                
		</div>
	</div>
   @include('theme.subscribe')
@endsection