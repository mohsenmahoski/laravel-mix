import React, { Component } from 'react';
import Cookie from 'universal-cookie';
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
	    }
	}
	componentWillMount(){
	   let cookie = new Cookie;
       let token = 'Bearer '+cookie.get('user_token');

       axios.post('/api/get_details',null,{
      		headers:{Authorization:token}
      	})
             .then(response=>{
             	
             	 let {email ,name } = response.data;
             	 this.setState({
             	 	username:name,
             	 	useremail:email
             	 });
             }) 
               .catch(error=>{
               	console.log(error);
               });
	}
   
   _logOut(){
      let cookie = new Cookie;
      cookie.remove('user_token');
      this.setState({
      	 redirect:true
      });
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
		     
								     <h1>{useremail}</h1>
				                     <h1>{username}</h1>
				                     <button className="btn btn-primary" onClick={()=>this._logOut()}>LogOut</button>
				                    {this.state.redirect === true ? <Redirect to="/"/> : null}       
		                    </div>
                   
			     <Footer />
			     </div>
			);
	}
} 



