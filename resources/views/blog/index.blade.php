@extends('main')

@section('title','Blog')
@section('header')
     <div class="header header-filter" style="background-image: url({{ asset('/images/theme/typing.jpg') }});">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="brand">
                        <h1>آخرین خبرها</h1>
                        <div class="separator separator-danger">✻</div>
                        <h3 class="text-center">آخرین خبرهای دنیای فناوری اطلاعات</h3>
                        
                    </div>
                </div>
            </div>

        </div>
     </div>
@endsection
@section('content')

<div class="section-basic">
  <div class="row">
        <div class="container-fluid">
                 
              @foreach($posts as $post)



                          <div class="col-md-4 mb-10">
                                      <div class="card">
                                       <a href="{{ route('blog.single' , $post->slug) }}">
                                          <div class="image" style="background-image: url('{{ asset("/images/posts/".$post->image) }}');); background-position: center center; background-size: cover;">
                                             
                                              <div class="filter filter-white">
                                                  <button type="button" class="blogs btn btn-sm btn-primary btn-round btn-fill">
                                                      <i class="material-icons">keyboard_backspace</i> ادامه مطلب
                                                  </button>
                                              </div>
                                          </div>
                                          <div class="content">
                                          <div class="row pad-r-10">
                                            <small class="pull-right text-muted">تاریخ انتشار: {{ date('M J,Y',strtotime($post->created_at)) }}
                                            </small>
                                          </div>
                                                <h3 class="blog-title text-right">
                                                    <b class="pull-right">
                                                      {{ strlen($post->title) > 50 ? substr($post->title,0,50).'...' : $post->title }}
                                                    </b> 
                                                </h3>
                                                   @php
                                                     $desc = preg_replace('/\s\s+/', ' ', $post->body);
                                                     $desc = strip_tags($desc);
                                                    if ( strlen($desc) > 200) {
                                                      $desc = substr($desc,0,strpos($desc,' ' , 200) );
                                                    }
                                                   @endphp
                                              
                                               
                                                  <p class="blog-desc text-right">
                                                      {!! $desc.'...' !!}
                                                  </p>
                                              
                                              <a class="text-info" href="#">
                                                 <small>{!! $post->category->name !!}</small>
                                              </a>
                                               <div class="footer mt-10">
                                                  <div class="author">
                                                      <a class="card-link" href="#">
                                                         <img src="{{asset('/images/theme/avatar/face-4.jpg')}}" alt="..." class="avatar">
                                                         <span> Jayz </span>
                                                      </a>
                                                  </div>
                                                   <div class="stats pull-right">
                                                       <a class="card-link" href="#">
                                                          <i class="fa fa-heart"></i> 92
                                                       </a>
                                                  </div>
                                                  <div class="stats pull-right">
                                                      <a class="card-link" href="#">
                                                          <i class="fa fa-comment"></i> 41
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                          </a>
                                      </div> <!-- end card -->
                          </div>
               
              @endforeach
        </div>
  </div>
  <div class="row">
       <div class="text-center">{{ $posts->links() }}</div>
  </div>
</div>
@endsection



            
        
    





























	 
