@extends('layouts.admin-app')

@section('title','| create blog')

@section('stylesheet')
  {!! Html::style('css/parsley.css') !!}
  {!! Html::style('css/select2.min.css') !!}
   <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
     <script>tinymce.init({ 
          selector:'textarea', 
          plugins: "image"
         
          
     });</script>
@endsection

@section('content')
<div class="row">
 <div class="col-md-8 col-md-offset-2">
  <hr>
  <div class="alert alert-info text-bold">Create new post</div>
  {!! Form::open(array('route' => 'posts.store','data-parsley-validate' => '' , 'files' => 'true')) !!}
    {!! Form::label('title','Title: ',['class' => 'mt-10']) !!}
    {!! Form::text('title',null,array('class'=>'form-control','required' => '' )) !!}
    
    {!! Form::label('slug','Slug: ',['class' => 'mt-10']) !!}
    {!! Form::text('slug',null,['class' => 'form-control' , 'required' => '' , 'minlength' => '5' , 'maxlength' => '255']) !!}

    {!! Form::label('categories' , 'Categories',['class' => 'mt-10']) !!}
    <select name="category_id" class="form-control">
     @foreach($categories as $category)
           <option value="{{ $category->id }}">{{ $category->name }}</option>
     @endforeach
     </select>

     {!! Form::label('tags' , 'Tags',['class' => 'mt-10']) !!}
    <select name="tags[]" class="form-control select2-multi" multiple="multiple">
     @foreach($tags as $tag)
           <option value="{{ $tag->id }}">{{ $tag->name }}</option>
     @endforeach
     </select>
    
    {!! Form::label('image' , 'Upload Image',['class' => 'mt-10'],['class' => 'mt-10']) !!}
    {!! Form::file('image') !!}

    {!! Form::label('body','Blog Body: ',['class' => 'mt-10']) !!}
    {!! Form::textarea('body',null,array('class' => 'form-control')) !!}
    {!! Form::submit('Create post',array('class' => 'btn btn-success btn-block','style' => 'margin-top:20px')) !!}
  {!! Form::close() !!}
</div>
@endsection

@section('scripts')
 {!! Html::script('js/parsley.min.js') !!}
 {!! Html::script('js/select2.min.js') !!}
 
 
 <script type="text/javascript">
   $('.select2-multi').select2({placeholder: "Select a tag"})
 </script>
@endsection