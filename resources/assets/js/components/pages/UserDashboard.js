import React, { Component } from 'react';
import Cookie from 'universal-cookie';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';


export default class UserDashboard extends Component{
	constructor(props){
	    super(props);
	    this.state={
            username:'',
            useremail:'',
            redirect:false,
            comments:[],
	    }
	}
	componentWillMount(){
	   let cookie = new Cookie;
       let token = 'Bearer '+cookie.get('user_token');

       axios.post('/api/get_userprofile',null,{
      		headers:{Authorization:token}
      	})
             .then(response=>{
             	const {user , comments} = response.data;
             	 this.setState({
             	 	username:user.name,
             	 	useremail:user.email,
             	 	comments
             	 });
             }) 
               .catch(error=>{
               	console.log(error);
               });
	}
   _logOut(){
   	  console.log('called');
      let cookie = new Cookie; 
      cookie.remove('user_token');
      let token = cookie.get('user_token');
       if (token === undefined){
			this.setState({
							redirect:true
		    });
       }else{
           console.log('erorr',token);
       }
   }
   _showComments(item , index){
   	    const comment = item[0];
   	    const post = item[1];
        return(
               <div className="col-md-12 mb-10" key={index}>
                       <div key={index} className="card">
                          <div className="col-md-12 rtl text-right">
                             <h5>در مورد :<Link to={'/blog/'+post.id}>{post.title}</Link> </h5>
			               	 <p>{comment.comment}</p>
		                 </div>
	                   </div>
               </div>
        	);
   }
	render(){
		const {useremail , username } = this.state;
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
				                    {this.state.redirect === true ? <Redirect to="/"/> : null}
				                    <div className="container">
													    <div className="row">
													        <div className="col-md-8 col-md-offset-2">
													            <div className="panel panel-default">
													                <div className="panel-heading rtl title">
                                                                        <div className="row">
                                                                          	<button className="btn btn-info btn-fab btn-fab-mini btn-round mr-10"><i className="material-icons">settings</i></button>
	                                                                        <button className="btn btn-success btn-fab btn-fab-mini btn-round mrl-10"><i className="material-icons">forum</i></button>
	                                                                        <button className="btn btn-warning btn-fab btn-fab-mini btn-round"><i className="material-icons">favorite_border</i></button>
                                                                            <button className="btn btn-primary pull-left mrl-10" onClick={()=>this._logOut()}>خروج</button>
                                                                        </div>
													                </div>
													                
													               

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
													                  <div className="row">
													                      <div className="col-md-12">
                                                                                 <label className="pull-right"><h5 className="col-md-12 rtl">نظرات کاربر</h5></label>
													                      </div>
                                                                          {this.state.comments.map(this._showComments.bind(this))}
													                  </div>
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



