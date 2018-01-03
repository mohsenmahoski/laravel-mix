@extends('layouts.admin-app')

@section('title' , 'Edit Category')

@section('content')
 <div class="row">
   <div class="col-md-8">
       <div class="well">Edit Category</div>
	   {!! Form::model($category, ['route' => ['categories.update',$category->id],'method' => 'PUT']) !!}
			
	   {!! Form::label('name','Name: ') !!}
	   {!! Form::text('name',null,['class' => 'mb-10 form-control input-lg']) !!}
       
	   {{ Form::submit('Save',['class' => ' btn btn-success btn-block']) }}

      {!! Html::LinkRoute('categories.index','Cancel',array(),array('class' => 'btn btn-danger btn-block')) !!}
       {!! Form::close() !!}
    </div>
 </div>
@endsection