
        <div class="col-md-12 mb-20">
            <div id="carousel-product-generic" class="carousel slide" data-ride="carousel">
                <!-- Wrapper for slides -->
            <div class="row">
            <p class="text-right pull-right carsoul-title"><i class="material-icons">grade</i>پیشنهادات ویژه</p>
            <a class="btn btn-primary btn-xs pull-left" href="#carousel-product-generic" role="button" data-slide="prev">
                   <i class="material-icons">first_page</i>
                </a>
                <a class="btn btn-primary btn-xs pull-left" href="#carousel-product-generic" role="button" data-slide="next">
                   <i class="material-icons">last_page</i>
                </a>
                <hr>
            </div>
                
                <div class="carousel-inner" role="listbox">
                @php $first = true; @endphp
                    @foreach($dealproducts as $product)
                        @if( $first == true )
                          <div class="item active">
                          @php $first = false; @endphp
                        @else
                          <div class="item">
                        @endif
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 ">
                                    <div class="tcb-product-item">
                                        <div class="tcb-deal-product-photo col-md-6 col-xs-12 col-sm-6">
                                            <a href="{{ route( 'product.show' , $product->slug ) }}"><img  src="{{ asset('images/products/'.$product->orginal_img) }}" alt="Rounded Image" class="img-rounded img-responsive"> </a>
                                        </div>
                                        <div class="tcb-product-info col-md-6 col-sm-6 col-xs-12">
                                                <div class="tcb-product-title">
                                                    <h4 class="text-right"><a href="{{ route( 'product.show' , $product->slug ) }}">{{ $product->name }}</a></h4>
                                                </div>
                                                <div class="tcb-product-rating text-right">
                                                    <i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i>
                                                    
                                                </div>
                                                <div class="tcb-hline"></div>
                                                <div class="tcb-product-price text-right">
                                                       <div class="row text-right "> 
                                                          <p class="price"> {{ $product->special_sale }}ریال
                                                              <small>
                                                               <b class="old-price">{{ $product->price }}</b>
                                                              </small>
                                                           </p>
                                                       </div>
                                                       <button class="btn btn-danger btn-fab btn-fab-mini btn-round">
                                                            <i class="material-icons">favorite</i>
                                                            <div class="ripple-container"></div>
                                                        </button>
                                                        <button class="btn btn-success">
                                                            <i class="material-icons">shopping_basket</i> خرید
                                                            <div class="ripple-container"></div>
                                                       </button>
                                                       <div class="col-md-12">
                                                           <small>شرح محصول</small>
                                                           <p>
                                                                {{ $product->descripion }}
                                                           </p>
                                                       </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <!-- Controls -->
                
            </div>
        </div>


