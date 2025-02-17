import { Box, Grid2 as Grid, Paper, Typography } from "@mui/material";
import React from "react";

function Heropage() {
  const liveCasinoItems = [
    {
      name: "Crazy Time",
      image: "https://tmhwp.evo-games.com/tablePicture/dc3_ct_med?size=M",
    },
    {
      name: "Auto-Roulette",
      image:
        "https://tmhwp.evo-games.com/tablePicture/gen1_ss_thumb_med?size=M",
    },
    {
      name: "Lightning Roulette",
      image: "https://tmhwp.evo-games.com/tablePicture/lightr1_imrs_med?size=M",
    },
    {
      name: "Lighting Storm",
      image:
        "https://tmhwp.evo-games.com/tablePicture/gen1_ss_thumb_med?size=M",
    },
    {
      name: "Lightning Roulette",
      image: "https://tmhwp.evo-games.com/tablePicture/lightr1_imrs_med?size=M",
    },
    {
      name: "Crazy Time",
      image: "https://tmhwp.evo-games.com/tablePicture/dc3_ct_med?size=M",
    },
  ];

  const instantGamesItems = [
    {
      name: "Game 1",
      image:
        "https://www.mk2031.com:6443/api/ImageOptimizer/w=640&q=80/https%3A%2F%2Fstatic.abc1txsa.com%2Fimages%2Fnew_public%2Fweb%2Fbg%2Ffd%2Fcs%2Fcsb3ni1s1gueqq719ro0_163329.jpg",
    },
    {
      name: "Game 2",
      image:
        "https://www.mk2031.com:6443/api/ImageOptimizer/w=750&q=80/https%3A%2F%2Fstatic.abc1txsa.com%2Fimages%2Fnew_public%2Fweb%2Fbg%2Ffd%2Fcs%2Fcsb3o270pgps0o7g7q30_296038.jpg",
    },
    {
      name: "Game 3",
      image:
        "https://www.mk2031.com:6443/api/ImageOptimizer/w=640&q=80/https%3A%2F%2Fstatic.abc1txsa.com%2Fimages%2Fnew_public%2Fweb%2Fbg%2Ffd%2Fcs%2Fcsb3oo9s1gueqq719rtg_756200.jpg",
    },
    {
      name: "Game 4",
      image:
        "https://www.mk2031.com:6443/api/ImageOptimizer/w=640&q=80/https%3A%2F%2Fstatic.abc1txsa.com%2Fimages%2Fnew_public%2Fweb%2Fbg%2Ffd%2Fcs%2Fcsb3oo9s1gueqq719rtg_756200.jpg",
    },
    {
      name: "Game 1",
      image:
        "https://www.mk2031.com:6443/api/ImageOptimizer/w=640&q=80/https%3A%2F%2Fstatic.abc1txsa.com%2Fimages%2Fnew_public%2Fweb%2Fbg%2Ffd%2Fcs%2Fcsb3ni1s1gueqq719ro0_163329.jpg",
    },
    {
      name: "Game 2",
      image:
        "https://www.mk2031.com:6443/api/ImageOptimizer/w=750&q=80/https%3A%2F%2Fstatic.abc1txsa.com%2Fimages%2Fnew_public%2Fweb%2Fbg%2Ffd%2Fcs%2Fcsb3o270pgps0o7g7q30_296038.jpg",
    },
  ];

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}>

      <h1 style={{ color: "#fff" , textAlign: "left"}}>
        Live Casino
      </h1>
      <Grid container item xs={12} spacing={3}>
        {liveCasinoItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={6}
              sx={{
                width: "200px",
                height: "200px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
              }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  textAlign: "center",
                  padding: "10px",
                }}>
                <Typography variant="h6">{item.name}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <h1 style={{ color: "#fff" , textAlign: "left"}}>
        Instant Games
      </h1>
      <Grid container item xs={12} spacing={3}>
        {instantGamesItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={6}
              sx={{
                width: "100%",
                height: "200px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
              }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  textAlign: "center",
                  padding: "10px",
                }}>
                <Typography variant="h6">{item.name}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Heropage;
