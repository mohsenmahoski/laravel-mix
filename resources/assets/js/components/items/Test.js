import React ,{Component} from 'react';
import TinyMCE from 'react-tinymce';
import Header from '../_partials/Header';
import Footer from '../_partials/Footer';

export default class Test extends Component{
	handleEditorChange(e) {
	    console.log(e.target.getContent());
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
																    <div className="row">
																      
																       <TinyMCE
																        content="<p>This is the initial content of the editor</p>"
																        config={{
																          plugins: 'autolink link image lists print preview',
																          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
																        }}
																        onChange={this.handleEditorChange.bind(this)}
																      />

																    </div>
				                    </div> 
		                    </div>
			     <Footer />
			     </div>
			);
}
}