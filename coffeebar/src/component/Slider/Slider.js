import React, { Component } from 'react';
import ActivSlide from './ActivSlide';
import Slides from './Slides';

class Slider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [],
            index: 0,
            translateValue: 0,
        }
      }

  render() {
    return (
      <div className="slider">    
        <div className="leftSlider">
            <ActivSlide />
            <Slides />
        </div>
        <div className="rightSlider">
        <p>Opis</p>
        </div>
       
      </div>
    );
  }
}
export default Slider;