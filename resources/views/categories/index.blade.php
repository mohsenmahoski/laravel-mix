@extends('layouts.admin-app')
@section('title' , '| Category')
@section('content')
  <div class="row">
  	<div class="col-md-8">
  	<div class="well">Categories</div>
  		<table class="table">
  			<thead>
  				<tr>
  					<th>#</th>
  					<th>Name</th>
            <th class="text-center">Action</th>
  				</tr>
  			</thead>
  			<tbody>
  			@foreach($categories as $category)
  				<tr>
  					<td>{{ $category->id }}</td>
  					<td>{{ $category->name }}</td>
            <td class="text-center">
             <div class="btn-group"> 
              {{ Form::open(['route' => ['categories.destroy' , $category->id] , 'method' => 'DELETE', 'class' => 'pull-right'] ) }}
              {{ Form::submit('Delete' , ['class' => 'btn btn-danger btn-sm']) }}
              {{ Form::close() }}
              {{ Html::linkRoute('categories.edit', 'Edit', array($category->id), array('class' => 'mr-5 btn btn-sm btn-success pull-right')) }}
             </div>
            </td>
           
  				</tr>
  			@endforeach
  			</tbody>
  		</table>
  	</div>
  	<div class="col-md-3">
  	 <div class="well">
  		<h5>Create New Category</h5>
  		{{ Form::open(['route' => 'categories.store']) }}
  		  {{ Form::label('name' , 'Name: ') }}
  		  {{ Form::text('name' , null , ['class' => 'form-control']) }}
  		  {{ Form::submit('Create' , ['class' => 'btn btn-primary btn-block bottom-btn']) }}
  		{{ Form::close() }}
  	 </div>
  	</div>
  </div>
@endsection
