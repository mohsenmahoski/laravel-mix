@extends('layouts.admin-app')

@section('content')
 <section>
 	<div  class="row">
 		<div class="container-fluid">
 		   <div class="col-md-12 text-right">
 		   <h2 class="well">اصلاح مشخصات محصول</h2>
	 		
	 			  
	 <div class="row">
    	<div class="col-md-12">
    	{{ Html::LinkRoute('products.index','لغو ویرایش',array($product->id),array('class' => 'btn btn-danger btn-sm pull-left mrl-10')) }}
    	{{ Form::model($product , ['route' => ['products.update' , $product->id ],'method'=>'PUT' ,'files' => 'true']) }}
    		{{ Form::submit('ذخیره' ,['class'=>'btn btn-success btn-sm pull-left']) }}
    		<hr class="col-md-12">
    	</div>
    </div>  

                  

                  


                  

	 	
	 		
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
	      <li class="active">
	          <a href="#control-product-details" data-toggle="tab" aria-expanded="true">مشخصات محصول<i class="fa fa-gears"></i>
	          </a>
	      </li>
	      <li class="">
	          <a href="#control-product-images" data-toggle="tab" aria-expanded="false">تصاویر محصول<i class="fa fa-home"></i>
	          </a>
	      </li>
	     
	      <li class="">
	          <a href="#control-product-description" data-toggle="tab" aria-expanded="true">توضیح محصول<i class="fa fa-gears"></i>
	          </a>
	      </li>
	      <li class="">
	          <a href="#control-product-alarms" data-toggle="tab" aria-expanded="false">هشدار محصول<i class="fa fa-home"></i>
	          </a>
	      </li>
	       <li class="">
	          <a href="#category" data-toggle="tab" aria-expanded="false">دسته بندی<i class="fa fa-home"></i>
	          </a>
	      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- Home tab content -->
	  <div class="tab-pane well" id="control-product-images">
	       <div class="row"> 
	       <div class="col-md-12">
	        	
                <div class="col-md-4">
                     <img class="img-thumbnail" style="width:100px;height:100px;" src="{{ asset('images/products/'.$product->orginal_img) }}">
                </div>
	        	<div class="col-md-8"> 
	        	     <h3>تصویر اصلی</h3>
	        	    {{ Form::File('orginal_img' , ['class'=>'form-control mt-20'] ) }}
	        	</div>
	        	 
	        </div>
	  	           
           <hr class="col-md-12">
                   @php
                    $i=1;
                   @endphp
                   @foreach($images as $image)
	                 
		                   <div class="col-md-12 mb-10">
		                     <div class="col-md-4"> <img class="img-thumbnail" style="width:100px;height:100px;" src="{{ asset('images/products/'.$image) }}"></div>
		                      
		                      <div class="col-md-8">
		                      <p><b>تصویر {{ $i }}</b></p>
		                      {{ Form::File('image'.$i, ['class'=>'form-control mt-20'] ) }}</div>
		                      
		                   </div>
	                  
	                      @php
	                        ++$i;
	                      @endphp
	                   @endforeach
	        </div>
	  </div>
      <!-- /.tab-pane -->
      <!-- Stats tab content -->
      <div class="tab-pane well active" id="control-product-details">
      	          {{ Form::label('name','نام محصول') }}
	 			  {{ Form::text('name' , null , ['class'=>'text-right form-control mb-10']) }}

	 			  {{ Form::label('price' , 'قیمت') }}
	 			  {{ Form::text('price' , null , ['class' => 'form-control text-right mb-10']) }}

	 			  {{ Form::label('special_sale' , 'قیمت ویژه') }}
	 			  {{ Form::text('special_sale' , null , ['class' => 'form-control text-right mb-10']) }}
                   {{ Form::label('sellers' , 'انتخاب فروشنده' ) }}
                   {{ Form::select('seller',$sellers,null,['class' => 'form-control select2-multi mb-10' ]) }}
                   {{ Form::label('slug' , 'مسیر') }}
	 			   {{ Form::text('slug' , null , ['class' => 'form-control text-right mb-10']) }}
      </div>
      <!-- /.tab-pane -->
      <div class="tab-pane well" id="category">
	     <div class="sidebar">  	 
	       	  <ul class="tree">

              @foreach($categories as $category) 
                 
                 @php $checked = false ; @endphp
                  
                  @if($category->level == 1)
                  
				    
				    <li class="has">
					    @foreach($catselected as $c)
		                     @if($category->name == $c->name)

		                       @php $checked = true ; @endphp
		                      
		                     @endif
					    @endforeach
				    @if($checked == true)
					      <input id="cats" type="checkbox" name="domain[]" checked="checked" value="{{ $category->id }}">
	                       @php $checked = false ; @endphp
				     @else
				     	   <input id="cats" type="checkbox" name="domain[]" value="{{ $category->id }}">
				    @endif
				      
				      <label class="btn btn-default pull-right sub">{{ $category->name }}</label>
				      <ul>
				      @foreach($categories as $cat2)
				         @php $checked = false ; @endphp
						    @if(($cat2->level == 2)&&($cat2->parent==$category->id))
						        <li class="has">
						            @foreach($catselected as $c)
					                     @if($category->name == $c->name)

					                       @php $checked = true ; @endphp
					                      
					                     @endif
								    @endforeach
								    @if($checked == true)
						               <input id="cats" type="checkbox" checked="checked" name="subdomain[]" value="{{ $cat2->id }}">
						                @php $checked = false ; @endphp
						              @else
                                        <input id="cats" type="checkbox" name="subdomain[]" value="{{ $cat2->id }}">
						            @endif
						                <label class="btn btn-default pull-right">{{ $cat2->name }}</label>
						          <ul>
						          @foreach($categories as $cat3 )
						            @php $checked = false ; @endphp
									@if(($cat3->level == 3)&&($cat3->parent==$cat2->id))
							            <li>
							                @foreach($catselected as $c)
							                     @if($category->name == $c->name)

							                       @php $checked = true ; @endphp
							                      
							                     @endif
										    @endforeach
										    @if($checked == true)
							              		  <input id="cats" type="checkbox" checked="checked" name="subject[]" value="{{ $cat3->id }}">
							              		@else
							              		   <input id="cats" type="checkbox" name="subject[]" value="{{ $cat3->id }}">
							              	@endif
							              <label class="btn btn-default pull-right">{{ $cat3->name }}</label>
							            </li>
						            @endif
						          @endforeach
						          </ul>
						        </li>
					        @endif
				        @endforeach
				      </ul>
				    </li>
				   @endif
				@endforeach
              </ul> 
              {{ Form::hidden('invisible', 'secret', array('id' => 'invisible_id')) }}    
         </div>        
      </div>
      <!-- Settings tab content -->
      <div class="tab-pane well" id="control-product-description">
        
	 			  {{ Form::label('description' , 'توضیحات محصول') }}
	 			  {{ Form::textarea('description' , null , ['class' => 'form-control text-right mb-10']) }}
      </div>
      <div class="tab-pane well" id="control-product-alarms">
	 			  {{ Form::label('alarm' , 'هشدار محصول') }}
	 			  {{ Form::textarea('alarm' , null , ['class' => 'form-control text-right mb-10']) }}
      </div>
      <!-- /.tab-pane -->
    </div>
   
  {{ Form::close() }}
 		  </div>
 		</div>
 	</div>
 </section>
