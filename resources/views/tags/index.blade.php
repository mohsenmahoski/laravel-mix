@extends('layouts.admin-app')
@section('title' , '| Tags')
@section('content')
  <div class="row">
  	<div class="col-md-8">
  	<h4 class="well"><b>All Tags</b></h2>
  		<table class="table">
  			<thead>
  				<tr>
  					<th>#</th>
  					<th>Name</th>
  				</tr>
  			</thead>
  			<tbody>
  			@foreach($tags as $tag)
  				<tr>
  					<td>{{ $tag->id }}</td>
  					<td><a href="{{ route('tags.show' , $tag->id) }}">{{ $tag->name }}</a></td>
  				</tr>
  			@endforeach
  			</tbody>
  		</table>
  	</div>
  	<div class="col-md-3">
  	 <div class="well">
  		<h5>Create New Tag</h5>
  		{{ Form::open(['route' => 'tags.store']) }}
  		  {{ Form::label('name' , 'Name: ') }}
  		  {{ Form::text('name' , null , ['class' => 'form-control']) }}
  		  {{ Form::submit('Create' , ['class' => 'btn btn-primary btn-block bottom-btn']) }}
  		{{ Form::close() }}
  	 </div>
  	</div>
  </div>
@endsection
