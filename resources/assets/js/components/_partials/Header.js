import React, { Component } from 'react';
import  NavItem  from '../items/NavItem'

class Header extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <NavItem className="nav-link" to="/">website</NavItem>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav mr-auto">
                      <NavItem activeOnlyWhenExact={true} className="nav-link" to="/">Home</NavItem>
                       <NavItem activeOnlyWhenExact={false} className="nav-link" to="/blog">Blog</NavItem>
                      <NavItem className="nav-link" to="/contact">contact</NavItem>
                   
                    
                       
               
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                      <div className="dropdown-menu" aria-labelledby="dropdown01">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
           </nav>

        );
    }
}
 
export default Header;