@extends('layouts.admin-app')

@section('content')
   <section  class="sidebar">
   	 <div class="row">
   	 	<div class="container-fluid">
   	 	<div class="row">
   	 	    <div class="container-fluid">
	   	 		<div class="well col-md-12">
	   	 			<button class="btn btn-success pull-right" id="addcat" >افزودن دسته بندی</button>
	   	 			<div class="col-md-6 rtl" id="category-form">
	   	 				
	   	 			</div>
	   	 		</div>
   	 	    </div>
   	 	</div>
   	 	<div class="col-md-12">
   	 	 <div class="col-md-8 col-sm-12 pull-right">
	   	 	 <ul class="sidebar-menu rtl procat" id="allcats" >
		   	 		@foreach($cats as $cat)
		   	 		   @if($cat->level == 1)
			   	 		  <li class="treeview btn-primary btn-block active">
				   	 		            <a href="#" class="primary-link category"><i class="fa fa-plus"></i> <span>{{$cat->name}}</span>
	          							</a>
								        <ul class="treeview-menu">
						   	 		        @foreach($cats as $cat2)
							   	 		         @if(($cat2->level == 2)&&($cat2->parent==$cat->id))
								   	 		         
								   	 		         	<li class="treeview btn-primary btn-block mt-10 sub2 active">
									   	 		         	 <a href="#" class="primary-link category"><i class="fa fa-plus"></i><span>{{$cat2->name}}</span>
		          							                 </a>
								   	 		            
								   	 		        
											   	 		      <ul class="treeview-menu">
											   	 		          @foreach($cats as $cat3 )
												   	 		         @if(($cat3->level == 3)&&($cat3->parent==$cat2->id))
													   	 		       
														   	 		       <li class="treeview btn-primary btn-block mt-10 sub3 ">
														   	 		          <a href="#" class="primary-link category"><span>{{$cat3->name}}</span>
														   	 		          </a>
														   	 		          <div class="category-edit">
															   	 		            <a href="#" data-namecat ="{{ $cat3->name }}" data-levelcat="{{$cat3->level}}" data-idcat="{{$cat3->id}}" id="editcat" class="btn btn-success btn-xs mt-5"><i class="fa fa-pencil-square-o"  ></i> </a>
															   	 		           <a href="#" data-namecat ="{{ $cat3->name }}" data-levelcat="{{$cat3->level}}" data-idcat="{{$cat3->id}}" id="deletecat" class="btn btn-danger btn-xs mt-5"><i class="fa fa-trash"  ></i> </a>
														   	 		          </div>
														   	 		       </li> 
														   	 		    
												   	 		         @endif
											   	 		         @endforeach
											   	 		     </ul>
											   	 		     <div class="category-edit">
										   	 		            <a href="#" data-namecat ="{{ $cat2->name }}" data-levelcat="{{$cat2->level}}" data-idcat="{{$cat2->id}}" id="editcat" class="btn btn-success btn-xs mt-5"><i class="fa fa-pencil-square-o"  ></i>
										   	 		            <a href="#" data-namecat ="{{ $cat2->name }}" data-levelcat="{{$cat2->level}}" data-idcat="{{$cat2->id}}" id="deletecat" class="btn btn-danger btn-xs mt-5"><i class="fa fa-trash"  ></i> </a>
									   	 		            </div>
								   	 		            </li>
							   	 		         @endif		   	 		  
							   	 		    @endforeach
				   	 		            </ul>
				   	 		            <div class="category-edit">
					   	 		            <a href="#" data-namecat ="{{ $cat->name }}" data-levelcat="{{$cat->level}}" data-idcat="{{$cat->id}}" id="editcat" class="btn btn-success btn-xs mt-5"><i class="fa fa-pencil-square-o"  ></i>
					   	 		            <a href="#" data-namecat ="{{ $cat->name }}" data-levelcat="{{$cat->level}}" data-idcat="{{$cat->id}}" id="deletecat" class="btn btn-danger btn-xs mt-5"><i class="fa fa-trash"  ></i> </a>
				   	 		            </div>
		   	 		      </li>
		   	 		     
		   	 		    @endif
		   	 		@endforeach
	   	 	 </ul>
   	 	 </div>
   	 	  
   	 	</div>
   	 	  
   	 	</div>
   	 </div>
   </section>
  
 <div id="editform" class="editform" ></div>
