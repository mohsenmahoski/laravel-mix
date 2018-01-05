import React, { Component } from 'react';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';

export default class AboutUs extends Component{
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
	                                        <h3 className="text-center">ارتباط با ما</h3>
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
	                                <div className="section section-basic">
	                                     <div className="container"> 
								            <h1>
								            	About Us
								            </h1>
								    	</div>
								    </div>
					    </div>
					    <Footer />
			        </div>
			);
	}
}