@endsection
@section('scripts')
	<script type="text/javascript">
	  
	  $(document).on('click', '.tree label', function(e) {
	  $(this).next('ul').fadeToggle();
	  e.stopPropagation();
	});

	$(document).on('change', '.tree input[type=checkbox]', function(e) {
	  $(this).siblings('ul').find("input[type='checkbox']").prop('checked', this.checked);
	  $(this).parentsUntil('.tree').children("input[type='checkbox']").prop('checked', this.checked);
	  e.stopPropagation(); allcats();
	});

	$(document).on('click', 'button', function(e) {
	  switch ($(this).text()) {
	    case 'Collepsed':
	      $('.tree ul').fadeOut();
	      break;
	    case 'Expanded':
	      $('.tree ul').fadeIn();
	      break;
	    case 'Checked All':
	      $(".tree input[type='checkbox']").prop('checked', true);
	      break;
	    case 'Unchek All':
	      $(".tree input[type='checkbox']").prop('checked', false);
	      break;
	    default:
	  }

	});

	</script>
	<script type="text/javascript">
	function allcats(){
		let checks = '';
	    let cats = document.querySelectorAll('[id=cats]');
		for(let i=0 ;i<cats.length; i++){
		  if (cats[i].checked)  {
		  	 
		  	 	checks +=cats[i].value+'|';
		    
		   }
	    }
	    checks = checks.slice(checks , -1);
	    document.getElementById('invisible_id').value = checks;
	} 
	allcats();
	</script>
@endsection