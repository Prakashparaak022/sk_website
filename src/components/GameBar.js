import React, { useState } from "react";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import CasinoIcon from "@mui/icons-material/Casino";
import SportsIcon from "@mui/icons-material/Sports";
import PhishingIcon from "@mui/icons-material/Phishing";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import {
  AppBar,
  Box,
  Divider,
  Grid2 as Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import evo from "../assets/images/evo.png";
import cricket from "../assets/images/cricket.png";
import fire from "../assets/images/fire.png";

import gameImage1 from "../assets/images/game_image_1.png";
import gameImage2 from "../assets/images/game_image_2.png";
import gameImage3 from "../assets/images/game_image_3.png";

function GameBar() {
  const icons = [
    { name: "Cricket", icon: gameImage1, image: fire },
    { name: "Home", icon: gameImage2, image: cricket },
    { name: "Sports", icon: gameImage3, image: evo },
    { name: "PhishingIcon", icon: gameImage1, image: fire },
    { name: "Playing", icon: gameImage2, image: cricket },
    { name: "SportsSoccer", icon: gameImage3, image: evo },
    { name: "SportsBaseball", icon: gameImage1, image: fire },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        display: { xs: "none", md: "flex" },
        background: "#1d1d1d",
        padding: "0 20px",
      }}>
      <Toolbar
        className="gameToolbar"
        sx={{
          height: "10px",
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
        }}>
        {icons.map((item) => (
          <Box
            key={item.name}
            className="gameBar"
            sx={{ display: "flex", alignItems: "center" }}>
            <Grid
              className="gameBarBanner"
              container
              alignItems={"center"}
              spacing={1}>
              <img
                src={item.icon}
                alt="game_bar_icon"
                style={{ width: "36px" }}
              />
              <Typography>{item.name}</Typography>
            </Grid>
            <img
              src={item.image}
              className="gameBarImage"
              alt="game_bar_image"
              style={{ textAlign: "center", width: "36px" }}
            />
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default GameBar;
