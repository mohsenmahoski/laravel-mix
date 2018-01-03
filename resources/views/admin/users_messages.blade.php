@extends('layouts.admin-app')


@section('content')
 <section>
  <div class="row">
  	<div class="container-fluid">
  	 <div class="col-md-12">
  	 	<table class="table text-right">
  			<thead>
	  			
	  				<th class="text-right col-md-1">#</th>
	  				<th class="text-right col-md-1">نام</th>
	  				<th class="text-right col-md-2">نام خوانوادگی</th>
	  				<th class="text-right col-md-4">ایمیل</th>
	  				<th class="text-right col-md-4">متن پیام</th>
	  				<th class="text-right col-md-4">#</th>
	  			
	  				
	  				
	  			</thead>
  			<tbody>
  			@php
  			  $i = 1;
  			@endphp
  			@foreach($messages as $message)
  				<tr class="text-right">
	  				
	  				 	<td>{{ $i }}</td>
		  				<td>{{ $message->name }}</td>
		  				<td>{{ $message->family }}</td>
		  				<td>ا{{ $message->email }}</td>
	  				
	  				
	  				 	<td>{{ $message->message }}</td>
	  				    <td>
	  				    	{{ Form::open(['route'=>['users_messages_delete',$message->id]]) }}
	  				    	 {{ Form::submit('حذف',['class' => 'btn btn-danger btn-xs']) }}
	  				    	{{ Form::close() }}
	  				    </td>
  				</tr>
  				@php ++$i @endphp
  			@endforeach
  		    </tbody>
  		</table>
  	 </div>
  		
  	</div>
  </div>
 </section>
@endsection
