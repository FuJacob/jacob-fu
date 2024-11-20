import React from 'react';

const Carousel = () => {
  return (
   <div className="flex justify-center">
        <div className="carousel rounded-box rounded-3xl carousel-center">
          <div className="carousel-item">
            <img
              src="/carouselpics/2.jpg"
              className="w-[24rem] h-[32rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/1.jpg"
              className="w-[24rem] h-[32rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/3.jpg"
              className="w-[24rem] h-[32rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/4.jpg"
              className="w-[24rem] h-[32rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/5.jpg"
              className="w-[24rem] h-[32rem] object-cover object-[right]" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/6.jpg"
              className="w-[24rem] h-[32rem] object-cover" // Fixed size
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carouselpics/7.jpg"
              className="w-[24rem] h-[32rem] object-cover object-[left] " // Fixed size
            />
          </div>
        </div>
   </div>
  );
}

export default Carousel;
