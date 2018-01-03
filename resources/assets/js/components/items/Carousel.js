import React, { Component } from 'react';


class Carsoul extends Component {
    render() {
    	
        return (
        
             <div className="section-fluid" id="carousel">
	            <div className="container-fluid text-center">
	                <div className="row">
	                    <div className="col-md-8">

	                      
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
	                                                    </div>
	                                                    <div className="item">
	                                                        <img src="images/slider/2.jpg" alt="Awesome Image" />
	                                                    </div>
	                                                    <div className="item">
	                                                        <img src="images/slider/3.png" alt="Awesome Image" />
	                                                    </div>
	                                       
	                                    </div>

	                                   
	                                    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
	                                        <i className="material-icons">keyboard_arrow_left</i>
	                                    </a>
	                                    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
	                                        <i className="material-icons">keyboard_arrow_right</i>
	                                    </a>
	                                </div>
	                            </div>
	                        </div>
	                      
	                    </div>
	                    
                    <div className="col-md-4 col-xs-12">
	                      <a href=""  className="mask item-banner mb-20">
	                            	<img  src="images/theme/banner1.jpg" alt="Rounded Image" className="banner  img-responsive" />
	                                <div className="fade-caption">  
	                                    <h5 className="caption-title text-right">یک فروشگاه اینترنتی موفق چه امکاناتی دارد؟</h5>  
	                                    
	                                    <p className="text-right">یک فروشگاه اینترنتی برا ی موفقیت نیاز به فاکتور هایی خاص  نظیر سرعت اجرایی بالا ، ظاهری زیبا و کاربر پسند و..</p>  
	                                </div>  
	                       </a>
                           <a href=""  className="mask item-banner">
                                <img  src="images/theme/banner2.jpg" alt="Rounded Image" className="banner  img-responsive" />
                                <div className="fade-caption">  
                                    <h5 className="caption-title mb-20 text-right" >چطور کار وتخصص خود را به دیگران معرفی کنیم؟</h5>  
                                    <p className="text-right">با داشتن وب سایتی حرفه ای موفقیت کار خود را تضمین کنید...</p>  
                                </div>  
                           </a>
                      
                     
                    </div>
	                </div>
	            </div>
    		</div>
        );
    }
}
 
export default Carsoul;