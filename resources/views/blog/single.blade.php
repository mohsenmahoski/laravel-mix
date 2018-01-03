@extends('main')
@section('header')
     <div class="header header-filter" style="background-image: url({{ asset('/images/theme/cooporation.jpg') }});">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="brand">
                        <h1></h1>
                        <h3></h3>
                    </div>
                </div>
            </div>

        </div>
     </div>
@endsection
@section('title' , "| $post->title")

@section('content')
<div class="row">
		 <div class="col-md-12 blog-post text-right mt-20">
		     <div class="col-md-4  text-center">
		                    <h3 class="social-title">نویسنده</h3>
		                    <div class="author text-center">
		                        <div class="avatar avatar-danger">
		                            <img alt="..." src="{{ asset('images/theme/face_1.jpg')}}" >
		                        </div>

		                        <div class="card-description text-center">
		                            <h3 class="big-text">تینا</h3>
		                            <p class="small-text">طراح و نویسنده وب</p>
		                           <div class="separator separator-primary">✻</div>
		                        </div>
		                        <div class="social-buttons">
		                            <a href="#" class="btn btn-social btn-simple btn-xs"><i class="fa fa-twitter"></i></a>
		                            <a href="#" class="btn btn-social btn-simple btn-xs"><i class="fa fa-dribbble"></i></a>
		                            <a href="#" class="btn btn-social btn-simple btn-xs"><i class="fa fa-facebook-square"></i></a>
		                        </div>
		                    </div>
		                    <h3 class="social-title">دسته بندی مطلب:</h3>
		                    <span class="label label-fill label-danger">Food</span>
		                    <span class="label label-fill label-info">{{ $post->category->name }}</span>
		                    <span class="label label-fill label-danger">Lifestyle</span>
		                    <span class="label label-fill label-danger">Breakfast</span>
		                    <h3 class="social-title">تعداد مطلب - 18</h3>
		                    <div class="social-buttons-blog-posts">
		                        <button class="btn btn-social btn-simple btn-xs btn-padding"><i class="fa fa-facebook-square"></i></button>
		                        <button class="btn btn-social btn-simple btn-xs btn-padding"><i class="fa fa-twitter"></i></button>
		                        <button class="btn btn-social btn-simple btn-xs btn-padding"><i class="fa fa-instagram"></i></button>
		                        <button class="btn btn-social btn-simple btn-xs btn-padding"><i class="fa fa-google-plus-square"></i></button>
		                    </div>
		     </div>
			 <div class="col-md-8 ">
				     <img src="{{ asset('images/posts/'.$post->image) }}" class="responsive-image">
				 	 <h3 class="well">{{ $post->title }}</h3>
				 	 <p>{!! html_entity_decode($post->body) !!}</p>
				 	 
			 </div>
			 
		 </div>
</div>
 <div class='row'>
	 	<div class='col-md-8 col-md-offset-2'>
	 	<hr>
	 		@foreach($post->comments as $comment)
	 		  <div class="comment text-right">
		 		  <img src="{{ 'https://www.gravatar.com/avatar/'.strtolower(trim($comment->email)).'?s=50&r=pg&d=identicon' }}" class="gra pull-left" />
		 		  	<strong class="col-md-12">کاربر: {{ $comment->name }}</strong>
		 		  	<br>
		 		  	<div class="col-md-12">
		 		  	  <strong>نظر:</strong>
		 		  	  <p>{{ $comment->comment }}</p>
		 		  	</div>
		 		  	
	 		  </div>
	 		@endforeach
	 	</div>
 </div>
 <div class="row">
	 	<div class="col-md-8 col-md-offset-2 table-bordered text-right">
	 	<h4 class="text-right">نظر خود را برای ما ارسال کنید:</h4>
	 		{!! Form::open(['route' => ['comment.store' , $post->id] , 'method' => 'POST']) !!}
	 		  <div class="col-md-6 form-group label-floating is-empty">
	 		     {!! Form::label('name' , 'نام: ',['class' => 'control-label']) !!}
	 		     {!! Form::text('name' , null ,['class' => 'form-control']) !!}
	 		  </div>
	 		  <div class="col-md-6 form-group label-floating is-empty">
	 		     {!! Form::label('email' , 'ایمیل: ',['class' => 'control-label']) !!}
	 		     {!! Form::email('email' , null ,['class' => 'form-control']) !!}
	 		  </div>
	 		  <div class="col-md-12 form-group label-floating is-empty">
	 		     {!! Form::label('comment' , 'نظر: ' ,['class' => 'control-label']) !!}
	 		     {!! Form::textarea('comment' , null ,['class' => 'form-control' , 'rows' => '5']) !!}
	 		     {!! Form::submit('ارسال' , ['class' => 'bottom-btn btn btn-success btn block'])!!}
	 		  </div>

	 		{!! Form::close() !!}
	 	</div>
 </div>
<div class="row">
	<div class="container-fluid">
		@include('theme.latest_blog')
	</div>
</div>
@endsection