import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

class Slider extends Component {
  render() {
    const images = [
      { url: require('./img/coffee1.jpg')},
      { url: require('./img/coffee2.jpg')},
      { url: require('./img/coffee3.jpg')},
    ];
    
    return (
      <div className="slider">  
        <SimpleImageSlider
          width={400}
          height={600}
          images={images}
          />
      </div>
    );
  }
}
export default Slider;