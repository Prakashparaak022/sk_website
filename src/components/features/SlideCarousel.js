import React from "react";
// import carousel_image_1 from "../assets/images/carouselA_1.jpg";
import carousel_image_1 from "../../assets/images/carouselA_1.jpg";
import carousel_image_2 from "../../assets/images/carouselA_2.jpg";
import carousel_image_3 from "../../assets/images/carouselA_3.jpg";
import carousel_image_4 from "../../assets/images/carouselA_4.jpg";

import Slider from "react-slick";
import { Container, useTheme } from "@mui/material";
import '../../assets/css/Slider.css'

function Carousel() {
  const theme = useTheme();
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
    <Container className="slider" maxWidth="none" sx={{borderTop:"1px solid #fbfbfb14",
      background: theme.palette.mode === "dark" ? "#1c1c1c" : "#ffffff",
    }}>
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
