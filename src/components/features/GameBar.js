import React, { useState } from "react";
import SportsCricketTwoToneIcon from '@mui/icons-material/SportsCricketTwoTone';
import SportsGymnasticsTwoToneIcon from '@mui/icons-material/SportsGymnasticsTwoTone';
import CasinoIcon from "@mui/icons-material/CasinoTwoTone";
import SportsIcon from "@mui/icons-material/SportsTwoTone";
import PhishingIcon from "@mui/icons-material/PhishingTwoTone";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseballTwoTone";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccerTwoTone";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid2 as Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import evo from "../../assets/images/evo.png";
import cricket from "../../assets/images/cricket.png";
import fire from "../../assets/images/fire.png";

import gameImage1 from "../../assets/images/game_image_1.png";
import gameImage2 from "../../assets/images/game_image_2.png";
import gameImage3 from "../../assets/images/game_image_3.png";
import footballAnimation from "../../assets/animation/football_animation.json";
import volleyBallAnimation from "../../assets/animation/volley_ball_animation.json";
import ballAnimation from "../../assets/animation/ball_animation.json";
import cricketAnimation from "../../assets/animation/cricket_animation.json";
import casinoAnimation from "../../assets/animation/casino_animation.json";
import playingAnimation from "../../assets/animation/playing.json";
import soccerAnimation from "../../assets/animation/soccer_animation.json";


import { LottieAnimation } from "../LottieAnimation";

function GameBar() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);
  const icons = [
    { name: "Casino", icon: PhishingIcon, image: fire, animation: casinoAnimation, animationSize : "50px" },
    { name: "Football", icon: SportsCricketTwoToneIcon, image: fire, animation: footballAnimation, animationSize : "40px"},
    { name: "Cricket", icon: SportsIcon, image: evo, animation: cricketAnimation, animationSize : "45px"},
    { name: "SportsSoccer", icon: SportsBaseballIcon, image: evo, animation: soccerAnimation, animationSize : "30px" },
    { name: "Playing", icon: CasinoIcon, image: cricket, animation: playingAnimation, animationSize : "60px" },
    { name: "SportsBaseball", icon: SportsSoccerIcon, image: fire, animation: volleyBallAnimation, animationSize : "30px" },
  ];

  return (
    <AppBar
      className="gameBarContainer"
      position="static"
      sx={{
        display: { xs: "none", md: "flex" },
        padding: "0 20px",
        background:
          theme.palette.mode === "dark"
            ? "#323738"
            : "#ffffff",
            boxShadow:"none",
        position:"relative"
      }}>
      <Toolbar
        className="gameToolbar"
        sx={{
          height: "10px",
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
        }}>
        {icons.map((item, index) => (
          <Box
            key={item.name}
            className= {`gameBar ${theme.palette.mode === "dark" ? "darkGameBar":  "lightGamebar"}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            sx={{ display: "flex", alignItems: "center" }}>
            <Grid
              container
              alignItems={"center"}
              spacing={1}>
                
                <Box sx={{mt:"10px"}}>
                <LottieAnimation width={(activeIndex == index ? "60px" : item.animationSize)} animationData={item.animation}/>
                </Box>
              {/* <IconButton
                key={index}
                alt="game_bar_icon"
                style={{ color:"#fff", display : (activeIndex == index ? "none" : "flex")}}
              >
                <item.icon />
              </IconButton> */}
              {/* <img
                onMouseLeave={() => setActiveIndex(null)}
                src={item.image}
                alt="game_bar_image"
                style={{
                  width:"36px",
                  textAlign: "center",
                  display: activeIndex == index ? "none" : "flex",
                }}
              /> */}
              <Typography sx={{fontSize:"16px", fontWeight:"bold", display: activeIndex == index ? "none" : "flex"}}>{item.name}</Typography>
            </Grid>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default GameBar;
