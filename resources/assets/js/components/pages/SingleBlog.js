import React ,{Component} from 'react';
import axios from 'axios';


export default class SingleBlog extends Component{
	constructor(props){
		super(props);
		this.state={
			id:this.props.match.params.id,
			title:'',
			body:'',
			url:'',
		} 
		
	}
	componentDidMount(){
	      const id =  this.state.id;     
		  axios.post('/blog/'+id, {
			    id: id
			  })
			  .then((response) => {
			     console.log(response.data);
			     this.setState({
			     	title:response.data.title,
			     	body:response.data.body,
			     	image:response.data.image,
			     });
			  })
			  .catch((error) => {
			    console.log(error);
			  });
	            }
	render(){
		const {title,body,image} = this.state;
		return(
              <div className='col-md-4'>
               <img src={image} />
               <h1>{title}</h1>
               <p>{body}</p>
              </div>
			);
	}
}