import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , HashRouter } from 'react-router-dom';

import Contact from './pages/Contact'; 
import Home from './pages/Home'; 
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import AboutUs from './pages/AboutUs';
import UserDashboard from './pages/UserDashboard';
import ConfirmUser from './pages/ConfirmUser';
import ResetPassword from './pages/ResetPassword';




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
								     <Route exact path="/confirm/:user_key" component={ConfirmUser} />
								     <Route exact path="/reset_password/:user_key" component={ResetPassword} />
								    
		                 
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