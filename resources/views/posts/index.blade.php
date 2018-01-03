@extends('layouts.admin-app')

@section('title','| All Post')

@section('content')
  <div class="row">
    <div class="col-md-12">
      <div class="col-md-12 well">
         <div class="col-md-7">
        	<h4><b>All Posts:</b></h4>
         </div>
         <div class="col-md-5 text-right">
         	 {{ Html::LinkRoute('posts.create','Create New Post',array(''),array('class' => 'btn btn-primary')) }}
         </div>
      </div>
    </div>
   <div class="col-md-12"><hr></div>
  </div>
  <div class="row">
  	<div class="col-md-12">
  		<table class="table">
  			<thead>
  				<th>#</th>
  				<th>Title: </th>
          <th>Url:</th>
  				<th>Body</th>
  				<th>Created At</th>
  				<th></th>
  			</thead>
  			<tbody>
                 
  				@foreach($posts as $post )
  				  <tr>
  				  	<td>{{ $post->id }}</td>
  				  	<td>{{ $post->title }}</td>
              <td><a target="blank" href='{{ '/blog/'.$post->slug }}' >{{ $post->slug }}<a/></td>
  				  	<td>
  				  	{!! 
                strlen(strip_tags(html_entity_decode($post->body))) > 50 ? substr(strip_tags(html_entity_decode($post->body)),0,50).'...' : strip_tags(html_entity_decode($post->body))
               !!}
  				  	 </td>
  				  	<td>{{ date('M j,Y',strtotime($post->created_at)) }}</td>
  				  	<td>
  				  	{{ Html::LinkRoute('posts.show','View',array($post->id),array('class' => 'btn btn-primary btn-sm')) }}
  				  	{{ Html::LinkRoute('posts.edit','Edit',array($post->id),array('class' => 'btn btn-success btn-sm')) }}
  				  	</td>
  				  </tr>
  				@endforeach
  			</tbody>
  		</table>
      <div class="text-center">
        {!! $posts->links() !!}
      </div>
  	</div>
  </div>
@endsection