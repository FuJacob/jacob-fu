import React from 'react';

const Carousel = () => {
  return (
   <div className="flex justify-center mt-[-500]">
        <div className="carousel rounded-box rounded-3xl max-w-6xl carousel-center">
          <div className="carousel-item">
            <img
              src="/carouselpics/2.jpg"
              className="w-[42rem] h-[48rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/1.jpg"
              className="w-[42rem] h-[48rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/3.jpg"
              className="w-[42rem] h-[48rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/4.jpg"
              className="w-[42rem] h-[48rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/5.jpg"
              className="w-[42rem] h-[48rem] object-cover object-[right]" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/6.jpg"
              className="w-[42rem] h-[48rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/7.jpg"
              className="w-[42rem] h-[48rem] object-cover object-[left] " // Fixed size
            />
          </div>
        </div>
   </div>
  );
}

export default Carousel;
