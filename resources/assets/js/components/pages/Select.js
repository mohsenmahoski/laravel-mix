import React, { Component } from 'react';

import Header from '../_partials/Header';
import Footer from '../_partials/Footer';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class Selected extends Component{
	constructor(props){
	    super(props);
	    this.state={
            value:'',
	    }
	}
    handleSelectChange(value) {
		this.setState({ value },console.log(this.state.value));

	}
	render(){
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
		                                        <h3 className="text-center">ما فقط یک وب سایت طراحی نمیکنیم،ما آنچه در ذهن ورویای شماست به واقعیت تبدیل میکنیم</h3>
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
		                             <div className="container">
														 <Select
													        name="form-field-name"
													        value={this.state.value}
													        onChange={this.handleSelectChange.bind(this)}
													        multi
													        options={[
													          { value: 'one', label: 'One' },
													          { value: 'two', label: 'Two'},
													        ]}
													      />	
										<button className="btn btn-primary" onClick={()=>{console.log(this.state)}}>Click</button>	   
				                    </div> 
		                    </div>
			     <Footer />
			     </div>
			);
	}
} 

















