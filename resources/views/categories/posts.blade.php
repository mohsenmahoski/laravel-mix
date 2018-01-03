@extends('main')

@section('title' , '| Category Posts')

@section('content')
  <div 'row'>
  	<div class="col-md-12 text-right" >
  	<blockquote> 
  	   <h1>{{$category->name}}</h1>
       <footer><b>پست های مربوط به این دسته بندی</b></footer>
  	</blockquote>
  	 <hr>
  		@foreach($category->posts as $post)
  		 <div class="rtl">
          <img class="img-responsive" src="{{ asset('images/posts/'.$post->image) }}">
	  		  <h3 class="align-right">{{$post->title}}</h3>
	  		  <p class="align-right">{!! html_entity_decode($post->body) !!}</p>
	         <hr> 
          </div>
  		@endforeach
  	</div>
  </div>
@endsection