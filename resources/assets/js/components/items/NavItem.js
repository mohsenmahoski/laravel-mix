import React, { Component } from 'react';
import { Link , Route  } from 'react-router-dom'

class NavItem extends Component {
    render() {
      const {to , children , activeOnlyWhenExact , dataOriginalTitle,extraclass , onClicking} = this.props;
    
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
              <li className={match ? `disable active nav-item ${extraclass}` : `nav-item ${extraclass}`} onClick={onClicking}>
                 <Link className="nav-link pull-right" rel="tooltip" data-placement="bottom" data-original-title={dataOriginalTitle}  to={to}>{children}</Link>
              </li>
            )}/>
        );
    }
}
 
export default NavItem;
