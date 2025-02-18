import { Box, Container, Grid2 as Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import rightArrow from "../../assets/images/rightArrow.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function GameCarousel(props) {
  const { imageList } = props;
  const { title } = props;
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 540,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container maxWidth="none">
      <Grid sx={{ margin: "0px 20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
          }}>
          <h1 className="sliderTitle">{title}</h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <p className="sliderSubTitle">View More</p>
            <ArrowForwardIosIcon
              className="rightArrow"
              sx={{ width: "12px", marginTop: "3px" }}
            />
          </Box>
        </Box>
        <Slider {...settings}>
          {imageList &&
            imageList.map((image, index) => (
              <div key={index} className="gameCarousel">
                <img src={image} alt="Game_Images" />
              </div>
            ))}
        </Slider>
      </Grid>
    </Container>
  );
}

export default GameCarousel;
