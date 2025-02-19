import { useState, useEffect } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import Lottie from "lottie-react";

export const LottieAnimation = (props) => {
  const { animationData } = props;
  const { width } = props;
  return (
      <Box sx={{width: width}}>
        <Lottie
          animationData={animationData}
          loop={true}
        />
      </Box>
  );
};
