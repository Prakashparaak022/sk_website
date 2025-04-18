import { Box } from "@mui/material";
import React from "react";
import BannerImage from "../../../assets/images/Banner.jpg";

const HeroBanner = () => {
  return (
    <Box>
      <Box
        component={"img"}
        src={BannerImage}
        alt="banner_image"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
  );
};

export default HeroBanner;
