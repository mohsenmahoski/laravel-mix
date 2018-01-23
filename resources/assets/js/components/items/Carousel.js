import React, { Component } from 'react';


class Carsoul extends Component {
    render() {
    	
        return (
             <div className="section-fluid" id="carousel">
	            <div className="container-fluid text-center">
	                <div className="row">
	                    <div className="container-fluid pd-0">
	                        <div className="card card-raised card-carousel mb-15">
	                            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
	                                <div className="carousel slide" data-ride="carousel">
	                                    <ol className="carousel-indicators">
	                                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
	                                      
	                                        <li data-target="#carousel-example-generic" data-slide-to="1" className=""></li>
	                                       
	                                        <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>

	                                    </ol>

	                                  
	                                    <div className="carousel-inner">
	                                                    <div className="item active">
	                                                        <img src="images/slider/1.jpg" alt="Awesome Image" />
	                                                        <p  className="ease-in caption">خلق ایده های نوین  واستفاده از افراد با تجربه</p>
	                                                    </div>
	                                                    <div className="item">
	                                                        <img src="images/slider/2.jpg" alt="Awesome Image" />
	                                                         <p  className="ease-in caption">طراحی واکنش گرا و بهینه صفحات</p>
	                                                    </div>
	                                                    <div className="item">
	                                                        <img src="images/slider/3.jpg" alt="Awesome Image" />
	                                                         <p  className="ease-in caption">پشتیبانی ، عیب یابی و بهبود رنک وب سایت</p>
	                                                    </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                      
	                    </div>
	                </div>
	            </div>
    		</div>
        );
    }
}
 
export default Carsoul;