<div class="section section-components section-dark">
		<div class="row">
		  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
		  	<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
				<div  class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
					<img id="floatimages" class="components-macbook" src="{{ asset('images/theme/laptop-basic.png') }}" alt="">
					<img class="table1" src="{{ asset('images/theme/table.jpg') }}" alt="">
					<img class="share-btn-img" src="{{ asset('images/theme/share-btn.png') }}" alt="">
					<img class="coloured-card-btn-img" src="{{ asset('images/theme/coloured-card-with-btn.png') }}" alt="">
					<img class="coloured-card-img" src="{{ asset('images/theme/coloured-card.png') }}" alt="">
					<img class="social-img" src="{{ asset('images/theme/social-row.png') }}" alt="">
					<img class="pin-btn-img" src="{{ asset('images/theme/pin-btn.png') }}" alt="">
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
				<div class="container-fluid basic-container">
					<h3 class="title">طراحی المان های وب سایت</h3>
					<h6 class="category text-right withe">طراحی اجزای تشکیل دهنده وب سایت با استفاده از Bootstrap 4</h6>
					<h5 class="description text-justify">برای داشتن وب سایتی منحصر به فرد با دیزاین خاص باید المان های وب سایت مانند دکمه های وب سایت ، منو و ... طراحی شوند.همواره استفاده از Bootstrap در طراحی وب سایت باعث می شود طراحی وب سایت استاندارد و چشم نواز شود.ما با تغییر و شخصی سازی Bootstrap دیزاین و طراحی خاص برای وب سایت شما فراهم می کنیم .</h5>
				</div>
			</div>
		  </div>
			
		</div>
	</div>
	<script type="text/javascript">
	document.getElementById("floatimages").onload = function() {change()}; 
	function change(){
	 	var obj1 =  document.getElementsByClassName("table1");
	 	var obj2 =  document.getElementsByClassName("share-btn-img");
	 	var obj3 =  document.getElementsByClassName("coloured-card-img");
	 	var obj4 =  document.getElementsByClassName("social-img");
	 	var obj5 =  document.getElementsByClassName("coloured-card-btn-img");
	 	var obj6=  document.getElementsByClassName("pin-btn-img");
        
         var left = 300;
         var left2 = 50;
         var left3 = 20;
         var left4 = 140;
         var left5 = 150;
         var left6 = 350;

        
         intfront = setInterval( front , 60);
         intfront2 = setInterval( front2 , 60);
         intfront3 = setInterval( front3 , 60);
         intfront4 = setInterval( front4 , 60);
         intfront5 = setInterval( front5 , 60);
         intfront6 = setInterval( front6 , 60);


         function front(){
	         	    
	                left = left+1 ; 
	                obj1[0].style.left = left+'px';
	                if ( left > 400 ){
                      
                       clearInterval(intfront);
                       intback = setInterval( back , 60)
	                }
	         
         }
        function back(){
	         	
	                left = left-1 ; 
	                obj1[0].style.left = left+'px';
	                if ( left < 300 ){
                      
                       clearInterval(intback);
                       intfront = setInterval( front , 60)
	                }
	         
         }

         function front2(){
	         	    
	                left2 = left2+1 ; 
	                obj2[0].style.left = left2+'px';
	                if ( left2 > 400 ){
                      
                       clearInterval(intfront2);
                       intback2 = setInterval( back2 , 60)
	                }
	         
         }
        function back2(){
	         	
	                left2 = left2-1 ; 
	                obj2[0].style.left = left2+'px';
	                if ( left2 < 80 ){
                      
                       clearInterval(intback2);
                       intfront2 = setInterval( front2 , 30)
	                }
	         
         }
	 	

	 	 function front3(){
	         	    
	                left3 = left3+1 ; 
	                obj3[0].style.left = left3+'px';
	                if ( left3 > 100 ){
                      
                       clearInterval(intfront3);
                       intback3 = setInterval( back3 , 40)
	                }
	         
         }
        function back3(){
	         	
	                left3 = left3-1 ; 
	                obj3[0].style.left = left3+'px';
	                if ( left3 < 50 ){
                      
                       clearInterval(intback3);
                       intfront3 = setInterval( front3 , 60)
	                }
	         
         }

         function front4(){
	         	    
	                left4 = left4+1 ; 
	                obj4[0].style.left = left4+'px';
	                if ( left4 > 200 ){
                      
                       clearInterval(intfront4);
                       intback4 = setInterval( back4 , 70)
	                }
	         
         }
        function back4(){
	         	
	                left4 = left4-1 ; 
	                obj4[0].style.left = left4+'px';
	                if ( left4 < 140 ){
                      
                       clearInterval(intback4);
                       intfront4 = setInterval( front4 , 70)
	                }
	         
         }
         function front5(){
	         	    
	                left5 = left5+1 ; 
	                obj5[0].style.left = left5+'px';
	                if ( left5 > 180 ){
                      
                       clearInterval(intfront5);
                       intback5 = setInterval( back5 , 65)
	                }
	         
         }
        function back5(){
	         	
	                left5 = left5-1 ; 
	                obj5[0].style.left = left5+'px';
	                if ( left5 < 140 ){
                      
                       clearInterval(intback5);
                       intfront5 = setInterval( front5 , 65)
	                }
	         
         }
         function front6(){
	         	    
	                left6 = left6+1 ; 
	                obj6[0].style.left = left6+'px';
	                if ( left6 > 450 ){
                      
                       clearInterval(intfront6);
                       intback6 = setInterval( back6 , 65)
	                }
	         
         }
        function back6(){
	         	
	                left6 = left6-1 ; 
	                obj6[0].style.left = left6+'px';
	                if ( left6 < 350 ){
                      
                       clearInterval(intback6);
                       intfront6 = setInterval( front6 , 65)
	                }
	         
         }
	 }
	
	 
		
	</script>