<div class="section">
  <div class="row">
    <div class="container-fluid">
          <div class="col-md-12 text-center">
          <h2 class="title title-black"><b>با اعتماد به ما موفقیت خود را تظمین کنید</b></h2>
           <div class="clearfix"></div>
            <p>برخی از مشتریان ما</p>
          </div>
          <div class="col-md-12 ">
              <div class="carousel slide" data-ride="carousel slide" data-type="multi" data-interval="7000" id="brandCarousel">
                <div class="carousel-inner">

                  <div class="item active">
                    <div class="col-md-2 col-sm-6 col-xs-12"><a href="#"><img src="{{ asset('images/theme/brands/00000001299.png') }}" class="img-responsive"></a></div>
                  </div>
                  <div class="item">
                    <div class="col-md-2 col-sm-6 col-xs-12"><a href="#"><img src="{{ asset('images/theme/brands/18.png') }}" class="img-responsive"></a></div>
                  </div>
                  <div class="item">
                    <div class="col-md-2 col-sm-6 col-xs-12"><a href="#"><img class="img-responsive" src="{{ asset('images/theme/brands/00000001495.png') }}"></a></div>
                  </div>
                 <div class="item">
                    <div class="col-md-2 col-sm-6 col-xs-12"><a href="#"><img class="img-responsive" src="{{ asset('images/theme/brands/Sweets-Candy-Company-logo-square.png') }}"></a></div>
                  </div>
                  <div class="item">
                    <div class="col-md-2 col-sm-6 col-xs-12"><a href="#"><img class="img-responsive" src="{{ asset('images/theme/brands/kodi-logo_thumb800.png') }}"></a></div>
                  </div>
                  <div class="item">
                    <div class="col-md-2 col-sm-6 col-xs-12"><a href="#"><img class="img-responsive" src="{{ asset('images/theme/brands/fanologysocial.png') }}"></a></div>
                  </div>
                  
                 
                 
                </div>
               
              </div>
          </div>
    </div>
  </div>
</div>
<script type="text/javascript">
  $(document).ready(function(){
  $('.carousel[data-type="multi"] .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });
  $('#brandCarousel').carousel()
  });
</script>
