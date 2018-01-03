@extends('layouts.admin-app')

@section('title |Post View')

@section('content')
<div class="row">
<div class="col-md-4">
    <div class="well">
      <dl class="dl-horizontal">
        <label>
          Url Slug:
        </label>
        <p>
          <a href='{{ route('blog.single' , $post->slug) }}'>{{ $post->slug }}</a>
        </p>
      </dl>
      <dl class="dl-horizontal">
        <label>
          Created At:
        </label>
        <p>
          {{ date('M j, Y h:ia',strtotime($post->created_at)) }}
        </p>
      </dl>
      <dl class="dl-horizontal">
          <label>
          Last Updated At:
        </label>
        <p>
          {{ date('M j, Y h:ia',strtotime($post->updated_at)) }}
        </p>
      </dl>
      <dl class="dl-horizontal">
          <label>
          Category:
        </label>
        <p>
       
          {{ Html::LinkRoute('categories.show', $post->category->name ,array($post->category->id),['class' => '']) }}
        </p>
      </dl>
      <hr>
      <div class="row">
         <div class="col-sm-6">
         {!! Html::LinkRoute('posts.edit','Edit',array($post->id),array('class' => 'btn btn-primary btn-block')) !!}
          
         </div>
         <div class="col-sm-6">
         {!! Form::open(['route'=>['posts.destroy',$post->id],'method' => 'DELETE']) !!}
          {!! Form::submit('Delete',['class' => 'btn btn-danger btn-block']) !!}
          {!! Form::close() !!}
         </div>
     </div>
     <div class="row">
       <div class="col-md-12">
         {{ Html::linkRoute('posts.index','<< All Posts',[],['class' => 'btn btn-default btn-block bottom-btn']) }}
       </div>
    </div>
</div>
 </div>
 <div class="col-md-8">
     @if($post->image != null)
     <img src="{{ asset('images/posts/'.$post->image) }}" class="img-responsive img-thumbnail">
     @endif
     <h1> {{ $post->title }} </h1>
     <p class="lead"> {!! html_entity_decode($post->body) !!}</p>
     <hr>
     <div class="tags alert alert-info">
       <h5>Tags:</h5>
         @foreach($post->tags as $tag)
           <span class="label label-default">{{ $tag->name }}</span>
         @endforeach
     </div>
  </div>
 
   <div class="col-md-8 pull-right">
     <div class="col-md-12 alert alert-warning mt-10">
        <h3>{{ $post->comments->count() }}  Comments About This Post:</h3>
         <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Comment</th>
                <th>#</th>
              </tr>
            </thead>
        @foreach($post->comments as $comment)
        <div class="col-md-12">
         
            <tbody>
              <tr>
                <td> {{$comment->name}}  </td>
                <td> {{$comment->email}} </td>
                <td> {{$comment->comment}} </td>
                <td >

                   <a href="{{ route('comment.edit' , $comment->id) }}" class="btn btn-xs btn-primary btn-block"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                   {{ Form::open(['route' => ['comment.destroy' , $comment->id] , 'method' => 'DELETE']) }} 
                   {{ Form::submit('Delete' , ['class' => 'btn glyphicon glyphicon-trash btn btn-xs btn-danger btn-block']) }}
                   
                   {{ Form::close() }}
                  
                   <hr>
                </td>
              </tr>
              <tr>
                   
                  
                   
                 
              
             
            </tbody>
          
            
        @endforeach 
        </table>
     </div>
   </div>
  
  
  
  	 
   
 </div>
@endsection