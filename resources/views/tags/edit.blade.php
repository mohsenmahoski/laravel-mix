@extends('layouts.admin-app')

@section('title' , '| Edit Tag')

@section('content')
<div class="row">
  <div class="col-md-12">
    <div class="col-md-6">
     <h4 class="well">Edit Tag:</h4>
    	 {!! Form::model( $tag , ['route' => ['tags.update',$tag->id],'method' => 'PUT'] ) 
		  !!}

		  {!! Form::label('name' , 'Tag Name : ') !!}
		  {!! Form::text('name' , null , [ 'class' => 'form-control' ]) !!}
		  
		  <div class="col-md-6 mt-10"> 
		  {!! Form::submit('Save' , [ 'class' => 'btn btn-success btn-block']) !!}
		  </div>
		 <div class="col-md-6 mt-10">
		  	{!! Html::LinkRoute('tags.index' , 'Cancel' , array(), ['class' => 'btn btn-danger btn-block']) !!}
		  </div>

		  {!! Form::close() !!}
    </div>
  </div>
	
</div>
  
@endsection