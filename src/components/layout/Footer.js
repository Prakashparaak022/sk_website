import {
  Box,
  colors,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2 as Grid,
  Paper,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";

import restriction from "../../assets/images/restriction.png";
import GCB from "../../assets/images/GCB.png";

import footerCasino from "../../assets/images/footer_casino.png";
import footerGift from "../../assets/images/footer_gift.png";
import footerLottery from "../../assets/images/footer_lottery.png";
import footerSlot from "../../assets/images/footer_slot.png";
import footerVip from "../../assets/images/footer_vip.png";
import logo from "../../assets/images/logo.png";
import "../../assets/css/Footer.css";
import { DataContext } from "../context/DataContext";

function Footer() {
  const { toggleTheme, setToggleTheme } = useContext(DataContext);
  const theme = useTheme();

  const footerData = [
    {
      title: "Sports",
      links: ["Sports", "Esports", "Live Streamer"],
    },
    {
      title: "Support",
      links: ["Beginner's guide", "KYC Policy", "Help Center"],
    },
    {
      title: "Download",
      links: ["Login Download", "APP Download"],
    },
    {
      title: "Community",
      links: ["Facebook", "Twitter", "Instagram", "Telegram"],
    },
    {
      title: "About Us",
      links: ["Partner Merchants", "Sponsors", "Affiliate"],
    },
  ];

  const casinoList = [
    {
      image: footerCasino,
      title: "Casino",
    },
    {
      image: footerGift,
      title: "Promotions",
    },
    {
      image: footerLottery,
      title: "Lottery",
    },
    {
      image: footerSlot,
      title: "Slots",
    },
    {
      image: footerVip,
      title: "VIP",
    },
  ];

  return (
    <Container
      maxWidth="none"
      className="footer"
      sx={{
        color: "#fff",
        py: 4,
        mt: 4,
        background:
          theme.palette.mode === "dark"
            ? "#1c1c1c"
            : "linear-gradient(-135deg,rgb(0,42,135) 25%,rgb(147,64,255) 100%) !important",
      }}>
      <Grid sx={{ margin: "0px 20px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent={"space-between"} gap={1}>
            <Grid
              container
              justifyContent={"space-between"}
              size={{ xs: 12, md: 7 }}>
              {footerData.map((footer, index) => (
                <Grid item key={index}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: "600",
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.text.highlight
                          : "#fff",
                    }}>
                    {footer.title}
                  </Typography>

                  {footer.links.map((link, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{ mb: 2, color: theme.palette.text.secondary }}>
                      {link}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>

            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: "600",
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.text.highlight
                      : "#fff",
                }}>
                Casino
              </Typography>
              <Grid container spacing={6}>
                {casinoList &&
                  casinoList.map((data, index) => (
                    <Grid
                      item
                      xs={6}
                      md={3}
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}>
                      <img
                        src={data.image}
                        alt="casino_images"
                        style={{ width: "36px", margin: "auto" }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: "center",
                          color: theme.palette.text.secondary,
                        }}>
                        {data.title}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "gray" }} />

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            sx={{ margin: "20px 0px" }}
            justifyContent={"space-between"}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}>
                Mk.com is owned and operated by Middle Kang B.V. that is
                incorporated under the laws of Curaçao with company registration
                number 168291 and having its registered address at Kaya Richard
                J. Beaujon Z/N, Curaçao. To register for this website, the user
                is required to accept the General Terms and Conditions, Privacy
                Policy, and Cookie Policy. It is the player’s sole
                responsibility to inquire about the existing laws and
                regulations of the given jurisdiction for online gambling.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }} gap={2} sx={{ display: "flex" }}>
              <img
                src={GCB}
                alt="GCB_Image"
                style={{
                  color: "#7c7c7c",
                  width: "158px",
                }}
              />
              <img
                src={restriction}
                alt="Restriction_Image"
                style={{ color: "#7c7c7c", width: "68px" }}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "gray" }} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid container size={4} alignItems={"center"}>
              <img src={logo} style={{ width: "40%" }} alt="logo" />
              <ToggleButtonGroup
                color="primary"
                exclusive
                value={toggleTheme}
                onChange={(e, value) => setToggleTheme(value)}
                sx={{
                  background: "#f5f5f5",
                  borderRadius: "30px",
                  p: "4px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  "& .MuiToggleButtonGroup-grouped": {
                    borderRadius: "20px !important",
                    border: "none",
                    p: "5px 10px",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#007bff !important",
                    color: "#fff !important",
                    boxShadow: "0 2px 8px rgba(0, 123, 255, 0.5)",
                  },
                }}>
                <ToggleButton value="dark">Dark</ToggleButton>
                <ToggleButton value="light">Light</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default Footer;
