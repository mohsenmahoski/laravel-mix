import React, { Component } from 'react';
import Cookie from 'universal-cookie';
import axios ,{post} from 'axios';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import ImageUploader from 'react-images-upload';
import Select from 'react-select';
import TinyMCE from 'react-tinymce';
import 'react-select/dist/react-select.css';


export default class AuthorDashboard extends Component{
	constructor(props){
	    super(props);
	    this.state={
            username:'',
            useremail:'',
            redirect:false,
            setting:true,
            comments:false,
            author:null,
            posts:[],
            file:null,
            content: '',
            tag_value:'',
            cat_id:null,
            slug:'',
            title:'',


            fileRequired:false,
            titleRequired:false,
            slugRequired:false,
            catRequired:false,
            tagRequired:false,
            contentRequired:false,

            errors:0,
            cats:[],
            tags:[],
	    }
	    
	}
	
	componentWillMount(){
	   let cookie = new Cookie;
       let token = 'Bearer '+cookie.get('author_token');

       axios.post('/api/author/get_authorprofile',null,{
      		headers:{Authorization:token}
      	})
             .then(response=>{
             	
             	const {author , posts} = response.data;
             	 this.setState({
             	 	username:author.name,
             	 	useremail:author.email,
             	 	author,
             	 	posts
             	 });
             }) 
               .catch(error=>{
               	console.log(error);
               });
       this._get_cateory_tags();
	}
   _logOut(){
      let cookie = new Cookie; 
      cookie.remove('author_token');
      let token = cookie.get('author_token');
       if (token === undefined){
			this.setState({
							redirect:true
		    });
       }else{
           console.log('erorr');
       }
   }
   _posts(){
   	    const {posts} = this.state;
        return(
        	  <div className="container-fluid">
                 <div className="row">
	        	   <div className="col-md-12"><h3 className="pull-right rtl">نظرات درباره مطلب های شما:</h3></div>
	               {posts.map((item , index)=>this._showposts(item , index))}
	             </div>
        	  </div>
        	);
   }
   _comments(item , index){
   	  return(
              <div className="well" key={index}>
                   <small>نام کاربر : {item.user.name}</small> ، <small>ایمیل : {item.user.email}</small><p>نظر : {item.comment}</p>
              </div>
   	  	);
   }
  _submitInputs(){
    
		  	if (this.state.file != null){
                if (this.state.title != '' ){
                          if (this.state.slug != ''){
                          	 	if(this.state.cat_id != null){
                          	 		if (this.state.tag_value != ''){
                          	 			if (this.state.content != ''){
                          	 				const{author,file,content,tag_value,cat_id,slug,title} = this.state;
										    const formData = new FormData();
										    formData.append('file',file);
										    formData.append('author_id',author.id);
										    formData.append('content',content);
										    let str = JSON.stringify(tag_value);
										    formData.append('tag_value',str);
										    formData.append('cat_id',cat_id);
										    formData.append('slug',slug);
										    formData.append('title',title);

										    const config = {
										        headers: {
										            'content-type': 'multipart/form-data'
										        }
										    }
										    axios.post('/api/author_post', formData,config)
										    .then(response=>{console.log(response.data)})
										    .catch(error=>{console.log(error)});
                          	 			} else{
                          	 				this.setState({
								             	contentRequired:true,
								             	errors:1,
								             });
                          	 			}
                          	 		}else{
                                        this.setState({
							             	tagRequired:true,
							             	errors:1
							             });
                          	 		}
                          	 	}else{
                                     this.setState({
						             	catRequired:true,
						             	errors:1
						             });
                          	 	}
                          }else{
                          	this.setState({
				             	slugRequired:true,
				             	errors:1
				             });
                          }
                }else{
                     this.setState({
		             	titleRequired:true,
		             	errors:1
		             });
                }
		  	}else{
	             this.setState({
	             	fileRequired:true,
	             	errors:1
	             });
		  	}
  }
   
    
  handleEditorChange(e) {
    const content = e.target.getContent();
    this.setState({
    	content
    });
  }
   _string_to_slug (str) {
		    str = str.replace(/^\s+|\s+$/g, ''); // trim
		    str = str.toLowerCase();
		    let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
		    let to   = "aaaaeeeeiiiioooouuuunc------";
		    for (let i=0, l=from.length ; i<l ; i++) {
		        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		    }

		    str = str.replace(/\s+/g, '-') // collapse whitespace and replace by -
		        .replace(/-+/g, '-'); // collapse dashes

		    return str;
    }
   _handleKeyPress(evt){
            let inputvalue = evt.target.value;
            let inputname = evt.target.name;
            switch (inputname) {
            case 'slug':
                this.setState({
                	slug:inputvalue,
                	slugRequired:false
                });
              break;
            case 'title':
                inputvalue =inputvalue;
                this.setState({
                	title:inputvalue,
                	titleRequired:false
                });
            break;
            default:
              console.log('Sorry, the state not found.');
          }
   }
   _handleOnBlur(evt){
   	      let inputvalue = evt.target.value;
          let inputname = evt.target.name;
          switch (inputname) {
            case 'slug':
                if(inputvalue != ''){
                	this.setState({
	                	slug:this._string_to_slug(inputvalue)
	                });
                }
              break;
            case 'title':
	                inputvalue =inputvalue.trim();
	                this.setState({
	                	title:inputvalue
	                });
            break;
            default:
              console.log('Sorry, the state not found.');
          }
   }
   handleSelectChange(tag_value) {
		this.setState({ tag_value,tagRequired:false });

	}
	_select(evt){
            const cat_id = evt.target.value;
            this.setState({cat_id,catRequired:false});
	}
	_showposts(item , index){
   	       
           return(
                    <div className="row"  key={index}>
                     <div className="container-fluid">
                             <div className="col-md-12">
                               <hr/>
                             </div>
                      </div>
                      <div className="col-md-12">
                            <Link to={'/blog/'+item[0].id} >
				                    <div className="col-md-4 mb-10">
									        <div className="card" style={{borderRadius:'5px'}}>
									          
									                <div className="image" style={{borderRadius:'5px', backgroundImage: `url(${item[0].image})`, backgroundPosition: 'center center' , backgroundSize: 'cover'}}>
										                 <div className="filter filter-white">
										                    <button type="button" className="blogs btn btn-sm btn-primary btn-round btn-fill">
										                         <i className="material-icons">keyboard_backspace</i> ادامه مطلب
										                    </button>
										                 </div>
									                 </div>
									         
									        </div>
									</div>
							</Link>
							<div className="col-md-8 text-right rtl">
                               {item[1].map((item , index)=>this._comments(item , index))}
							</div>
                      </div>
                      
                    </div>
           	       
           	     );
   }
	_profile(){
   	   const {useremail , username } = this.state;
   	   return (
             <div>
             	   {this.state.redirect === true ? <Redirect to="/"/> : null}
				  <div className="panel-body">
					  <div className="col-md-12 rtl text-right">
								<img src="../images/theme/avatar.jpg" alt="Circle Image" className="pull-left img-rounded img-responsive img-raised" style={{ height:'85px',width:'85px' }} />
								<label> نام کاربری: </label>
										<h5>{username}</h5>
					  </div>
					  <div className="col-md-12 rtl text-right">
							<label> آدرس الکترونیکی: </label>
							<h5>{useremail}</h5>
					  </div>
					  <div className="col-md-12">
					  </div>
				  </div>
																             
             </div>
   	   	);  
    }
    _get_cateory_tags(){
    	axios.get('/api/author_post')
    	.then(response=>{
    		if (response.status==200){
    			const {cats,tags} = response.data;
    			this.setState({
                     cats,
                     tags:tags.data
    			},()=>console.log(this.state.tags));
    		}
    	}).catch(error=>{
    		console.log(response.error);
    	});
    }
	_createpost(){
   	  return(
		        <div className="panel-body">
		             <div className="col-md-12">
				           <div className="col-md-12">
                                    <div className="form-group drop-zone mb-10">
				             		   <input style={{ cursor: 'pointer' }} className="form-control" type="file" onChange={(e)=>this.setState({file:e.target.files[0],fileRequired:false})} />
				             		   <span className="col-md-12 text-center">{this.state.file != null ? this.state.file.name: null}</span>
				                  </div>
				                   <span className="error rtl" style={{ display:this.state.fileRequired == true ? 'block' :'none' }}>باید تصویری برای مطلب انتخاب کنید . </span>
				           </div>
					       <div className="col-md-12">
                                 <div className="text-right form-group label-floating is-empty">
	                                 <label htmlFor="title" className="control-label">عنوان مطلب</label>
	                                 <input   className="form-control"   name="title" type="text" onChange={(evt)=>this._handleKeyPress(evt)} value={this.state.title}  onBlur={(evt)=>this._handleOnBlur(evt)}/>
		                             <span className="error rtl" style={{ display:this.state.titleRequired == true ? 'block' :'none' }}>باید عنوانی برای مطلب انتخاب کنید . </span>
		                             <span className="material-input"></span>
                                 </div>
					       </div>
                           <div className="col-md-12">
                                 <div className="text-right form-group label-floating is-empty">
                                 <label htmlFor="slug" className="control-label">آدرس مسیر</label>
                                 <input   className="form-control"   name="slug" type="text" onChange={(evt)=>this._handleKeyPress(evt)} onBlur={(evt)=>this._handleOnBlur(evt)} value={this.state.slug} />
	                             <span className="error rtl" style={{ display:this.state.slugRequired == true ? 'block' :'none' }}> باید مسیر نمایش پست را تایین کنید . </span>
	                             <span className="material-input"></span>
                           </div>
                           </div>
                           <div className="col-md-12">
                                  <div className="text-right form-group label-floating is-empty">
                                  <label htmlFor="category_id" className="control-label">دسته بندی مطلب</label>
                                  <select name="category_id" className="form-control" onChange={(evt)=>this._select(evt)}>
                                        <option value="4"></option>
						               {this.state.cats !== [] ? this.state.cats.map((item,index)=><option key={index} value={item.id}>{item.name}</option>):null}
						          </select>
						          <span className="error rtl" style={{ display:this.state.catRequired == true ? 'block' :'none' }}> دسته بندی مطلب را مشخص کنید . </span>
                           </div>
                           </div>
                           <div className="col-md-12 mb-10">
		                           <Select
		                                 style={{ textAlign:'right' , paddingRight:'10px' }}
										 name="form-field-name"
										 value={this.state.tag_value}
										 onChange={this.handleSelectChange.bind(this)}
										 multi
										 options={this.state.tags==[] ? [] : this.state.tags}
									/>
									<span className="error rtl" style={{ display:this.state.tagRequired == true ? 'block' :'none' }}> تگ های مربوط به مطلب را تایین کنید . </span>	         
                           </div>
					        <div className="col-md-12">
                              <TinyMCE
						        content="<p>This is the initial content of the editor</p>"
						        config={{
						          plugins: 'autolink link image lists print preview',
						          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
						        }}
						        onChange={this.handleEditorChange.bind(this)}
						      />
					        </div>
					        <span className="error rtl" style={{ display:this.state.contentRequired == true ? 'block' :'none' }}> متن مربوطه را وارد نکرده اید . </span>
			                <div className="col-md-12">
                                  <button className="btn btn-primary" onClick={()=>{this._submitInputs()}}>ارسال</button>
                                  <span className="error rtl" style={{ display:this.state.errors===0 ? 'none' : 'block'  }}>اطلاعات ورودی به درستی وارد نشده است.</span>
			                </div>
		             </div>
		        </div>
   	  	 );
    }
	render(){
		return(
			     <div>
			     <Header />
					        <div className="header header-filter">
		                        <div className="container">
		                            <div className="row">
		                                <div className="col-md-8 col-md-offset-2">
		                                    <div className="brand">
		                                        <h1 className="title white">وبی تک</h1>
		                                        <div className="separator separator-danger">✻</div>
		                                        <h3 className="text-center">ما فقط یک وب سایت طراحی نمیکنیم،ما آنچه در ذهن ورویای شماست به واقعیت تبدیل میکنیم</h3>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                     </div>
		                     <div className="main main-raised">
		                            <nav className="navbar navbar-default">
		                                        <div className="container-fluid">
		                                             <div className="collapse navbar-collapse menu" id="example-navbar">
		                                                                         
		                                             </div>
		                                        </div>
		                            </nav>
		                             <div className="container">
																    <div className="row">
																        <div className="col-md-8 col-md-offset-2">
																            <div className="panel panel-default">
																                <div className="panel-heading rtl title">
			                                                                        <div className="row">
			                                                                          	<button className="btn btn-info btn-fab btn-fab-mini btn-round mr-10" onClick={()=>{this.setState({setting:true,comments:false})}}><i className="material-icons">settings</i></button>
				                                                                        <button className="btn btn-success btn-fab btn-fab-mini btn-round mrl-10" onClick={()=>{this.setState({setting:false,comments:true})}} ><i className="material-icons">forum</i></button>
				                                                                        <button className="btn btn-warning btn-fab btn-fab-mini btn-round" onClick={()=>{this.setState({setting:false,comments:false})}}><i className="material-icons">note_add</i></button>
			                                                                            <button className="btn btn-primary pull-left mrl-10" onClick={()=>this._logOut()}>خروج</button>
			                                                                        </div>
																                </div>
				                                                               {this.state.setting==true?this._profile():(this.state.comments== true? this._posts() : this._createpost())}   
				                                                           </div>
																        </div>
																    </div>
				                    </div> 
		                    </div>
			     <Footer />
			     </div>
			);
	}
} 

















