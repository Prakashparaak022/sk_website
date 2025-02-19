import {
  Box,
  Card,
  Container,
  Divider,
  Grid2 as Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import Slider from "react-slick";

function CardComponent(props) {
  const { title } = props;
  const { cardDetailsList } = props;

  const theme = useTheme();

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
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
    <Container maxWidth="none" className="scoreCard">
      <Grid sx={{ margin: "0px 20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
          }}>
          <h1
            className="sliderTitle"
            style={{
              color: theme.palette.text.primary,
            }}>
            {title}
          </h1>
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
          {cardDetailsList &&
            cardDetailsList.map((cardDetail, index) => (
              <Card
                key={index}
                className={`cardBox ${
                  theme.palette.mode === "dark" ? "darkCard" : "lightCard"
                }`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "320px !important",
                  marginLeft: "10px",
                  height: "203px !important",
                  padding: "0 10px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}>
                  <img src={cardDetail.image} style={{ width: "28px" }} />
                  <Typography
                    sx={{
                      maxWidth: "200px",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      fontSize: "15px",
                      lineHeight: "1.5",
                      color: theme.palette.text.highlight
                    }}>
                    {cardDetail.title}
                  </Typography>
                  <Typography>{cardDetail.time}</Typography>
                </Box>
                <Divider sx={{ mt: 1 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    alignItems: "center",
                  }}>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <cardDetail.icon
                      color={theme.palette.text.secondary}
                      fontSize="small"
                    />
                    <Typography>{cardDetail.teamA}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {cardDetail.teamAScore}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                    <cardDetail.icon
                      color={theme.palette.text.secondary}
                      fontSize="small"
                    />
                    <Typography>{cardDetail.teamB}</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {cardDetail.teamBScore}
                  </Typography>
                </Box>
                <Grid container spacing={2} sx={{ marginTop: "15px" }}>
                  <Grid
                    size={6}
                    className={`teamScore ${
                      theme.palette.mode === "dark"
                        ? "teamAScoreDark"
                        : "teamAScoreLight"
                    }`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                      borderRadius: "5px",
                    }}>
                    <Typography style={{ fontSize: "13px" }}>
                      Winner(H)
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                      {cardDetail.winnerHScore}
                    </Typography>
                  </Grid>
                  <Grid
                    size={6}
                    className={`teamScore ${
                      theme.palette.mode === "dark"
                        ? "teamBScoreDark"
                        : "teamBScoreLight"
                    }`}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                      borderRadius: "5px",
                    }}>
                    <Typography style={{ fontSize: "13px" }}>
                      Winner(A)
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                      {cardDetail.winnerAScore}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            ))}
        </Slider>
      </Grid>
    </Container>
  );
}

export default CardComponent;
