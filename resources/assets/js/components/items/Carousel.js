import React, { Component } from 'react';


class Carsoul extends Component {
    render() {
    	
        return (
			   <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
																    <li data-target="#carouselExampleSlidesOnly" data-slide-to="0" className="active"></li>
																    <li data-target="#carouselExampleSlidesOnly" data-slide-to="1"></li>
																    <li data-target="#carouselExampleSlidesOnly" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
															          <img src="images/slider/2.jpg" alt="Awesome Image" />
													                  <p  className="ease-in caption">طراحی واکنش گرا و بهینه صفحات</p>
						</div>
						<div className="carousel-item">
															           <img src="images/slider/1.jpg" alt="Awesome Image" />
													                   <p  className="ease-in caption">خلق ایده های نوین  واستفاده از افراد با تجربه</p>
						</div>
						<div className="carousel-item">
															           <img src="images/slider/3.jpg" alt="Awesome Image" />
													                   <p  className="ease-in caption">پشتیبانی ، عیب یابی و بهبود رنک وب سایت</p>
						</div>
					</div>
			  </div>
        );
    }
}
 
export default Carsoul;