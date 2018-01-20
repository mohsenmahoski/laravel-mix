import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , HashRouter } from 'react-router-dom';


import Home from './pages/Home'; 
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact'; 
import SingleBlog from './pages/SingleBlog';
import ConfirmUser from './pages/ConfirmUser';
import ResetPassword from './pages/ResetPassword';
import UserDashboard from './pages/UserDashboard';
import AuthorDashboard from './pages/AuthorDashboard';
import Test from './items/Test';




/* An example React component */
class Main extends Component{
	
    render() {
        return (
            <div>
                	<Router>
					  <div>
					    
					 
		                             <Route exact={true} path="/" component={Home}/>
								     <Route exact path="/contact" component={Contact}/>
								     <Route exact path="/blog" component={Blog} />
								     <Route exact path="/blog/:id" component={SingleBlog} />
								     <Route exact path="/about" component={AboutUs} />
								     <Route exact path="/dashboard" component={UserDashboard} />
								     <Route exact path="/author/dashboard" component={AuthorDashboard} />
								     <Route exact path="/confirm/:user_key" component={ConfirmUser} />
								     <Route exact path="/reset_password/:user_key" component={ResetPassword} />
								     <Route exact path="/test" component={Test} />
								    
		                 
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