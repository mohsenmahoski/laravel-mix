
@extends('main')
  
@section('title','| Homepage')

    <!-- Default Bootstrap Navbar -->
    
        <!-- /.navbar-collapse -->
     @section('stylesheet')
    
     @endsection
      <!-- /.container-fluid -->
  @section('content')

    

      <div class="row">
        <div class="container-fluid">
         
            <div id="myCarousel" class="carousel slide col-sm-auto" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      @php ($i=0)
      @foreach($slider as $slide)
        @if($i==0)
         <li data-target="#myCarousel" data-slide-to="{{ $i }}" class="active"></li>
        @else
         <li data-target="#myCarousel" data-slide-to="{{ $i }}"></li>
        @endif
      @php(++$i)
      @endforeach

    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
        @php ($i=0)
        @foreach($slider as $slide)
          @if($i==0)
          @php($i=1)
          <div class="item active">
            <img class="center-block" src="{{ asset('images\slider\\'.$slide->image) }}" alt="Los Angeles" style="width:1200px;" >
          </div>
          @else
          <div class="item">
            <img class="center-block" src="{{ asset('images\slider\\'.$slide->image) }}" alt="Chicago" style="width:1200px;" >
          </div>
          @endif
        @endforeach
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
        
        </div>
      </div>
      <!-- end of header .row -->
    <div class="row">
      <div class="col-md-12 well">
        {{ $ip }}
      </div>
    </div>
      <div class="row">
        
        <div class="col-md-8 mt-5">
        <blockquote><div class="rtl"><h3>جدید ترین خبرها</h3></div></blockquote><hr>
        @foreach($posts as $post)
          <div class="">
            <img class="img-responsive img-thumbnail" src="{{ asset('images/posts/'.$post->image) }}">
            <h3 class="text-right">{{ $post->title }}</h3>
            <p class="rtl">{!! strip_tags(html_entity_decode($post->body)) !!}</p>
            <a href="{{ route('blog.single' , $post->slug) }}" class="btn btn-primary">ادامه مطلب</a>
          </div> 
          <hr>
        @endforeach
         
        </div>

        <div class="col-md-3 col-md-offset-1">
          <h2>Sidebar</h2>
        </div>
      </div>

    
   @endsection 

   