import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import hoveredImage1 from "../assets/images/hovered_image_1.png";
import hoveredImage2 from "../assets/images/hovered_image_2.png";
import hoveredImage3 from "../assets/images/hovered_image_3.png";
import registerButton from "../assets/images/register_button.png";
import profileLogo from "../assets/images/user_image.png";
import { Link, useNavigate } from "react-router-dom";
import { LottieAnimation } from "./LottieAnimation";
import giftAnimation from "../assets/animation/gift.json";
import WalletTwoToneIcon from "@mui/icons-material/WalletTwoTone";
import CurrencyExchangeTwoToneIcon from "@mui/icons-material/CurrencyExchangeTwoTone";
import LocalAtmTwoToneIcon from "@mui/icons-material/LocalAtmTwoTone";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoverDrawerOpen, setHoverDrawerOpen] = useState(false);
  const [settingsOpen, setSettingsopen] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [playerCurrencyId, setPlayerCurrencyId] = useState(localStorage.getItem("playerCurrencyId"));


  const handleOpen = () => {
    setDrawerOpen(true);
  };
  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleHoverDrawerClose = () => {
    setHoverDrawerOpen(false);
  };

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
  }
  const hoverImageList = [hoveredImage1, hoveredImage2, hoveredImage3];
  console.log(username);
  

  return (
    <AppBar
      className="navbar"
      position="sticky"
      sx={{ background: "#1d1d1d" }}>
      <Container
        maxWidth="none"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <img src={logo} alt="logo" style={{ maxWidth: "130px" }} />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            {/* section 1 */}
            <Grid
              size={{ xs: 12, xl: 6, lg:0 }}
              sx={{
                display: { xl: "flex", lg: "none", xs: "none" },
                alignItems: "center",
                gap: 2,
              }}>
              <Button sx={{ color: "#fff", my: 2 }} className="navButton">
                Home
              </Button>
              <Button
                className="navButton dropDownBtn"
                onMouseEnter={() => setHoverDrawerOpen(true)}
                onMouseLeave={handleHoverDrawerClose}>
                Promotions <div className="dropDown"></div>
              </Button>
              <Button
                className="navButton dropDownBtn"
                onMouseEnter={() => setHoverDrawerOpen(true)}
                onMouseLeave={handleHoverDrawerClose}>
                Sponsors <div className="dropDown" />
              </Button>
              <Button className="navButton">Support</Button>
              <Button
                className="navButton dropDownBtn"
                onMouseEnter={() => setHoverDrawerOpen(true)}
                onMouseLeave={handleHoverDrawerClose}>
                Affiliate <div className="dropDown" />
              </Button>
              <Button
                className="navButton dropDownBtn"
                onMouseEnter={() => setHoverDrawerOpen(true)}
                onMouseLeave={handleHoverDrawerClose}>
                APP Download <div className="dropDown" />
              </Button>
            </Grid>

            {/* section 2 */}
            <Grid
              size={{ xs: 12, xl:6, lg: 12 }}
              sx={{
                display: { md: "flex", xs: "none" },
                alignItems: "center",
                justifyContent: "flex-end"
              }}>
              <LottieAnimation animationData={giftAnimation} />
              {!username ? (
                <Grid container alignItems={"center"} justifyContent={"space-between"}
                gap={1}>
                  <TextField
                    placeholder="Account"
                    variant="outlined"
                    size="small"
                    inputProps={{
                      sx: {
                        background: "rgba(255,255,255,.08)",
                        borderRadius: "20px",
                        color: "#fff",
                        width: "128px",
                        height: "15px",
                      },
                    }}></TextField>
                  <Button
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      background: "rgba(255,255,255,.08)",
                      borderRadius: "20px",
                      color: "#fff",
                      padding: "6px 10px",
                      minWidth: "128px",
                      height: "30px",
                      whiteSpace: "nowrap",
                    }}>
                    Password Forgot?
                  </Button>
                  <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    sx={{
                      color: "#6992ff",
                      borderRadius: "20px",
                      textTransform: "none",
                      padding: "2px 20px",
                    }}>
                    Login
                  </Button>

                  <img
                    src={registerButton}
                    onClick={() => navigate("/register")}
                    style={{ width: "112px", cursor: "pointer" }}
                  />
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
                      <Typography variant="body2">{playerCurrencyId ? `RS ${playerCurrencyId}` : "RS.00"}</Typography>
                      <Typography variant="body2">mk.com</Typography>
                    </Grid>
                  </Grid>
                  <Menu
                    sx={{marginRight:"70px"}}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={settingsOpen}
                    onClose={handleCloseUserMenu}>
                    <MenuItem onClick={handleCloseUserMenu} component={Link} to="/user">Profile</MenuItem>
                    <MenuItem
                      onClick={handleLogout}>
                      Log out
                    </MenuItem>
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
          </Grid>
        </Box>

        {/* Toggle Button */}
        <Box
          sx={{
            display: { xs: "flex", xl: "none" },
            justifyContent: "flex-end",
          }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Hover Part */}
        <Box
          onMouseLeave={handleHoverDrawerClose}
          sx={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            display: hoverDrawerOpen ? "flex" : "none",
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

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleClose}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#232323",
              color: "#fff",
              padding: "10px",
            },
          }}>
          {/* SM Section 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
            <Button sx={{ color: "#fff", mt: 2 }} className="navButton">
              Home
            </Button>
            <Button className="navButton">
              Promotions <div className="dropDownBtn"></div>
            </Button>
            <Button className="navButton">
              Sponsors <div className="dropDownBtn" />
            </Button>
            <Button className="navButton">Support</Button>
            <Button className="navButton">
              Affiliate <div className="dropDownBtn" />
            </Button>
            <Button className="navButton">
              APP Download <div className="dropDownBtn" />
            </Button>
          </Box>

          {/* SM Section 2 */}
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              alignItems: "center",
              flexDirection: "column",
              mt: 2,
              gap: "20px",
            }}>
            <TextField
              placeholder="Account"
              variant="outlined"
              size="small"
              inputProps={{
                sx: {
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "20px",
                  color: "#fff",
                  width: "128px",
                  height: "15px",
                },
              }}></TextField>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                background: "rgba(255,255,255,.08)",
                borderRadius: "20px",
                color: "#fff",
                padding: "6px 10px",
                minWidth: "128px",
                height: "30px",
                whiteSpace: "nowrap",
              }}>
              Password Forgot?
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              sx={{
                color: "#6992ff",
                borderRadius: "20px",
                textTransform: "none",
                padding: "2px 20px",
              }}>
              Login
            </Button>
            <img
              src={registerButton}
              onClick={() => navigate("/register")}
              style={{ width: "112px", cursor: "pointer" }}
            />
            <Avatar
              src="https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg"
              sx={{ width: 32, height: 32 }}></Avatar>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
}

export default Navbar;
