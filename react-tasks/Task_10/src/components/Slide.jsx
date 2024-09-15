// Slide.jsx
import React from 'react';

const Slide = ({ image, title, description }) => {
  return (
    <div className="slide-content">
      <img src={image} alt={title} className="slide-image" />
      <div className="slide-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Slide;
