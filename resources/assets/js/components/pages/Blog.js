import React ,{Component} from 'react';
import axios from 'axios';
import CardBlog from '../items/CardBlog';
import InfiniteScroll from 'react-infinite-scroller';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';
import Socials from '../items/Socials';
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
		      	console.log(response.data);
		      	const {current_page , last_page ,data} = response.data.posts;
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
                    <Header redirect={this.props.location} />
		                       	<div className="header header-filter">
							        <div className="container flex-center">
							                <div className="col-md-12 flex-center" style={{ background:'url("/images/theme/typing.jpg")',minHeight:'325px' }}>  
							                    <div className="shape"></div>
							                    <div className="caption text-center">
							                        <h3 className="text-center">اخبار و رویدادهای دنیای فناوی اطلاعات</h3>
							                        <small>جدیدترین خبرها</small>
							                    </div>
							                </div>
							        </div>
		     					</div>
							   	<div className="row">
							   	   <div className="container">
                                           <div className="main main-raised">
											<Socials />
					                     	<div className="section-fluid blogs">
						                       <div className="container"> 
														<div className='col-md-12' >
															<InfiniteScroll
															     pageStart={1}
															     loadMore={this.loadMore.bind(this)}
															     hasMore={this.state.hasMore}
															     threshold={0.005}
															     className="row flex-center"	
															     loader={
															       <div className="col-md-12">
																     <div className='sweet-loading'>
															                    <DotLoader
															                      color={'#123abc'} 
															                      loading={true} 
															                    />
															         </div>
												                   </div>
												                 }											>
																{ articles.map((card , index)=><CardBlog card={card}  key={index} /> ) }
															</InfiniteScroll>
														</div>
												</div>
											</div>
										</div>
									   	   </div>
							   	</div>
						<Footer />
                    </div>
			);
	}
}