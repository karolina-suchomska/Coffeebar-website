import React, { Component } from 'react';
import SlideIcon from './SlideIcon';

class Slides extends Component {
    render() {
        return ( 
            <div className="slides">
                <SlideIcon />
                <SlideIcon />
                <SlideIcon />
            </div>
        );
    }
}
 
export default Slides;