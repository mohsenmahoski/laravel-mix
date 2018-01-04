import React, { Component } from 'react';

export default class Modal   extends Component{
     constructor(props){
          super(props);
          this.state={
          	display:'none'
          }
     }
     componentWillReceiveProps(nextProps){
         this.setState({
			display:nextProps.display
		});
     }
     _clear(){
     	this.setState({
     		display:'none'
     	});
     }
	render(){
		const {display} = this.state;
		const {children} = this.props;
		return(
	          <div className="modal fade in"  tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display }} >
			    <div style={{ position:'absolute' , width:'100%' , height:'100%' , background:'#00000082' , top:'0' , right:'0' }} onClick={()=>this._clear()}></div>
			    <div className="modal-dialog" >
			        <div className="modal-content">
			            <div className="modal-header">
			                <button type="button" onClick={()=>this._clear()} className="close" data-dismiss="modal" aria-hidden="true">
			                    <i className="material-icons">clear</i>
			                </button>
			            </div>
			            <div className="modal-body container-fluid">
			              <div className="login-card">
                                {children}
			              </div>
			            </div>
			            <div className="modal-footer">
			                
			            </div>
			        </div>
			    </div>
			</div>
			);
	}
}