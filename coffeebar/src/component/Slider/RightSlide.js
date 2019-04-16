import React from 'react';

const RightSlide = (props) => {
  return (
    <div className="rightSlide" onClick={props.goToNextSlide}>
      <i className="fa fa-next-right fa-2x" aria-hidden="true">></i>
    </div>
  );
}

export default RightSlide;