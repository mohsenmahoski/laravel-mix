@extends('layouts.admin-app')

@section('title' , 'Edit Comment')

@section('content')
<div class="col-md-8 col-md-offset-2">
 {{ Form::model($comment,['route' => ['comment.update' , $comment->id] , 'method'=>'PUT']) }}
    
    {{ Form::label('name' , 'Name:') }}
    {{ Form::text('name' , null ,['class' => 'form-control'])}}
     
     {{ Form::label('email' , 'Email:') }}
     {{ Form::email('email' , null ,['class' => 'form-control']) }}
     
     {{ Form::label('comment' , 'Comment') }}
     {{ Form::textarea('comment' , null , ['class' => 'form-control']) }}
    
     {{ Form::submit('Save',['class' => 'btn btn-success btn-block bottom-btn']) }}
 {{ Form::close() }}
 </div>
@endsection