<section>
	<div class="row">
		<div class="container">
		<div class="col-md-12">
                <h2 class="block-title text-right">آخرین خبرها</h2>
        </div>
		@foreach($posts as $post)
			 <div class="col-md-4 mb-20">
                      <div class="card">
                           <a  href="{{ route('blog.single',$post->slug) }}" class="">
                                      <div class="image" style="background-image: url('{{asset("/images/posts/".$post->image) }}');background-size: cover;">
                                         
                                          <div class="filter filter-white">
                                              <button   class="btn btn-primary btn-round btn-fill">
                                                  <i class="material-icons">keyboard_backspace</i> ادامه مطلب
                                              </button>
                                          </div>
                                      </div>
                                      <div class="content">
                                          <h3 class="blog-title text-right">
                                                        <b>
                                                         {{ $post->title }}
                                                        </b> 
                                          </h3>
                                          <p class="category pull-right label label-info">
                                          {{ $post->category->name }}</p>
             
                                                <div class="clearfix"></div>                            
                                          
                                              <h4 class="blog-desc text-right">طراحی وب سایت شرکتی با استفاده از ورد پرس شامل معرفی تجارت شما و امکان ارتباط با مشتری و ...</h4>
                                          
                                           <div class="footer">
                                              <div class="author">
                                                  
                                                     <img src="{{asset('/images/theme/avatar/face-4.jpg')}}" alt="..." class="avatar">
                                                     <span> Jayz </span>
                                                  
                                              </div>
                                               <div class="stats pull-right">
                                                   
                                                      <i class="material-icons"></i> 92
                                                   
                                              </div>
                                              <div class="stats pull-right">
                                                  
                                                      <i class="fa fa-comment"></i> 41
                                                  
                                              </div>
                                          </div>
                                      </div>
                                      </a>
                                  </div> <!-- end card -->
            </div>
        @endforeach
		</div>
	</div>
</section>