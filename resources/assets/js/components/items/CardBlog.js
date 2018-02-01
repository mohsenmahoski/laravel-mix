import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class CardBlog extends Component{
  
	render(){
            const {title,body,slug,image , id ,author,comments_count,time} = this.props.card;
          
		return(
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
                           <div className="content min-height-235 text-right">
                                       <a href="http://localhost:8080/blog/ergergerg">
                                            <div className="col-12">
                                              <small className="text-muted">تاریخ انتشار:{time}
                                              </small>
                                            </div>
                                            <h3 style={{ fontSize:'14px',fontWeight:'bold' }} className="blog-title text-right">
                                                        { title }
                                            </h3>
                                                                                                   
                                                 
                                           
                                                       
                                                       <p className="col-md-12 blog-content rtl" style={{ fontSize:'12px' }} dangerouslySetInnerHTML={{__html: `${body.substr(3, 200)}...`}}></p>
                                             
                                      </a>
                                      <a className="text-info" href="#">
                                                   <small>دمو</small>
                                      </a>
                                      <div className="footer mt-10 text-left">
                                                    <div className="author">
                                                        <a className="card-link" href="#">
                                                           <img src="/images/theme/avatar/face-4.jpg" alt="..." className="avatar"/>
                                                           <span> {author!= null ? author.name : 'admin'} </span>
                                                        </a>
                                                    </div>
                                                    <div className="stats pull-right">
                                                        <a className="card-link" href="#">
                                                            <i className="fa fa-comment"></i> {comments_count}
                                                        </a>
                                                    </div>
                                     </div>
                           </div>                    
               </div> 
			);
	}
}