import React ,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class CardBlog extends Component{

	render(){
		
            const {title,body,slug,image , id} = this.props.card;
            const subBody = body.substr(1, 20);
		return(
             <div className="col-md-4 mb-10">
               <div className="card">
                           <Link to={'/blog/'+id} >
                                <div className="image" style={{ backgroundImage: `url( images/posts/${image} )` ,  backgroundPosition:'center center' , backgroundSize:'cover' }}>
                                               
                                                <div className="filter filter-white">
                                                    <button type="button" className="blogs btn btn-sm btn-primary btn-round btn-fill">
                                                        <i className="material-icons">keyboard_backspace</i> ادامه مطلب
                                                    </button>
                                                </div>
                                 </div>
                           </Link>
                           <div className="content min-height-235">
                                       <a href="http://localhost:8080/blog/ergergerg">
                                            <div className="row pad-r-10">
                                              <small className="pull-right text-muted">تاریخ انتشار: Dec J,2017
                                              </small>
                                            </div>
                                            <h3 className="blog-title text-right">
                                                        { title }
                                            </h3>
                                                                                                   
                                                 
                                            <p className="blog-desc text-right">
                                                       {subBody}
                                            </p>      
                                      </a>
                                      <a className="text-info" href="#">
                                                   <small>دمو</small>
                                      </a>
                                      <div className="footer mt-10">
                                                    <div className="author">
                                                        <a className="card-link" href="#">
                                                           <img src="http://localhost:8080/images/theme/avatar/face-4.jpg" alt="..." className="avatar"/>
                                                           <span> Jayz </span>
                                                        </a>
                                                    </div>
                                                     <div className="stats pull-right">
                                                         <a className="card-link" href="#">
                                                            <i className="fa fa-heart"></i> 92
                                                         </a>
                                                    </div>
                                                    <div className="stats pull-right">
                                                        <a className="card-link" href="#">
                                                            <i className="fa fa-comment"></i> 41
                                                        </a>
                                                    </div>
                                     </div>
                           </div>                    
               </div> 
            </div>
			);
	}
}