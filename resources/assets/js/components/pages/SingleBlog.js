import React ,{Component} from 'react';
import axios from 'axios';
import SuccessMessage from '../items/SuccessMessage';
import FailMessage from '../items/FailMessage';
import NavItem from '../items/NavItem';
import { Link , Route  } from 'react-router-dom';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import Cookie from 'universal-cookie';

export default class SingleBlog extends Component{
   constructor(props){
			super(props);
			this.state={
				  data:{},
				  token:undefined,
			      message:'',
			      subscribe:'',

			      SuccessMessage:null,
	 			  displaySuccess:'none',
	              hasSuccess:false,

			      Failmessage:null,
	 			  displayError:'none',
	 			  hasError:false,

			      validEmail:'hidden',
			      EmailRequired:'hidden',
			      MessageRequired:'hidden',
			      MessageLength:'hidden',
			     
			     
			      comments:null,
			      searchIcon:'search',
			      searchResult:[],
			      searchInput:'',
			      
			} 	
   }
   componentDidMount(){
  	      let cookie = new Cookie;
	      let user_token =  cookie.get('user_token');
	      let token = user_token;
	      this.setState({
	      	token
	      });
	      this._getData();
   }
   _getData(){
  	 const id =  this.props.match.params.id;     
		  axios.post('/api/blog/'+id, {
			    id: id
			  })
			  .then((response) => {
			  	 
			  	 const {comments} = response.data.data;

			     this.setState({
			     	data:response.data.data,
			     	comments
			     });
			  })
			  .catch((error) => {
			    console.log(error);
			  });
   }
   _updateComponent(id){
		  axios.post('/api/blog/'+id, {
			    id: id
			  })
			  .then((response) => {
			  	 
			  	 const {comments} = response.data.data;

			     this.setState({
			     	data:response.data.data,
			     	comments
			     });
			  })
			  .catch((error) => {
			    console.log(error);
			  });
   }
   _handleSubscribe(){
  	
       const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	   const email = this.state.subscribe; 
	   if (email.length != 0 ) {
				if (valid.test(email)) {
							 this.setState({
							       validEmail:'hidden'
							 });
							 axios.post('/admin/subscribe/',{
						       	    email:this.state.subscribe
						     })
						     .then(response=>{
						        	if (response.data == 'subscribed' ) {
						                this.setState({
							                 subscribe:'',
							                 hasSuccess:true,
	                                         displaySuccess:'block',
							                 SuccessMessage:'با تشکر از ثبت نام شما در اشتراک خبرنامه.',
							             });
						        	}
						     })
						     .catch(error=>{
						        	console.log(error)
						     });
			    }
			    else{
					 this.setState({
					       validEmail:'visibile',
					       hasSuccess:false,
						   hasError:false
					  });
				}
	   }
	   else{
             this.setState({
             	EmailRequired:'visibile',
             	hasSuccess:false,
				hasError:false
             });
	   }
   }
   _handleKeyPress(evnt){
          const inputValue = evnt.target.type === 'checkbox' ? evnt.target.checked : evnt.target.value; 
          const inputName =  evnt.target.name;
          switch (inputName) {
            case 'message':
              if (inputValue.length>10) {
                    this.setState({
                            MessageLength:'hidden',
                            hasSuccess:false,
						    hasError:false
                          });

              }
               this.setState({
                            MessageRequired:'hidden',
                            message:inputValue,
                            hasSuccess:false,
						    hasError:false
                          });
              break;
             case 'subscribe':
	             const valid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	               if (valid.test(inputValue)) {
	                   this.setState({
	                            validEmail:'hidden',
	                            EmailRequired:'hidden'
	                          });
	               }else{
	                  this.setState({
	                            validEmail:'visibile',
	                            EmailRequired:'hidden'
	                          });
	               }
	               this.setState({
	                            subscribe:inputValue
	                          });
              break;
            default:
              console.log('Sorry, the state not found.');
          }
   }
   _handleSubmit(e){
        e.preventDefault();
        const message = this.state.message;
                        if (message !== '' && message.length > 10) {
                        	 let token = 'Bearer '+ this.state.token;
                        	 console.log(token);
			                 if (token != undefined) {
		                                axios.post('/comment/',{
											comment : message,
											id : this.props.match.params.id,
		                                 },{
		                                  
		                                  headers:{Authorization:token}
		                                })
		                                .then((response) => {
		                                  
		                                  if (response.data == 'message saved') {
			                                     this.setState({
			                                            message:'',
			                                            hasSuccess:true,
			                                            displaySuccess:'block',
			                                            SuccessMessage:'پیام شما با موفقیت ارسال شد و پس از بازبینی مورد تایید قرار خواهد گرفت.',
			                                    });
		                                   }
		                                   else if(response.data=='not login'){
		                                    	this.setState({
			                                            Failmessage:'برای نظر دهی ابتدا باید در حساب کاربری خود وارد شوید.',
			                                            displayError:'block',
			                                            hasError:true
			                                    });
		                                    }
		                                   
		                                 
		                                })
		                                .catch(function (error) {
		                                  console.log(error);
		                                }); 
	                             }else{
	                             	this.setState({
			                                            Failmessage:'برای نظر دهی ابتدا باید در حساب کاربری خود وارد شوید.',
			                                            displayError:'block',
			                                            hasError:true
			                                    });
	                             }
                             }
                        else{
	                            if (message.length<10 && message.length > 0 ) {
	                              this.setState({
	                                 MessageLength:'visibile',
	                                 hasSuccess:false,
									 hasError:false
	                              });
	                            }
	                            else{
		                            this.setState({
		                                   MessageRequired:'visibile',
		                                   hasSuccess:false,
									 	   hasError:false
		                              });
	                           }
                        }    
   }
   _handleLike(id){
  	  const token = this.state.token;
      
  	  if (token != undefined ) {
  	  	       let header = 'Bearer '+ token;
		  	  	axios.post('/comment/likes',{
					    id: id
		             },{
                         headers:{Authorization:header}
		             })
					  .then((response) => {
						  	if(response.status == 202){
						  		
			                     this.setState({
				                     Failmessage:'برای نظر دهی ابتدا باید در حساب کاربری خود وارد شوید.',
				                     displayError:'block',
				                     hasError:true
				                 });
			                }else if(response.status == 203){
			                	
                                  this.setState({
				                     Failmessage:'نمی توانید به رای خود نظر دهی کنید.',
				                     displayError:'block',
				                     hasError:true
				                   });
			                }else if(response.status == 201){
			                	
			                	 this.setState({
				                     Failmessage:'فقط یک بار می توانید رای دهید.',
				                     displayError:'block',
				                     hasError:true
				                   });
			                }else{
			                	this.setState({
							  		hasSuccess:false,
								    hasError:false
							  	});
			                	this._getData();
			                }
					  	
					  })
					  .catch((error) => {
					             this.setState({
				                     Failmessage:'مشکلی در نظر دهی به وجود آمده.',
				                     displayError:'block',
				                     hasError:true
				                 });
					  });	
  	  }else {
            this.setState({
				             Failmessage:'برای نظر دهی ابتدا باید در حساب کاربری خود وارد شوید.',
				             displayError:'block',
				             hasError:true
			});
  	  }
   }
   _handleDisLike(id){
  	  const token = this.state.token;
  	  if (token != undefined ) {
  	  	       let header = 'Bearer '+ token;
		  	  	axios.post('/comment/dislikes',{
					    id: id
		             },{
                         headers:{Authorization:header}
		             })
					  .then((response) => {
						  	if(response.status == 202){
			                     this.setState({
				                     Failmessage:'برای نظر دهی ابتدا باید در حساب کاربری خود وارد شوید.',
				                     displayError:'block',
				                     hasError:true
				                 });
			                }else if(response.status == 203){
			                	
                                  this.setState({
				                     Failmessage:'نمی توانید به رای خود نظر دهی کنید.',
				                     displayError:'block',
				                     hasError:true
				                   });
			                }else if(response.status == 201){
			                	
			                	 this.setState({
				                     Failmessage:'فقط یک بار می توانید رای دهید.',
				                     displayError:'block',
				                     hasError:true
				                   });
			                }else{
			                	this.setState({
							  		hasSuccess:false,
								    hasError:false
							  	});
			                	this._getData();
			                }
					  	
					  })
					  .catch((error) => {
					             this.setState({
				                     Failmessage:'مشکلی در نظر دهی به وجود آمده.',
				                     displayError:'block',
				                     hasError:true
				                 });
					  });	
  	  }else {
            this.setState({
				             Failmessage:'برای نظر دهی ابتدا باید در حساب کاربری خود وارد شوید.',
				             displayError:'block',
				             hasError:true
			});
  	  }
   }
   _comments(item , index){
  	    const id = item.id;
		return (
              <div className="blogcard mt-20 container-fluid" key={index} >
                 <div className="content">
                    <div className="tab-content text-center">
                        <div className="col-md-2 pull-right">
                                <img src="../images/theme/avatar.jpg" alt="Circle Image" className="blogavatar img-circle img-responsive" />
                                <small className="col-md-12 text-center" >{item.name}</small>
                        </div>
                        <div className="tab-pane active col-md-10" >
	                             <p className="text-justify"> {item.comment} </p>
	                             <div className="col-md-12">
                                                 <div  className="pull-left text-center" style={{ display : 'flex',flexDirection:'column' }}>
							                            <button onClick={()=>this._handleDisLike(item.id , item.likes)} style={{ padding:'10px 5px' }} className="btn btn-simple btn-primary btn-xs  hvr-icon-bounce">
								                                 <i className="material-icons" style={{ top:3 }}>thumb_down</i>
								                                <div className="ripple-container"></div>
								                        </button>
						                            	<small>{item.dislikes}</small>
	                             				</div>
					                             <div  className="pull-left text-center" style={{ display:'flex',flexDirection:'column' }}>
								                            <button onClick={()=>this._handleLike( item.id , item.likes )} style={{ padding:'10px 5px' }} className="btn btn-simple btn-primary btn-xs  hvr-icon-bounce">
									                                <i className="material-icons">thumb_up</i>
									                                <div className="ripple-container"></div>
									                        </button>
							                            	<small>{item.likes}</small>
							                            	
							                            		
					                             </div>
	                             </div>
                        </div>
                   </div>
                 </div>
              </div>
			);
   }
   _clearSearch(){
   		console.log('called');
	   	  this.setState({
	   	  	  searchResult:[],
	  	      searchIcon:'search',
	  	      searchInput:'',
	   	  });
   }
   _renderMessage(message){
		
		if (message=='failed'){
              return(
	              <FailMessage display={this.state.display}>{this.state.Failmessage}</FailMessage>
		  	 	);
		}else if(message='success'){
                return(
                      <SuccessMessage display={this.state.displaySuccess}>{this.state.SuccessMessage}</SuccessMessage>
                	);
		}
		
	 }
   _searchMethod(event){
  	    let search = event.target.value.trim();
  	    if ( search != '') {
  	    	this.setState({
  	    		searchInput:search
  	    	});
		    axios.post('/api/search/',{
		    	search
		    })
		     .then(response=>{
		         this.setState({
		         	searchResult:response.data,
		         	searchIcon:'clear',
		         });
		     })
		     .catch(error=>{
		     	console.log(error);
		     });
  	    }else{
  	    	this.setState({
  	    		searchResult:[],
  	    		searchIcon:'search',
  	    		searchInput:'',
  	    	});
  	    }
   }
   _showResult(item , index){
          return(
                <Link onClick={()=>this._updateComponent(item.id)} to={`/blog/${item.id}`} className="col-md-12 rtl hvr-sweep-to-left" key={index}>{item.title}</Link>
          	);
   }
   render(){
		const { title , body , image , category_name  } = this.state.data;
        const comments = this.state.comments;
		
		return(
            <div>
            <Header />
	                { this.state.hasError == true ? this._renderMessage('failed') : null }
                    { this.state.hasSuccess == true ? this._renderMessage('success') : null }
		                     	<div className="header header-filter">
							        <div className="container">
							            <div className="row">
							                <div className="col-md-8 col-md-offset-2">
							                    <div className="brand">
							                        <h1 className="title white">وبی تک</h1>
							                        <div className="separator separator-danger">✻</div>
							                        <h3 className="text-center">مقالات</h3>
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
			                     	<div className="section-fluid">
				                       <div className="container-fluid"> 
									            <div className="row">
													 <div className="col-md-12 blog-post text-right mt-20">
													 		 <div className="col-md-4  text-center">
													 		    <div className="col-md-12 input-group">
										                                <div className="form-group is-empty pull-right col-md-12"> 
									                                                <input type="text" className="text-right form-control searchInput" placeholder="جست وجو در مطالب..." onChange={this._searchMethod.bind(this)} value={this.state.searchInput} />
		                                                                            <div className="searchResult">{this.state.searchResult.length != 0 ? this.state.searchResult.map(this._showResult.bind(this)) : null }</div>							                                    
									                                    </div>
									                                    <button  className="searchbutton pull-right btn btn-search btn-fab btn-fab-mini btn-round" onClick={()=>this._clearSearch()}>
									                                                     <i className="material-icons">{this.state.searchIcon}</i>
									                                                     <div className="ripple-container"></div>
									                                    </button>
									                              </div>
								                                  <div className="card text-center">                                  	   
								                                       <h5 className="col-md-12" >
								                                  	   	 با عضویت در اشتراک خبر نامه از آخرین اطلاعات و اخبار وب سایت ما آگاه شوید...
								                                  	   </h5> 
								                                  	   <div className="form-group is-empty pull-right col-md-12">
								                                  	      <input type="text" value={this.state.subscribe} onChange={this._handleKeyPress.bind(this)} name="subscribe" className="text-right form-control" placeholder="آدرس پست الکترونیکی شما..." />
								                                  	   	  <span className="error col-md-12">{ this.state.validEmail == 'visibile' ? 'لطفا ایمیل صحیح وارد کنید' : null }</span>
								                                  	   	  <span className="error col-md-12">{ this.state.EmailRequired == 'visibile' ? 'لطفا ایمیل خود را وارد کنید' : null }</span>
								                                  	   </div>
								                                  	   <button className="btn btn-primary" onClick={()=>this._handleSubscribe()} >ثبت نام<div className="ripple-container"></div></button>
								                                  	   
								                                  </div>
													                    <h3 className="social-title">نویسنده</h3>
													                    <div className="author text-center">
													                        <div className="avatar avatar-danger">
													                            <img alt="..." src="../images/theme/face_1.jpg" />
													                        </div>

													                        <div className="card-description text-center">
													                            <h3 className="big-text">تینا</h3>
													                            <p className="small-text">طراح و نویسنده وب</p>
													                           <div className="separator separator-primary">✻</div>
													                        </div>
													                        <div className="social-buttons">
													                            <a href="#" className="btn btn-social btn-simple btn-xs"><i className="fa fa-twitter"></i></a>
													                            <a href="#" className="btn btn-social btn-simple btn-xs"><i className="fa fa-dribbble"></i></a>
													                            <a href="#" className="btn btn-social btn-simple btn-xs"><i className="fa fa-facebook-square"></i></a>
													                        </div>
													                    </div>
													                    <h3 className="social-title">دسته بندی مطلب:</h3>
													                    <span className="label label-fill label-danger">Food</span>
													                    <span className="label label-fill label-info">{ category_name }</span>
													                    <span className="label label-fill label-danger">Lifestyle</span>
													                    <span className="label label-fill label-danger">Breakfast</span>
													                    <h3 className="social-title">تعداد مطلب - 18</h3>
													                    <div className="social-buttons-blog-posts">
													                        <button className="btn btn-social btn-simple btn-xs btn-padding"><i className="fa fa-facebook-square"></i></button>
													                        <button className="btn btn-social btn-simple btn-xs btn-padding"><i className="fa fa-twitter"></i></button>
													                        <button className="btn btn-social btn-simple btn-xs btn-padding"><i className="fa fa-instagram"></i></button>
													                        <button className="btn btn-social btn-simple btn-xs btn-padding"><i className="fa fa-google-plus-square"></i></button>
													                    </div>
													     </div>
														 <div className="col-md-8 ">
															     <img src={image} className="responsive-image blog-banner" />
															 	 <h3 className="well">{ title }</h3>
															 	
															 	 <div className="col-md-12" dangerouslySetInnerHTML={{__html: body}} />
															 	 <div className="card container-fluid"> 
															 	       <i className="material-icons" style={{ color:'#ababab' , marginTop:10 , marginBottom:10, borderRadius:5 , border: '2px solid #ababab' }} >comment</i> ...
																	   <div className="input-group">
												                                <div className="form-group is-empty">
												                                    <textarea className="form-control" value={this.state.message} onChange={this._handleKeyPress.bind(this)}  name="message" cols="100" rows="5" placeholder="نظر شما در مورد این مطلب " ></textarea>
												                                     <span className="rtl" style={{ color:'#f44336',display: this.state.MessageRequired=='visibile' ? 'block' : 'none'}}>لطفا پیام خود را وارد کنید!!</span>
	                                                                                 <span className="rtl" style={{ color:'#f44336',display: this.state.MessageLength=='visibile' ? 'block' : 'none'}}>لطفا پیام طولانی تری وارد کنید!!</span> 
												                                    <span className="material-input"></span>
													                            </div>
	                            										</div>
                                                                        <input className="pull-left btn btn-primary" type="submit" value="ارسال پیام" onClick={this._handleSubmit.bind(this)} /> 
                                                                 </div>
														 </div>
														 <div className="col-xs-12 col-sm-12 col-md-8 pull-right">
															   { comments == null ? null : comments.map(this._comments.bind(this)) }
														 </div>
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