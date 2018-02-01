import React , {Component} from 'react';

export default class Message extends Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(this.props);
		const{children,height,display}=this.props;
		return(
                   <div className="row">
                   	<div className="container" style={{ position:'relative'}}>
                   		 <div className="message text-center" style={{ height:`${height}px` }}>
                           <div style={{ display:display }}>{children}</div>
                         </div>
                   	</div>
                   </div>
			);
	}
}