<nav class="navbar navbar-default">
        <div class="container-fluid">
             <div class="collapse navbar-collapse menu" id="example-navbar">
                                     <ul class="nav navbar-nav pull-right">
                                            @foreach( $routes as $r )
                                              <li class="dropdown">
                                                  <a href="{{ route($r['route']) }}" >{{ $r['name'] }}</a> 
                                              </li>
                                            @endforeach
                                      </ul>
                                   <div class="col-md-3 search pull-left">
                                       
                                       {{ Form::open(['route'=>'search' ]) }}
                                               <div class="col-md-12 inner"> 
                                                      {{ Form::text('search' , null , ['class'=>'form-control text-right','id'=>'search','onkeyup'=>'showHint(this.value)' , 'placeholder'=>'جست و جو ...']) }}
                                                </div>
                                           
                                                <button type="submit" class="pull-right btn btn-search btn-fab btn-fab-mini btn-round">
                                                     <i class="material-icons">search</i>
                                                  <div class="ripple-container"></div>
                                                </button>
                                               
                                       {{ Form::close() }}
                                   </div>
                                  
                                     <div class="hint well text-right" id="txtHint">         
                                     </div>          
             </div>
        </div>
        <script>
              function showHint(str) {
                var xhttp;
                if (str.length == 0) { 
                  document.getElementById("txtHint").innerHTML = "";
                  return;
                }
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("txtHint").style.display = "block";
                    document.getElementById("txtHint").style.opacity = 1; 
                    var result='';

                    var obJ = JSON.parse(this.responseText);
                    
                    if (obJ.length != 0 ) {  
                    obJ = JSON.parse(obJ); 
                       result += '<div class="container-fluid" ><div class="col-md-12" >';
                      for(x in obJ){
                        
                              result += '<div class="col-md-3 pull-right"><a href="/blog/'+ obJ[x].slug +'" ><img class="img-thumbnail" src="http://localhost:8000/images/posts/'+obJ[x].image+'"><h4 class="text-center" >'+ obJ[x].title +'</h4></a></div>';
                     }
                      result += "</div></div>";
                      document.getElementById("txtHint").innerHTML = result;
                    }else{
                      document.getElementById("txtHint").innerHTML = 'مطلبی در این مورد پیدا نشد...';
                    }
                   
                  }
                };

                xhttp.open("GET", "http://localhost:8000/gethint/"+str, true);
                xhttp.send();   
              } 
              document.addEventListener('click', function(){
                    var search = document.getElementById('txtHint');
                    search.style.display = "none";
               });
        </script>
       
</nav>
