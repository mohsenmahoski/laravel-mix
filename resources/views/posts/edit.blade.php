@extends('layouts.admin-app')

@section('title','| Edit The Post')

@section('stylesheet')
  {!! Html::style('css/select2.min.css') !!}
 
  <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
  <script>tinymce.init({ selector:'textarea' });</script>

@endsection

@section('content')
   <div class="row">
   {!! Form::model($post, ['route' => ['posts.update',$post->id],'method' => 'PUT' , 'files' => 'true']) !!}
	 <div class="col-md-8">
	  <div class="col-md-12 well"><h4><b> Eidt Post </b></h4></div>
	   {!! Form::label('title','Title: ') !!}
	   {!! Form::text('title',null,['class' => 'form-control input-lg']) !!}
	   
	   {!! Form::label('slug' , 'Url Slug:' , ['class' => 'bottom-btn']) !!}
	   {!! Form::text('slug',null,['class' => 'form-control input-lg']) !!}

	   {!! Form::label('category_id' , 'Category: ' , ['class' => 'bottom-btn']) !!}
	   {!! Form::select('category_id',$categories,null,['class' => 'form-control input-lg']) !!}
         
        {!! Form::label('tags' , 'Tags: ' , ['class' => 'bottom-btn']) !!}
	   {!! Form::select('tags[]',$tags,null,['class' => 'form-control input-lg select2-multi' , 'multiple' => 'multiple']) !!}
	 
        
	   {!! Form::label('image','Posts Image:', ['class' => 'bottom-btn'] ) !!}
       {!! Form::image(asset('images/posts/'.$post->image) ,'' , ['class' => ' img-thumbnail thumbnail'] ) !!}
	   {!! Form::file('image' , ['class' => 'form-control']) !!}

       {!! Form::label('body','Body:',['class' => 'bottom-btn']) !!}
	   {!! Form::textarea('body',null,['class' => 'form-control']) !!}
	  </div>
	  <div class="col-md-4">
		  	<div class="well">
		  	<dl>
		  		<dt>
		  			Created At:
		  		</dt>
		  		<dd>
		  		  {{ date('M j, Y h:ia',strtotime($post->created_at)) }}
		  		</dd>
		  	</dl>
		  	<dl>
		  	    <dt>
		  			Last Updated At:
		  		</dt>
		  		<dd>
		  		  {{ date('M j, Y h:ia',strtotime($post->updated_at)) }}
		  		</dd>
		  	</dl>
		  	
		  	<hr>
		  	<div class="row">
		     <div class="col-sm-6">
		     {!! Html::LinkRoute('posts.show','Cancel',array($post->id),array('class' => 'btn btn-danger btn-block')) !!}
		     	
		     </div>
		     <div class="col-sm-6">
		     {{ Form::submit('Save',['class' => 'btn btn-success btn-block']) }}
		     
		     	
		     </div>
		   </div>
		  </div>
	  	</div>
	  	{{ Form::close() }}
  	  </div>
@endsection

@section('scripts')
 {!! Html::script('js/select2.min.js') !!}
 <script type="text/javascript">
 	$('.select2-multi').select2();
 </script>
@endsection