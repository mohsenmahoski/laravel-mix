
    

    <!-- Item slider-->
<div class="container-fluid">

  <div class="row">
    <div class="col-xs-12  col-sm-12 col-md-12">
      <div class="carousel carousel-showmanymoveone slide" id="itemslider">
        <div class="carousel-inner">
            <div class="item">
              <div class="col-xs-12 col-sm-6 col-md-3 nbs-flexisel-item product-slide">
                <a class="product-s" href="#product-page_orginal" data-toggle = "tab" role="tab" aria-expanded="false"><img class="img-responsive center-block" src="{{ asset('/images/products/'.$product->orginal_img) }}"></a>
              </div>
            </div>
          @for($i=0;$i<count($images);$i++)
                                   
         @if($i == 0)
            <div class="item active">
              <div class="col-xs-12 col-sm-6 col-md-3 nbs-flexisel-item product-slide">
                <a class="product-s" href="#product-page{{ $i+2 }}" data-toggle = "tab" role="tab" aria-expanded="false"><img class="img-responsive center-block" src="{{ asset('/images/products/'.$images[$i]) }}"></a>
              </div>
            </div>
          @else
            <div class="item">
              <div class="col-xs-12 col-sm-6 col-md-3 nbs-flexisel-item product-slide">
                <a class="product-s" href="#product-page{{ $i+2 }}" data-toggle = "tab" role="tab" aria-expanded="false"><img class="img-responsive center-block" src="{{ asset('/images/products/'.$images[$i]) }}"></a>
              </div>
            </div>
          @endif
        @endfor
         
       

        </div>
        <div id="slider-control">
            <a class="nbs-flexisel-nav-left" href="#itemslider" data-slide="prev">
              <i class="material-icons">chevron_left</i>
            </a>
            <a class="nbs-flexisel-nav-right" href="#itemslider" data-slide="next">
                <i class="material-icons">chevron_right</i>
            </a>
         </div>
       
      </div>
    </div>
  </div>
</div>


    <script type="text/javascript">
        $(document).ready(function(){

      
        
        $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<4;i++) {
        itemToClone = itemToClone.next();

        if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
        }

        itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
        }
        });
        });
     
    
        </script>


 
 
 

