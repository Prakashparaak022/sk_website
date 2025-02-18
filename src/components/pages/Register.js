import {
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2 as Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import registerBannerBackground from "../../assets/images/register_banner_image.png";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import LockOutlined from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useFormik } from "formik";
import { registerSchema } from "../../schema";

function Register() {
  const [formData, setFormData] = useState({
    brandName: "",
    userAccountTypeId: "",
    currency: "",
    username: "",
    actionUserName: "",
    password: "",
    confirmPassword: "",
    countryId: "",
    email: "",
    phone: "",
    countryCode: "",
    isPlayerAge18Plus: false,
    isPlayerAcceptTAndC: false,
    activeStatus: "",
    realPlayer: "",
    demoPlayer: "",
    playerRegistrationDate: "",
    reportingHirearchyUserId: "",
  });
  const [drawer, setDrawer] = useState(false);

  const navigate = useNavigate();

  const countries = [
    {
      label: "India",
      value: "72",
    },
    {
      label: "U.S",
      value: "73",
    },
  ];

  const countryCodes = [
    {
      label: "India +91",
      value: "+91",
    },
    {
      label: "U.S +81",
      value: "+81",
    },
  ];

  const currencies = [
    {
      label: "INR ₹",
      value: "1",
    },
    {
      label: "U.S $",
      value: "5",
    },
  ];

  const POST_URL =
    "http://ec2-18-206-191-96.compute-1.amazonaws.com:9081/main-api-gateway/player-management-gateway/player-management/api/v1/player-profiles/createPlayerProfile";

  const currentDateTime = new Date().toISOString();
  // .replace("T", " ").slice(0, -1);
  const addRecord = async (reqPayload, values, actions) => {
    try {
      const response = await fetch(POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqPayload),
      });
      const data = await response.json();

      if (response.status === 201 || response.status === 200) {
        console.log("User Created SuccessFully");
        console.log("User Created : ", data);
        setDrawer(true);
        setTimeout(() => {
          navigate("/");
          actions.resetForm();
        }, 2000);

        localStorage.setItem("username", data.userName);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("playerCurrencyId", data.playerCurrencyId);
      } else {
        console.log("Error while creating the User");
      }
    } catch (error) {
      console.error("error while creating the user : ", error);
    }
  };

  const handleFormSubmit = (values, actions) => {
    const profileData = {
      brandName: "Amazon Brand 123",
      userAccountTypeId: 7,
      playerCurrencyId: values.currency,
      userName: values.username,
      actionUserName: values.username,
      password: values.password,
      countryId: Number(values.countryId),
      email: values.email,
      phone: values.countryCode + values.phone,
      phoneCountryIsdcodeId: Number(values.countryCode),
      isPlayerAge18Plus: values.isPlayerAge18Plus ? 1 : 0,
      isPlayerAcceptTAndC: values.isPlayerAcceptTAndC ? 1 : 0,
      activeStatus: 1,
      realPlayer: 1,
      demoPlayer: 0,
      playerRegistrationDate: currentDateTime,
      reportingHirearchyUserId: 617,
    };
    addRecord(profileData, values, actions);
  };

  const handleClose = () => {
    setDrawer(false);
  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: registerSchema,
      onSubmit: handleFormSubmit,
    });

  return (
    <Container className="registerContainer" maxWidth="none">
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "205px", marginTop: "40px" }}
        />
        <Paper className="registerBox">
          <Paper className="registerInnerBox">
            <Box
              sx={{ width: "100%", maxWidth: 400 }}
              component="form"
              onSubmit={handleSubmit}>
              <img src={registerBannerBackground} style={{ width: "100%" }} />
              <TextField
                className="inputField"
                id="username"
                placeholder="Username"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                error={errors.username && touched.username ? true : false}
                helperText={
                  errors.username && touched.username ? errors.username : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon
                        sx={{
                          color: "#fff",
                          background: "transparent !important",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="inputField"
                id="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                error={errors.password && touched.password ? true : false}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined sx={{ color: "#fff" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="inputField"
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? true
                    : false
                }
                helperText={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined sx={{ color: "#fff" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="inputField"
                id="countryId"
                name="countryId"
                label="Country"
                select
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.countryId}
                error={errors.countryId && touched.countryId ? true : false}
                helperText={
                  errors.countryId && touched.countryId ? errors.countryId : ""
                }>
                {countries.map((country, index) => (
                  <MenuItem key={index} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className="inputField"
                id="countryCode"
                name="countryCode"
                label="Country Code"
                select
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.countryCode}
                error={errors.countryCode && touched.countryCode ? true : false}
                helperText={
                  errors.countryCode && touched.countryCode
                    ? errors.countryCode
                    : ""
                }>
                {countryCodes.map((countryCode, index) => (
                  <MenuItem key={index} value={countryCode.value}>
                    {countryCode.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className="inputField"
                id="phone"
                placeholder="Mobile Number"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                error={errors.phone && touched.phone ? true : false}
                helperText={errors.phone && touched.phone ? errors.phone : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneAndroidOutlinedIcon sx={{ color: "#fff" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="inputField"
                id="email"
                placeholder="Email"
                variant="outlined"
                fullWidth
                size="small"
                margin="dense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={errors.email && touched.email ? true : false}
                helperText={errors.email && touched.email ? errors.email : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon sx={{ color: "#fff" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="inputField"
                id="currency"
                name="currency"
                label="Currency"
                select
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currency}
                error={errors.currency && touched.currency ? true : false}
                helperText={
                  errors.currency && touched.currency ? errors.currency : ""
                }>
                {currencies.map((currency, index) => (
                  <MenuItem key={index} value={currency.value}>
                    {currency.label}
                  </MenuItem>
                ))}
              </TextField>
              <Grid container alignItems={"center"}>
                <Checkbox
                  id="isPlayerAge18Plus"
                  name="isPlayerAge18Plus"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  checked={values.isPlayerAge18Plus}
                  sx={{
                    color: "#dddddd",
                    "&.Mui-checked": {
                      color: "#6992ff",
                    },
                  }}
                />
                <Typography sx={{ color: "#cbcbcb" }}>
                  I am at least 18 year old
                </Typography>
                {errors.isPlayerAge18Plus && touched.isPlayerAge18Plus
                  ? errors.isPlayerAge18Plus
                  : ""}
              </Grid>
              <Grid container alignItems={"center"}>
                <Checkbox
                  id="isPlayerAcceptTAndC"
                  name="isPlayerAcceptTAndC"
                  checked={values.isPlayerAcceptTAndC}
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  sx={{
                    color: "#dddddd",
                    "&.Mui-checked": {
                      color: "#6992ff",
                    },
                  }}
                />
                <Typography sx={{ color: "#cbcbcb" }}>
                  I agree to the Terms & Conditions
                </Typography>
                {errors.isPlayerAcceptTAndC && touched.isPlayerAcceptTAndC && (
                  <Typography color="error" mb={1}>
                    {errors.isPlayerAcceptTAndC}
                  </Typography>
                )}
              </Grid>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  mb: 2,
                  borderRadius: "12px",
                  background: "linear-gradient(0deg,#445fa6,#6992ff)",
                }}>
                Register
              </Button>

              <Button
                variant="contained"
                component={Link}
                to="/login"
                fullWidth
                sx={{
                  mb: 2,
                  borderRadius: "12px",
                  background: "linear-gradient(0deg,#445fa6,#6992ff)",
                }}>
                Go to Login
              </Button>
            </Box>
          </Paper>
        </Paper>

        <Dialog open={drawer} onClose={handleClose}>
          <DialogTitle>Welcome {formData.username}🎉</DialogTitle>
          <DialogContent>Registration SUCCESSFUL✅</DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default Register;
