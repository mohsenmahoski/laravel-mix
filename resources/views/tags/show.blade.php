@extends('layouts.admin-app')

@section('title' , "| $tag->name Tag")


@section('content')
<div class="row">
	<div class="col-md-12">
		<div class="col-md-6 well">
		  <h1 class="col-md-12">{{ $tag->name }} <small>{{ $tag->posts()->count().' Posts' }}</small></h1>
		  
		  <div class="col-md-6 bottom-btn">
		  	<a href="{{ route('tags.edit',$tag->id) }}" class="btn btn-primary btn-block pull-right">Edit</a>
		  </div>
		  	<div class="col-md-6 bottom-btn">
		  	{{ Form::open(['route' => ['tags.destroy' , $tag->id] , 'method' => 'DELETE']) }}
		  	  {{ Form::submit('DELETE',['class' => 'btn btn-danger btn-block']) }}
		  	{{ Form::close() }}
		  	</div>
		</div>
	</div> 

	  
	  
	 <hr>
</div>
<div class="row">
	<div class="col-md-12">
		<table class="table">
			<thead>
				<th>#</th>
				<th>title</th>
                <th>all tags</th>
                <th></th>
			</thead>
			<tbody>
			@foreach($tag->posts as $post)
				<tr>
					<td>{{ $post->id }}</td>
					<td>{{ $post->title }}</td>
					<td>
						@foreach($post->tags as $t)
						  <span class="label label-default">
						  	{{ $t->name }}
						  </span>
						@endforeach
					</td>
					<td>
						<a href="{{ route('posts.show' , $post->id ) }}" class="btn btn-primary btn-sm">View</a>
					</td>
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
</div>
@endsection