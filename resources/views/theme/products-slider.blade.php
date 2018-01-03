
        <div class="col-md-12 mb-20">
            <div id="carousel-product-generics" class="carousel slide" data-ride="carousel">
                <!-- Wrapper for slides -->
            <div class="row">
            <p class="text-right pull-right carsoul-title"><i class="material-icons">card_giftcard</i>جدیدترین محصولات</p>
            <a class="btn btn-primary btn-xs pull-left" href="#carousel-product-generics" role="button" data-slide="prev">
                   <i class="material-icons">first_page</i>
                </a>
                <a class="btn btn-primary btn-xs pull-left" href="#carousel-product-generics" role="button" data-slide="next">
                   <i class="material-icons">last_page</i>
                </a>
                <hr>
            </div>
                
                <div class="carousel-inner" role="listbox">
                   @php 
                     $i = 4;
                     $first = true;
                   @endphp

                  @foreach($newproducts as $product)
                        @if($i == 4) 
                          @if($first == true)
                            <div class="item active">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-4 col-md-3 ">
                                        <div class="tcb-product-item">
                                            <div class="tcb-product-photo">
                                                <a href="{{ route('product.show' , $product->slug) }}"><img  src="{{ asset('/images/products/'.$product->orginal_img) }}" alt="Rounded Image" class="banner img-rounded img-responsive"> </a>
                                            </div>
                                            <div class="tcb-product-info">
                                                <div class="tcb-product-title">
                                                    <h6 class="text-right"><a href="{{ route('product.show' , $product->slug) }}">{{ $product->name }}</a></h6></div>
                                                <div class="tcb-product-rating text-right">
                                                    <i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i>
                                                    
                                                </div>
                                                <div class="tcb-hline"></div>
                                                <div class="tcb-product-price text-right">
                                                   <div class="row text-right "> <p class="price"> {{ $product->price }}</p></div>
                                                   <button class="btn btn-danger btn-fab btn-fab-mini btn-round">
                                                        <i class="material-icons">favorite</i>
                                                        <div class="ripple-container"></div>
                                                    </button>
                                                    <button class="btn btn-success">
                                                        <i class="material-icons">shopping_basket</i> خرید
                                                        <div class="ripple-container"></div>
                                                   </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    @php 
                                       $first = false;
                                     @endphp
                          @else
                               <div class="item">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-4 col-md-3 ">
                                        <div class="tcb-product-item">
                                            <div class="tcb-product-photo">
                                                <a href="{{ route('product.show' , $product->slug) }}"><img  src="{{ asset('/images/products/'.$product->orginal_img) }}" alt="Rounded Image" class="banner img-rounded img-responsive"> </a>
                                            </div>
                                            <div class="tcb-product-info">
                                                <div class="tcb-product-title">
                                                    <h6 class="text-right"><a href="{{ route('product.show' , $product->slug) }}">{{ $product->name }}</a></h6></div>
                                                <div class="tcb-product-rating text-right">
                                                    <i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i>
                                                    
                                                </div>
                                                <div class="tcb-hline"></div>
                                                <div class="tcb-product-price text-right">
                                                   <div class="row text-right "> <p class="price"> {{ $product->price }}</p></div>
                                                   <button class="btn btn-danger btn-fab btn-fab-mini btn-round">
                                                        <i class="material-icons">favorite</i>
                                                        <div class="ripple-container"></div>
                                                    </button>
                                                    <button class="btn btn-success">
                                                        <i class="material-icons">shopping_basket</i> خرید
                                                        <div class="ripple-container"></div>
                                                   </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                          @endif

                        @elseif( ($i < 4) && ($i != 1) )
                                    <div class="col-xs-12 col-sm-4 col-md-3 ">
                                        <div class="tcb-product-item">
                                            <div class="tcb-product-photo">
                                                <a href="{{ route('product.show' , $product->slug) }}"><img  src="{{ asset('/images/products/'.$product->orginal_img) }}" alt="Rounded Image" class="banner img-rounded img-responsive"> </a>
                                            </div>
                                            <div class="tcb-product-info">
                                                <div class="tcb-product-title">
                                                    <h6 class="text-right"><a href="{{ route('product.show' , $product->slug) }}">{{ $product->name }}</a></h6></div>
                                                <div class="tcb-product-rating text-right">
                                                    <i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i>
                                                    
                                                </div>
                                                <div class="tcb-hline"></div>
                                                <div class="tcb-product-price text-right">
                                                   <div class="row text-right "> <p class="price"> {{ $product->price }}</p></div>
                                                   <button class="btn btn-danger btn-fab btn-fab-mini btn-round">
                                                        <i class="material-icons">favorite</i>
                                                        <div class="ripple-container"></div>
                                                    </button>
                                                    <button class="btn btn-success">
                                                        <i class="material-icons">shopping_basket</i> خرید
                                                        <div class="ripple-container"></div>
                                                   </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                        @elseif($i == 1)
                                    <div class="col-xs-12 col-sm-4 col-md-3 ">
                                        <div class="tcb-product-item">
                                            <div class="tcb-product-photo">
                                                <a href="{{ route('product.show' , $product->slug) }}"><img  src="{{ asset('/images/products/'.$product->orginal_img) }}" alt="Rounded Image" class="banner img-rounded img-responsive"> </a>
                                            </div>
                                            <div class="tcb-product-info">
                                                <div class="tcb-product-title">
                                                    <h6 class="text-right"><a href="{{ route('product.show' , $product->slug) }}">{{ $product->name }}</a></h6></div>
                                                <div class="tcb-product-rating text-right">
                                                    <i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i>
                                                    
                                                </div>
                                                <div class="tcb-hline"></div>
                                                <div class="tcb-product-price text-right">
                                                   <div class="row text-right "> <p class="price"> {{ $product->price }}</p></div>
                                                   <button class="btn btn-danger btn-fab btn-fab-mini btn-round">
                                                        <i class="material-icons">favorite</i>
                                                        <div class="ripple-container"></div>
                                                    </button>
                                                    <button class="btn btn-success">
                                                        <i class="material-icons">shopping_basket</i> خرید
                                                        <div class="ripple-container"></div>
                                                   </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @php 
                              $i = 5;
                            @endphp
                        @endif
                        @php 
                          --$i;
                        @endphp
                  @endforeach

                </div>
                <!-- Controls -->
                
            </div>
        </div>


