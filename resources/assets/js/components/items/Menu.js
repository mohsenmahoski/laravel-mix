import React, { Component } from 'react';
import  NavItem  from './NavItem';

export default class Menu extends Component{
	constructor(props){
		super(props);
		this.state={
			display:'none'
		}
	}
	_handleItems(item , index){
         
          return(
                <NavItem to={item.to} key={index} onClicking={item.onClicking} extraclass={'hvr-sweep-to-left'}>
                	 {item.title}
                </NavItem>
          	);
	}
	render(){
	const{title,data} = this.props;
	return(
		
			<div className="dropdown-submenu"  onMouseEnter={()=>{this.setState({display:'block'})}} onMouseLeave={()=>{this.setState({display:'none'})}}>
				<li className="dropdown-link">
					<a className="nav-link" rel="tooltip" href="#">{title}  <i className="material-icons">contacts</i></a>
				</li>
                <div className="login-menu" style={{ display:this.state.display }}>
                     {data.map(this._handleItems.bind(this))}
				</div>
			</div>
         
		);
    }
}
