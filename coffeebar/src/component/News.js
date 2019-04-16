import React, { Component } from 'react';
import Slider from './Slider/Slider'

class News extends Component {
    render() {
        return ( 
            <div className="news container">
                <p>Nowości CoffeeBar</p>
                <Slider />
            </div>
        );
    }
}
 
export default News;