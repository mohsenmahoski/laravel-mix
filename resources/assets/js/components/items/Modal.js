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
		return(
	          <div className="modal fade in" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display }}>
			    <div className="modal-dialog">
			        <div className="modal-content">
			            <div className="modal-header">
			                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
			                    <i className="material-icons">clear</i>
			                </button>
			                <h4 className="modal-title">Modal title</h4>
			            </div>
			            <div className="modal-body">
			                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
			                </p>
			            </div>
			            <div className="modal-footer">
			                <button type="button" className="btn btn-default btn-simple">Nice Button</button>
			                <button type="button" className="btn btn-danger btn-simple" data-dismiss="modal" onClick={()=>this._clear()}>Close</button>
			            </div>
			        </div>
			    </div>
			</div>
			);
	}
}