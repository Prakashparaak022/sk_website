import { Box, Button, Grid2 as Grid, useTheme } from "@mui/material";
import React, { useState } from "react";

import hoveredImage1 from "../../assets/images/hovered_image_1.png";
import hoveredImage2 from "../../assets/images/hovered_image_2.png";
import hoveredImage3 from "../../assets/images/hovered_image_3.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function NavLinks() {
  const theme = useTheme();
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);

  const navLinksList = [
    {
      name: "Home",
      dropDown: "false",
    },
    {
      name: "Promotions",
      dropDown: "true",
    },
    {
      name: "Sponsors",
      dropDown: "true",
    },
    {
      name: "Support",
      dropDown: "false",
    },
    {
      name: "Affiliate",
      dropDown: "true",
    },
    {
      name: "App Download",
      dropDown: "true",
    },
  ];

  const hoverImageList = [hoveredImage1, hoveredImage2, hoveredImage3];

  return (
    <>
      <Grid
        size={{ xs: 12, xl: 6, lg: 0 }}
        gap={1}
        sx={{
          display: { xl: "flex", lg: "none", xs: "none" },
          alignItems: "center",
        }}>
        {navLinksList.map((item, index) => (
          <Button
            key={index}
            className={
              theme.palette.mode === "dark" ? "darkNavBtn" : "lightNavBtn"
            }
            sx={{ textTransform: "none", fontSize: "16px", color: "#fff" }}
            endIcon={
              item.dropDown === "true" ? (
                (activeHoverIndex == index) ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )
              ) : (
                ""
              )
            }
            onMouseEnter={() => setActiveHoverIndex(index)}
            onMouseLeave={() => setActiveHoverIndex(null)}>
            {item.name}
          </Button>
        ))}
      </Grid>

      {/* Hover Part */}
      <Box
        onMouseLeave={() => setActiveHoverIndex(null)}
        sx={{
          position: "absolute",
          top: "70px",
          left: 0,
          right: 0,
          display: activeHoverIndex ? "flex" : "none",
          justifyContent: "space-around",
          backgroundColor: "#000",
          padding: "20px",
          zIndex: 1,
          transition: "0.3s ease",
        }}>
        {hoverImageList.map((image, index) => (
          <img
            key={index}
            src={image}
            className="hoveredImage"
            alt="hovered_image"
            style={{
              width: "25%",
              transition: "0.3s",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </>
  );
}

export default NavLinks;
