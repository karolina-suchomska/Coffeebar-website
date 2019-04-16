import React from 'react';

const LeftSlide = (props) => {
  return (
    <div className="leftSlide" onClick={props.goToPrevSlide}>
      <i className="fa fa-next-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftSlide;