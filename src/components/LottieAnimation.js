import { useState, useEffect } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import Lottie from "lottie-react";

export const LottieAnimation = (props) => {
  const { animationData } = props;
  return (
      <Box sx={{width:"60px"}}>
        <Lottie
          animationData={animationData}
          loop={true}
        />
      </Box>
  );
};
