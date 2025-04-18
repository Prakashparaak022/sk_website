import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid2 as Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo/bet_duniya_light.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import AccountControls from "./AccountControls";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settingsOpen, setSettingsopen] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [playerCurrencyId, setPlayerCurrencyId] = useState(
    localStorage.getItem("playerCurrencyId")
  );

  const theme = useTheme();

  const handleOpen = () => {
    setDrawerOpen(true);
  };
  const handleClose = () => {
    setDrawerOpen(false);
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
  };
  console.log(username);

  // NavLink Styles
  const navLinksDekstopView = {
    display: { xl: "flex", lg: "none", xs: "none" },
  };

  const navLinksMobileView = {
    display: { xl: "none", lg: "flex", xs: "flex" },
    flexDirection: "column",
  };

  // AccountControls Styles
  const accControlsDekstopView = {
    display: { xs: "none", md: "flex" },
  };

  const accControlsMobileView = {
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
    width: "100%"
  }

  return (
    <AppBar
      className="navbar"
      position="sticky"
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "#292d2e"
            : "linear-gradient(-135deg, #aa49ff 25%, #7400e7 100%)",
        backdropFilter: "blur(6px)",
      }}>
      <Container
        maxWidth="none"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <img src={logo} alt="logo" style={{ maxWidth: "80px", m:1}} />

        {/* Dekstop View */}
        <Box sx={{ flexGrow: 1, my: 1 }}>
          <Grid container>
            {/* Navigation Links */}
            <NavLinks customStyles={navLinksDekstopView} />

            {/* Account Controls*/}
            <AccountControls customStyles={accControlsDekstopView} />
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
          {/* Mobile View */}
          <NavLinks customStyles={navLinksMobileView} />

          {/* Account Controls*/}
          <AccountControls customStyles={accControlsMobileView} />
        </Drawer>
      </Container>
    </AppBar>
  );
}

export default Navbar;
