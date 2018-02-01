import React, { Component } from 'react';
import Cookie from 'universal-cookie';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import Socials from '../items/Socials';


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
      let cookie = new Cookie; 
      cookie.remove('user_token');
      let token = cookie.get('user_token',{ path: '/' });
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
			       <Header redirect={this.props.location} />
					     	<div className="header header-filter">
							        <div className="container flex-center">
							                <div className="col-md-12 flex-center" style={{ background:'url("/images/theme/typing.jpg")',minHeight:'325px' }}>  
							                    <div className="shape"></div>
							                    <div className="caption text-center">
							                        <h3 className="text-center">اخبار و رویدادهای دنیای فناوی اطلاعات</h3>
							                        <small>جدیدترین خبرها</small>
							                    </div>
							                </div>
							        </div>
		     				</div>
		                    <div className="row">
							   	<div className="container">
                                  <div className="main main-raised">
									<Socials />
				                    {this.state.redirect === true ? <Redirect to="/"/> : null}
				                    <div className="flex-center">
													        <div className="col-md-8 col-md-offset-2">
													            <div className="panel panel-default">
													                <div className="panel-heading rtl title pd-20">
                                                                        <div className="row">
                                                                          	<button className="btn btn-info btn-fab btn-fab-mini btn-round mr-10"><i className="material-icons">settings</i></button>
	                                                                        <button className="btn btn-success btn-fab btn-fab-mini btn-round mrl-10"><i className="material-icons">forum</i></button>
	                                                                        <button className="btn btn-warning btn-fab btn-fab-mini btn-round"><i className="material-icons">favorite_border</i></button>
                                                                            <button className="btn btn-primary btn-sm pull-left mrl-10" onClick={()=>this._logOut()}>خروج</button>
                                                                        </div>
													                </div>
													                
													               

													                <div className="panel-body pd-20">
													                    <div className="col-md-12 rtl text-right">
													                       
                                                                             <img src="../images/theme/avatar.jpg" alt="Circle Image" className="pull-left img-rounded img-responsive img-raised" style={{ height:'85px',width:'85px',borderRadius:'50px',margin:'10px' }} />
													                         
													                   	     <label> نام کاربری: </label>
													                   	      <h5>{username}</h5>
													                    </div>
													                   <div className="col-md-12 rtl text-right">
													                   	        <label> آدرس الکترونیکی: </label>
													                   	        <h5>{useremail}</h5>
													                   </div>
													                   <div className="col-md-12">
													                       
													                         
													                        
													                  </div>
													                  <div className="row pd-20">
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
		                    </div>
			       <Footer />
			     </div>
			);
	}
} 