@endsection

@section('scripts')
 <script type="text/javascript">

			function edit_form(obj){
				
                 
				 var name = obj.dataset.namecat;
				 var level =  obj.dataset.levelcat;
			   	 let form = document.getElementById('editform');
                 var inn = `
				   <form class="ajax-edit-product-category">
				      <input name="oldname" type="hidden" value="${name}" id="oldname" >
				       <label for="name">نام دسته بندی:</label>
					   <input name="name" id="catname" class="form-control mb-10" value="${name}"/>
					   <label for="level" >سطح دسته بندی:</label>
					   <select name="level" class="form-control mb-10" id="levelselect">
							<option selected="selected">سطح دسته بندی را مشخص کنید</option>
							<option value="1"  >سطح یک</option>
							<option value="2">سطح دو</option>
							<option value="3" >سطح سه</option>
					    </select>
						<label for="parent" >دسته بندی والد:</label>
						<select id="selectparent" class="form-control mb-10">
							<option>دسته بندی والد را مشخص کنید</option>
						</select>
						<input class="btn btn-success btn-sm" type="button" id="formsubmit" name="add" value="به روز رسانی" /> 
						<input class="btn btn-danger btn-sm" type="button" id="closeform" name="add" value="انصراف" />
				  </form>
                 `;

                 form.innerHTML = inn;
                 document.getElementById('closeform').addEventListener("click",function(){
                 	form.classList.remove('active');
                 }); 
                 form.className +=' active';
                 submit('update');
                 
                 selector(); 	 
			}
			function delete_cat(obj){
                 var name = obj.dataset.namecat;
				 var level =  obj.dataset.levelcat;
			   	 let form = document.getElementById('editform');
                 var inn =`
                      <form class="ajax-edit-product-category">
					     
					       <p>آیا می خواهید دسته بندی ${name} را حذف کنید?</p>
							<input class="btn btn-success btn-sm" type="button" id="deletebtn" name="add" value="حذف دسته بندی" /> 
							<input class="btn btn-danger btn-sm" type="button" id="closeform" name="add" value="انصراف" />
				       </form>
                 `;
                 form.innerHTML = inn;
                 document.getElementById('closeform').addEventListener("click",function(){
                 	form.classList.remove('active');
                 }); 
                 document.getElementById('deletebtn').addEventListener("click",function(){
                 	deletecategoty( name , level );
                 });
                 form.className +=' active';
			}
            function update(name , level , parent , oldname){
            	  let xhr = new XMLHttpRequest();
            	  xhr.onreadystatechange = function(){
            	  	if (xhr.readyState == 4 && xhr.status==200) {

            	  		let respons = JSON.parse(this.responseText);
                      
            	  		if (respons != 'Err'){
                            
                            let inn = refresh(respons);
		               
			                document.getElementById("allcats").innerHTML=inn;

			                createbuttons();

	            	  	}else{
	                          alert('مشکلی پیش اومده!!');
	            	  	}
            	  	}
            	  }
            	  xhr.open("POST", "http://localhost:8000/admin/updatecategory/", true);
				  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				  xhr.setRequestHeader("X-CSRF-TOKEN", document.head.querySelector("[name=csrf-token]").content );
            	  xhr.send("name="+name+"&level="+level+"&parent="+parent+"&oldname="+oldname);
            }
		    function refresh(respons){
		    	
		    	let refresh ='';console.log(respons);
		         for(cat in respons){
				   	 		   if(respons[cat].level == 1){
				   	 		   	refresh += `
					   	 		  <li class="treeview btn-primary btn-block active">
						   	 		            <a href="#" class="primary-link category"><i class="fa fa-plus"></i> <span>${respons[cat].name}</span>
			          							</a>
										        <ul class="treeview-menu">`;

								   	 		        for(cat2 in respons){
									   	 		         if((respons[cat2].level == 2)&&(respons[cat2].parent==respons[cat].id)){

										   	 		         refresh += `
										   	 		         	<li class="treeview btn-primary btn-block mt-10 sub2 active">
											   	 		         	 <a href="#" class="primary-link category"><i class="fa fa-plus"></i><span>${respons[cat2].name}</span>
				          							                 </a>
										   	 		            
										   	 		        
													   	 		      <ul class="treeview-menu">`;	
													   	 		          for(cat3 in respons ){
														   	 		         if((respons[cat3].level == 3)&&(respons[cat3].parent==respons[cat2].id)){
															   	 		       refresh += `
																   	 		       <li class="treeview btn-primary btn-block mt-10 sub3 ">
																   	 		          <a href="#" class="primary-link category"><span>${respons[cat3].name}</span>
																   	 		          </a>
																   	 		          <div class="category-edit">
																	   	 		            <a href="#" data-namecat ="${respons[cat3].name}" data-levelcat="${respons[cat3].level}" data-idcat="${respons[cat3].id}" id="editcat" class="btn btn-success btn-xs mt-5"><i class="fa fa-pencil-square-o"  ></i> </a>
																	   	 		             <a href="#" data-namecat ="${respons[cat3].name}" data-levelcat="${respons[cat3].level}" data-idcat="${respons[cat3].id}" id="deletecat" class="btn btn-danger btn-xs mt-5"><i class="fa fa-trash"  ></i> </a>
																   	 		          </div>
																   	 		       </li> `;
																   	 		    
														   	 		             }
													   	 		             }
													   	 		     refresh += `        
													   	 		     </ul>
													   	 		     <div class="category-edit">
												   	 		           <a href="#" data-namecat ="${respons[cat2].name}" data-levelcat="${respons[cat2].level}" data-idcat="${respons[cat2].id}" id="editcat" class="btn btn-success btn-xs mt-5"><i class="fa fa-pencil-square-o"  ></i> </a>
												   	 		            <a href="#" data-namecat ="${respons[cat2].name}" data-levelcat="${respons[cat2].level}" data-idcat="${respons[cat2].id}" id="deletecat" class="btn btn-danger btn-xs mt-5"><i class="fa fa-trash"  ></i> </a>
											   	 		            </div>
										   	 		            </li>`;
									   	 		         }	 		  
									   	 		    }
									   	 		    refresh += `
						   	 		            </ul>
						   	 		            <div class="category-edit">
							   	 		             <a href="#" data-namecat ="${respons[cat].name}" data-levelcat="${respons[cat].level}" data-idcat="${respons[cat].id}" id="editcat" class="btn btn-success btn-xs mt-5"><i class="fa fa-pencil-square-o"  ></i> </a>
							   	 		            <a href="#" data-namecat ="${respons[cat].name}" data-levelcat="${respons[cat].level}" data-idcat="${respons[cat].id}" id="deletecat" class="btn btn-danger btn-xs mt-5"><i class="fa fa-trash"  ></i> </a>
						   	 		            </div>
				   	 		      </li>`;
				   	 		    }
				   	 		}
		    	
		    	return refresh;
		    }
			function selector(){
				let level = document.getElementById('levelselect');
				level.addEventListener("change" , function(){
			           let xhr = new XMLHttpRequest();
			           xhr.onreadystatechange = function(){
			           	 if (xhr.readyState == 4 && xhr.status == 200) {
			           	 	 var parents = JSON.parse(this.responseText);
			           	 	 var parentselector = document.getElementById('selectparent');
			           	 	 var inn = '';
			           	 	 for(p in parents)
			           	 	 {
			           	 	 	inn += `<option value="${parents[p].id}">${parents[p].name}</option>`;
			           	 	 	
			           	 	 }
			           	 	 parentselector.innerHTML = inn;
			           	 }
			           }
			           xhr.open('GET' , 'http://localhost:8000/admin/get-parent-category/'+level.value ,true);
			           xhr.send();
				});
			}
			function sendfunc(name , level , parent){
				let xhr = new XMLHttpRequest(); 
				xhr.onreadystatechange = function(){
		           if (xhr.readyState == 4 && xhr.status==200) {
		             var respons = this.responseText;
		             
		             if (respons == 'name is null') {
		             	alert('لطفا نام دسته بندی را وارد کنید');
		             }
		             else if(respons ==2 || respons == 1){
		                alert(`ابتدا یک دسته بندی سطح ${respons} را تعریف کنید`);
		             }
		             else if(respons == 'level is null'){
		                alert('سطح دسته بندی را مشخص کنید.');
		             }
		             else if(respons == 'duplicated'){
		             
		                alert('دسته بندی در حال حاضر وجود دارد');
		             }
		             else{
		                let respons = JSON.parse(this.responseText);

		                let inn = refresh(respons);
		               
		                document.getElementById("allcats").innerHTML=inn;
		                createbuttons();

		             }
		           }
				}
				
				  xhr.open("POST", "http://localhost:8000/admin/createcategory", true);
				  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				  xhr.setRequestHeader("X-CSRF-TOKEN", document.head.querySelector("[name=csrf-token]").content );
				  xhr.send("name="+name+"&level="+level+"&parent="+parent); 
			}
			function deletecategoty( name , level ){
				let xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function(){
					if (this.readyState==4 && this.status==200) {

							let respons = JSON.parse(this.responseText);
			                let inn = refresh(respons);
			                document.getElementById("allcats").innerHTML=inn;
			                createbuttons();
			                let form = document.getElementById('editform');
			                form.classList.remove('active');

					}
				}
				xhr.open("POST", "http://localhost:8000/admin/deletecategory", true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.setRequestHeader("X-CSRF-TOKEN", document.head.querySelector("[name=csrf-token]").content );
				xhr.send('name='+name);
               
			}
			function submit(action){
				let formsubmit = document.getElementById("formsubmit");
				formsubmit.addEventListener('click',function(){
					let name = document.getElementById('catname').value;
					let level = document.getElementById('levelselect').value;
					let parent = document.getElementById('selectparent').value;
					if (action == 'create') {
						sendfunc(name , level , parent);
					}else if(action == 'update'){
						 oldname = document.getElementById('oldname').value;
                         update(name , level , parent,oldname);
					}
					
				});
			}
			function createbuttons (){
				let edits = document.querySelectorAll('[id=editcat]');

				let deletes = document.querySelectorAll('[id=deletecat]');
				if (edits.length != 0) {

					for (i=0; i<edits.length; i++) {

						edits[i].addEventListener("click" , function(){
						   	  edit_form (this);
						});

					}
				}
				if (deletes.length != 0) {
					for (i=0; i<edits.length; i++) {

						deletes[i].addEventListener("click" , function(){
						   	  delete_cat(this);
						});

					}
				}
			}
			function newcategory(){
					document.getElementById("addcat").addEventListener("click", function(){
						      
					let xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function(){
								              if (this.readyState == 4 && this.status == 200) {
									              	var parents = JSON.parse(this.responseText);
									              	var inn = ''; 
									              	var form =document.getElementById("editform");
									              	 for(p in parents){
									              	 	inn += `<option value="${parents[p].id}">${parents[p].name}</option>`;
									              	 }
								              	 form.innerHTML =`
								                       <form>
								                        <label for="name">نام دسته بندی:</label>
														<input name="name" id 
														="catname" class="form-control mb-10"/>
														<label for="level" >سطح دسته بندی:</label>
														<select name="level" class="form-control mb-10" id="levelselect">
														  <option></option>
														  <option value="1">سطح یک</option>
														  <option value="2">سطح دو</option>
														  <option value="3">سطح سه</option>
														</select>
														<label for="parent" >دسته بندی والد:</label>
														<select id="selectparent" class="form-control mb-10">
															${inn}
														</select>
														<input class="btn btn-success btn-sm" type="button" id="formsubmit" name="add" value="اضافه" />
														<input class="btn btn-danger btn-sm" type="button" id="closeform" name="add" value="انصراف" />
								                     </form>

								              	 `;
								              	 document.getElementById('closeform').addEventListener("click",function(){
								                 	form.classList.remove('active');
								                 });
								                 form.className +=' active';
								              	selector(); 
								              	submit('create');
								              }
								       }
								    xhr.open('GET' , 'http://localhost:8000/admin/get-product-category/' , true);
								    xhr.send()
								      
						});
            }
	

	newcategory();
	createbuttons();
 </script>
@endsection

