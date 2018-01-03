@extends('layouts.admin-app')

@section('content')
  <section>
  	<div class="row">
  		<div class="col-md-12">
  			<div class="well text-right">نمایش تمام محصولات</div>
  			<div class="row">
  				<div class="col-md-12">
  				   <a href="{{ route('products.create' ) }}" class="pull-right btn btn-success btn-sm">افزودن محصول
                        <i class="fa fa-plus" aria-hidden="true"></i>
  				   </a>	
  			    </div>
  			</div>
  			<table class="table">
  			   	<thead>
  			   		<th class="text-center"> # </th>
  			   		<th class="text-center"> توضیحات </th>
  			   		<th class="text-center"> فروشنده </th>
  			   		<th class="text-center"> فروش ویژه </th>
  			   		<th class="text-center"> قیمت </th>
  			   		<th class="text-center"> نام محصول </th>
  			   		<th class="text-center">تصویر محصول</th>
  			   		<th class="text-center"> # </th>
  			   	</thead>
  			   	<tbody>

		  			@foreach($products as $product)
		  			   
		  			   	<tr>
                           <td class="text-center">
		  			   			
		  			   			{{ Html::linkRoute('products.edit' , 'ویرایش' , [$product->id] , ['class'=>'pull-right btn btn-xs btn-success']) }}
		  			   			{{ Form::open(['route'=>['products.destroy' , $product->id] ,'method'=>'DELETE']) }}
                             {{ Form::submit('حذف' , ["class"=>"btn btn-xs btn-danger pull-right"]) }}
		  			   			{{ Form::close() }}
		  			   			{{ Html::linkRoute('product.show' , 'نمایش' , [$product->slug] , ['class'=>'pull-right btn btn-xs btn-primary' , 'target'=>'blank' ]) }}
		  			   		</td>
		  			   	   
		  			   	    
		  			   	    <td class="text-center">{{ $product->describtion }}</td>
                            <td class="text-center">{{ $product->seller->name }}</td>
                            <td class="text-center">{{ $product->special_sale }}</td>
                            <td class="text-center">{{ $product->price }}</td>
		  			   		<td class="text-center">{{ $product->name }}</td>
		  			   		<td class="text-center"><img style="width:50px;height:50px;" src="{{ asset('images/products/'.$product->orginal_img) }}" class="thumbnail"></td>
		  			   		<td class="text-center">{{ $product->id }}</td>
		  			   		
		  			   	</tr>	
		  			   
		  			
		  			@endforeach	

  			   </tbody>
  			</table>
  		</div>
  	</div>
  </section>
@endsection