import React, { Component } from 'react';
import Carousel from '../items/Carousel';
import Tabs from '../items/Tabs';

class Home extends Component {
    render() {
    	
        return (
          <div>
           <Carousel />
           <Tabs />
          </div>
        );
    }
}
 
export default Home;