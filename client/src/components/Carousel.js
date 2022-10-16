import React, { useState } from 'react';
import './Carousel.css';

function Carousel ({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newImage = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newImage);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newImage = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newImage);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='carousel-item'>
      <div className='left-arrow' onClick={goToPrevious}>
        ❰
      </div>
      <div className='right-arrow' onClick={goToNext}>
        ❱
      </div>
      <div className='carousel-img'>
        <img src={slides[currentIndex]} alt='rocket'></img>
      </div>
      <div className='dots-container'>
        {slides.map((_, slideIndex) => (
          <div
            className={`dots ${slideIndex === currentIndex ? 'active' : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;