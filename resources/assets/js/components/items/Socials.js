import React , {Component} from 'react';


export default class Socials extends Component{
	render(){
		return(
                 <nav className="navbar navbar-default">
						<div className="container-fluid">
					              <div className="navbar-collapse menu" id="example-navbar">
										<div className="pull-left flex-center">
                                                <a href="#" className="cyrcle-icon"><i className="fa fa-facebook" aria-hidden="true"></i></a> 
												<a href="#" className="cyrcle-icon"><i className="fa fa fa-linkedin" aria-hidden="true"></i></a>
												<a href="#" className="cyrcle-icon"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
												<a href="#" className="cyrcle-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a>
												<a href="#" className="cyrcle-icon"><i className="fa fa-twitter" aria-hidden="true"></i></a>
										</div>          
								  </div>
						</div>
				 </nav>
			);
	}
}