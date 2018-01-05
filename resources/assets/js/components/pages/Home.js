import React, { Component } from 'react';
import Carousel from '../items/Carousel';
import Tabs from '../items/Tabs';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';

class Home extends Component {
    render() {
    	
        return (
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
     
						           <Carousel />
						           <Tabs />
                    </div>
                    <Footer />
            </div>
        );
    }
}
 
export default Home;