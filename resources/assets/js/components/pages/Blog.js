import React ,{Component} from 'react';
import axios from 'axios';
import Card from '../items/Card';
import InfiniteScroll from 'react-infinite-scroller';

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
		 const next = this.state.nextPage;
		
		 axios.get('/blog?page='+next)
		      .then(response=>{
		      	const {data ,last_page } = response.data;
		      	
		      	this.setState(prevState=>({
		      		article:[ ...prevState.article , ...data],
		      		hasMore: (this.state.nextPage < last_page) ? true : false,
		      		nextPage : this.state.nextPage +1,
		      	}) ) ;
		      }).catch(error=>{
		      	console.log(error);
		      });
		     
	}
	render(){
	   
	    const articles= this.state.article;
	    
		return(

			<div className='col-md-12' >
				<InfiniteScroll
				    pageStart={0}
				    loadMore={this.loadMore.bind(this)}
				    hasMore={this.state.hasMore}
				    loader={<div className="loader">Loading ...</div>}
					>
					{ articles.map((card , index)=><Card card={card}  key={index} /> ) }
				</InfiniteScroll>
			</div>
			);
	}
}