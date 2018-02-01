import React,{Component} from 'react';


class LatestBlogs extends Component{
	_carouselitem(item , index){
		if (index == 0 ){
			return(
            	    <div className="carousel-item active" key={index}>
			           <div className="flex-center">
			              {item.map((card , i)=>this._card(card , i ))}                                        	
			           </div>   
				    </div>   
	  	   );
		}
	    return(
            	<div className="carousel-item" key={index}>
			           <div className="flex-center">
			              {item.map((card , i)=>this._card(card , i ))}
			           </div>   
				</div>   
	  	);
	}
	_card(item,index){
          return(
                     <div className="card" key={index}>
								<img className="card-img-top" src={`/images/posts/${item.image}`} alt={item.title} />
								<div className="card-body">
											
											 <p className="rtl" dangerouslySetInnerHTML={{__html: `${item.body.substr(3, 200)}...`}}></p>
											 <a href={`/blog/${item.id}`} className="btn btn-outline-secondary">ادامه خبر</a>
								</div>
					 </div>
          	);
	}
	render(){
		const{posts} = this.props;
		return(
               <div className="section news">
                                                <div className="col-12 text-center">
                                                        <blockquote className="blockquote text-center">
                                                          <h1 className="title mb-0">آخرین مطالب و خبر ها</h1>
                                                          <footer className="blockquote-footer"><small>خبرهای دنیای فناوری اطلاعات</small></footer>
                                                        </blockquote>
                                                </div>
                                                <div className="row">
                                                     <div className="container ">
                                                            <div id="latestblogs" className="carousel slide" data-ride="carousel">
															  <ol className="carousel-indicators">
															    <li data-target="#latestblogs" data-slide-to="0" className="active"></li>
															    <li data-target="#latestblogs" data-slide-to="1"></li>
															    <li data-target="#latestblogs" data-slide-to="2"></li>
															  </ol>
															  <div className="carousel-inner">
															    {posts !== [] ? posts.map( (item , index)=>this._carouselitem(item , index) ) : null }
															  </div>
															
															</div>
                                                     </div>
                                                </div>            
               </div>
			);
	}
}


export default LatestBlogs;



