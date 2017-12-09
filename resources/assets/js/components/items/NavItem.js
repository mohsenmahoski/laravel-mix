import React, { Component } from 'react';
import { Link , Route  } from 'react-router-dom'

class NavItem extends Component {
    render() {
      const {to , children , activeOnlyWhenExact} = this.props;
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
              <li className={match ? 'active nav-item' : ' nav-item'}>
                 <Link className="nav-link" to={to}>{children}</Link>
              </li>
            )}/>
        );
    }
}
 
export default NavItem;
