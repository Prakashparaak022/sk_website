import {
  Box,
  colors,
  Container,
  Divider,
  Grid2 as Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

import restriction from "../assets/images/restriction.png";
import GCB from "../assets/images/GCB.png";

import footerCasino from "../assets/images/footer_casino.png";
import footerGift from "../assets/images/footer_gift.png";
import footerLottery from "../assets/images/footer_lottery.png";
import footerSlot from "../assets/images/footer_slot.png";
import footerVip from "../assets/images/footer_vip.png";

function Footer() {
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
      sx={{
        color: "#fff",
        background: "rgba(21, 21, 21, 0.66)",
        py: 4,
        mt: 4,
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
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
                    {footer.title}
                  </Typography>

                  {footer.links.map((link, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{ mb: 2, color: "#7c7c7c" }}>
                      {link}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>

            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
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
                        sx={{ textAlign: "center", color: "#7c7c7c" }}>
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
          <Grid container sx={{ margin: "20px 0px" }} justifyContent={"space-between"}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="body1" sx={{ color: "#7c7c7c" }}>
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

            <Grid
              size={{ xs: 12, md: 3 }}
              gap={2}
              sx={{ display: "flex"}}>
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
                style={{ color: "#7c7c7c", width: "68px"}}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "gray" }} />
      </Grid>
    </Container>
  );
}

export default Footer;
