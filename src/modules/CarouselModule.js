import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider_image_1 from "../assets/images/slider-image-1.jpg";
import slider_image_2 from "../assets/images/slider-image-2.jpg";
import slider_image_3 from "../assets/images/slider-image-3.jpg";


const CarouselModule = () => {
    return (
       <Carousel className="carousel">
        <Carousel.Item>
            <img 
              src={slider_image_1}
              className="d-block w-100" 
              alt=""
            />
        </Carousel.Item>
        <Carousel.Item>
            <img 
              src={slider_image_2} 
              className="d-block w-100" 
              alt=""
            />
        </Carousel.Item>
        <Carousel.Item>
            <img 
              src={slider_image_3} 
              className="d-block w-100" 
              alt=""
            />
        </Carousel.Item>
       </Carousel> 
    )
};

export default CarouselModule;
