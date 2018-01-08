import React ,{Component} from 'react';
import axios from 'axios';
import CardBlog from '../items/CardBlog';
import InfiniteScroll from 'react-infinite-scroller';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import { DotLoader } from 'react-spinners';


export default class Blog extends Component{
	constructor(props){
            super(props);
            this.state ={
            	article : [],
            	nextPage:1,
		      	hasMore:true,
            }
	}
	loadMore(){	
       
		
			 axios.get('/api/blog?page='+this.state.nextPage)
		      .then(response=>{
		      	const {current_page , last_page ,data} = response.data;
		      		this.setState(prevState=>({
				      		article:[ ...prevState.article , ...data],
				      		hasMore: ( current_page != last_page ) ? true : false,
				      		nextPage : current_page +1,
		      	    }) );
		      }).catch(error=>{
		      	console.log(error);
		      });

		     
	}
	render(){
	    const articles = this.state.article;
		return(
                    <div>
                    <Header />
		                       	<div className="header header-filter">
							        <div className="container">
							            <div className="row">
							                <div className="col-md-8 col-md-offset-2">
							                    <div className="brand">
							                        <h1 className="title white">وبی تک</h1>
							                        <div className="separator separator-danger">✻</div>
							                        <h3 className="text-center">مقالات</h3>
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
			                     	<div className="section-fluid">
				                       <div className="container"> 
												<div className='col-md-12' >
													<InfiniteScroll
													     pageStart={1}
													     loadMore={this.loadMore.bind(this)}
													     hasMore={this.state.hasMore}
													     threshold={0.005}
													     className="row"	
													     loader={<div className="col-md-12"><div className='sweet-loading'>
												                    <DotLoader
												                      color={'#123abc'} 
												                      loading={true} 
												                    />
												                  </div></div>}											>
														{ articles.map((card , index)=><CardBlog card={card}  key={index} /> ) }
													</InfiniteScroll>
												</div>
										</div>
									</div>
								</div>
						<Footer />
                    </div>
			);
	}
}