import React from "react";
import carousel_image_1 from "../assets/images/carouselA_1.jpg";
import carousel_image_2 from "../assets/images/carouselA_2.jpg";
import carousel_image_3 from "../assets/images/carouselA_3.jpg";
import carousel_image_4 from "../assets/images/carouselA_4.jpg";

import Slider from "react-slick";
import { Container } from "@mui/material";

function Carousel() {
  const carousel_image_list = [
    carousel_image_1,
    carousel_image_2,
    carousel_image_3,
    carousel_image_4,
  ];
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }]
  };

  return (
    <Container maxWidth="none" sx={{background:"rgba(21, 21, 21, 0.66)", borderTop:"1px solid #fbfbfb14"}}>
      <Slider {...settings} style={{margin:"0px 10px"}}>
        {carousel_image_list.map((image, index) => (
          <div key={index} className="carousel">
            <img src={image} alt="carousel_image"/>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Carousel;
