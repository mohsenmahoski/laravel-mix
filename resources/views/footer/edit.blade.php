@extends('layouts.admin-app')

@section('title' , '|Footer Edit')

@section('content')
 {{ Form::model($footer,['route' => ['footer.update' , 1] , 'method' => 'PUT' ]) }}
     {{ Form::label('footer' , 'Edit Footer :', ['class' => ' col-md-12 well']) }}
    {{ Form::textarea('footer' , null , ['class' => 'form-control']) }}
    {{ Form::submit('Save' , ['class' => 'btn btn-success mb-5 mt-5 col-md-4']) }}
 {{ Form::close() }}
@endsection