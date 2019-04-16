import React, { Component } from 'react';
import Slide from './Slide';

class ActivSlide extends Component {
    render() {
        return ( 
            <div className="Slide">
            <Slide />
                <p>Aktywny Slide</p>
            </div>
        );
    }
}
 
export default ActivSlide;