import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , HashRouter } from 'react-router-dom';


import Header from './_partials/Header';
import Footer from './_partials/Footer';
import Contact from './pages/Contact'; 
import Home from './pages/Home'; 
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';


/* An example React component */
class Main extends Component {
    render() {
        return (
            <div>
      
                    
           
                	<Router>
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
	                     	<div className="section section-basic">
		                       <div className="container"> 
		                             <Route exact={true} path="/" component={Home}/>
								     <Route exact path="/contact" component={Contact}/>
								     <Route exact path="/blog" component={Blog} />
								     <Route exact path="/blog/:id" component={SingleBlog} />
			                    </div>
		                    </div>
		                 </div>  
		                 <Footer />
					  </div>
					</Router>
               
            </div>
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}