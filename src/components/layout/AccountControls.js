import {
  Avatar,
  Button,
  Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { LottieAnimation } from "../LottieAnimation";
import giftAnimation from "../../assets/animation/gift.json";
import LocalAtmTwoToneIcon from "@mui/icons-material/LocalAtmTwoTone";
import CurrencyExchangeTwoToneIcon from "@mui/icons-material/CurrencyExchangeTwoTone";
import WalletTwoToneIcon from "@mui/icons-material/WalletTwoTone";

import profileLogo from "../../assets/images/user_image.png";
import { Link, useNavigate } from "react-router-dom";

function AccoutControls({ customStyles }) {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [playerCurrencyId, setPlayerCurrencyId] = useState(
    localStorage.getItem("playerCurrencyId")
  );
  const [settingsOpen, setSettingsopen] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setSettingsopen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("playerCurrencyId");
    setUsername("");
    setPlayerCurrencyId("");
    navigate("/");
  };

  return (
    <Grid
      size={{ xs: 12, xl: 6, lg: 12 }}
      gap={1}
      sx={{
        ...customStyles,
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
      <LottieAnimation animationData={giftAnimation} width="60px" />
      {!username ? (
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={1}
          sx={{
            ...customStyles,
          }}>
          <TextField
            placeholder="Account"
            variant="outlined"
            size="small"
            InputProps={{
              sx: {
                borderRadius: "20px",
                color: "#fff",
                width: { xs: "150px", md: "150px" },
                fontSize: "16px",
                height: "30px",
                "& fieldset": {
                  borderColor: theme.palette.border
                },
              },
            }}></TextField>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "16px",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,.08)"
                  : "rgba(255, 255, 255, 0.15) !important",
              borderRadius: "20px",
              color: "#fff",
              padding: "6px 10px",
              minWidth: "128px",
              height: "30px",
              whiteSpace: "nowrap",
              width: { xs: "100%", md: "auto" },
            }}>
            Password Forgot?
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            className="button"
            color={theme.palette.text.primary}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              height: "30px",
              borderColor: theme.palette.mode === "dark" ? "#24ee89" : "#fff",
              width: { xs: "150px", md: "auto" },
              fontSize: "16px",
            }}>
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            className={`button ${
              theme.palette.mode === "dark" ? "greenButton" : "lightButton"
            }`}
            color={
              theme.palette.mode === "dark" ? "primary" : "info !important"
            }
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              height: "30px",
              width: { xs: "150px", md: "auto" },
              fontSize: "16px",
            }}>
            Register
          </Button>
        </Grid>
      ) : (
        <Grid
          container
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Grid container gap={4}>
            <Grid textAlign={"center"}>
              <LocalAtmTwoToneIcon />
              <Typography variant="body2">Deposit</Typography>
            </Grid>
            <Grid textAlign={"center"}>
              <CurrencyExchangeTwoToneIcon />
              <Typography variant="body2">Transfer</Typography>
            </Grid>
            <Grid textAlign={"center"}>
              <WalletTwoToneIcon />
              <Typography variant="body2">Withdrawal</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            gap={2}
            alignItems={"center"}
            justifyContent={"space-around"}
            mr={1}>
            <IconButton onClick={() => setSettingsopen(true)} size={"large"}>
              <Avatar src={profileLogo} alt="profile_logo" />
            </IconButton>
            <Grid>
              <Typography variant="body2" fontWeight={"bold"}>
                {username}
              </Typography>
              <Typography variant="body2">
                {playerCurrencyId ? `RS ${playerCurrencyId}` : "RS.00"}
              </Typography>
              <Typography variant="body2">mk.com</Typography>
            </Grid>
          </Grid>
          <Menu
            sx={{ marginRight: "70px" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={settingsOpen}
            onClose={handleCloseUserMenu}>
            <MenuItem onClick={handleCloseUserMenu} component={Link} to="/user">
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </Grid>
      )}

      <Grid container alignItems={"center"} gap={2}>
        <p style={{ opacity: "0.5" }}>|</p>
        <Avatar
          src="https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg"
          sx={{ width: 32, height: 32 }}></Avatar>
      </Grid>
    </Grid>
  );
}

export default AccoutControls;
