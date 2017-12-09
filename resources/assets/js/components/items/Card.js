import React ,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Card extends Component{

	render(){
		
            const {title,body,slug,image , id} = this.props.card;
		return(
              <div className='col-md-4'>
                <img src={image} />
                <Link to={'/blog/'+id} >{title}</Link>
                <p className='post-body' >{body}</p>
              </div>
			);
	}
}