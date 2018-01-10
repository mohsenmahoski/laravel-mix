import React ,{Component} from 'react';


export default class FailMessage extends Component{
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
	componentWillMount(){
		this.setState({
			display:this.props.display
		});
	}
	_close(){
		this.setState({
			display:'none',
		});
	}
	render(){

		return(
				<div className="alert alert-danger" style={{ display:this.state.display }}>
	                 <div className="container-fluid rtl">
	                     <div className="alert-icon">
	                        <i className="material-icons">error_outline</i>
	                    </div>
	                    <button type="button" className="close" onClick={()=>this._close()}>
	                        <span aria-hidden="true"><i className="material-icons">clear</i></span>
	                    </button>
	                     {this.props.children}
	                </div>
	            </div>
	            
			);
	}
}