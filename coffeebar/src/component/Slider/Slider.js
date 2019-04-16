import React, { Component } from 'react';
import ActivSlide from './ActivSlide';
import Slide from './Slide';
import Slides from './Slides';

class Slider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [
              require('./img/coffee1.jpg'),
              require('./img/coffee2.jpg'),
              require('./img/coffee3.jpg'),
            ],
            currentIndex :  0,
            translateValue: 0,
        }
      }


      goToPrevSlide = () => {

      }
    
      goToNextSlide = () => {
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
      }

  render() {
    return (
      <div className="slider">    

        {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }

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