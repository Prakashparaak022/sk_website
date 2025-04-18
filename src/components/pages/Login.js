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
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import registerBannerBackground from "../../assets/images/register_banner_image.png";
// import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LockOutlined from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useFormik } from "formik"
import { loginSchema } from "../../schema";
import logo from "../../assets/images/logo/bet_duniya_light.png";


function Login() {
  
  const [captchaImg, setCaptchaImg] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    captchaToken: "",
    captchaInput: "",
  });
  const [drawer, setDrawer] = useState(false);

  const CAPTCHA_URL =
    "http://ec2-18-206-191-96.compute-1.amazonaws.com:9081/main-api-gateway/player-management-gateway/player-management/api/v1/player-login/captcha";

  const LOGIN_URL =
    "http://ec2-18-206-191-96.compute-1.amazonaws.com:9081/main-api-gateway/player-management-gateway/player-management/api/v1/player-login/validate-user-credentials-retrieve-user-profile";

  const navigate = useNavigate();

  const getCaptcha = async () => {
    try {
      const response = await axios.get(CAPTCHA_URL);
      if (response.status === 200) {
        const data = response.data;
        setCaptchaImg(data.captchaImage);
        setLoginData({ ...loginData, captchaToken: data.captchaToken });
      } else {
        console.log("Error while getting Captcha");
      }
    } catch (error) {
      console.error("Error while getting Captcha : ", error);
    }
  };

  const userLoginCredential = async (reqPayload, values, actions) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        userName: reqPayload.userName,
        password: reqPayload.password,
        captchaToken: reqPayload.captchaToken,
        captchaInput: reqPayload.captchaInput,
      };
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: headers,
      });
      const data = await response.json();
      console.log("Login data : ", data);
      if (response.status === 201 || response.status === 200) {
        console.log("Login as : ", data.userName);
        sessionStorage.setItem("username", data.userName)
        sessionStorage.setItem("userId", data.id)
        sessionStorage.setItem("playerCurrencyId", data.playerCurrencyId)
        setDrawer(true);
        setTimeout(() => {
          navigate("/");
          actions.resetForm();
        }, 2000);
      } else {
        console.log("error while login");
      }
    } catch (error) {
      console.error("error while login : ", error);
    }
  };
  useEffect(() => {
    getCaptcha();
  }, []);

  const handleLogin = (values, actions) => {
    const loginCredential = {
      userName: values.username,
      password: values.password,
      captchaToken: loginData.captchaToken,
      captchaInput: values.captchaInput,
    };
    userLoginCredential(loginCredential, values, actions);
  };

  
  const {values, handleChange, handleBlur, errors, touched, handleSubmit, actions} = useFormik({
    initialValues: loginData,
    validationSchema : loginSchema,
    onSubmit : handleLogin
  });


  const handleClose = () => {
    setDrawer(false);
  };

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
          style={{ marginTop: "40px", width:"200px" }}
        />
        <Paper className="registerBox">
          <Paper className="registerInnerBox">
            <Box
              sx={{maxWidth: 400 }}
              component="form"
              onSubmit={handleSubmit}
              justifyContent={"space-between"}>
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
                error = {(errors.username && touched.username) ? true : false}
                helperText={(errors.username && touched.username) ? (errors.username) : ""}
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
                error = {(errors.password && touched.password) ? true : false}
                helperText={(errors.password && touched.password) ? (errors.password) : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined
                        sx={{ color: "#fff"}}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container justifyContent={"space-between"}>
                <TextField
                  className="inputField"
                  placeholder="Enter Captcha Code"
                  id="captchaInput"
                  size="small"
                  margin="dense"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.captchaInput}
                  error = {(errors.captchaInput && touched.captchaInput) ? true : false}
                  helperText={(errors.captchaInput && touched.captchaInput) ? (errors.captchaInput) : ""}
                  />
                <img
                  alt="captcha"
                  id="dnt-captcha-img"
                  src={`data:image/png;base64,${captchaImg}`}
                  style={{ width: "110px" }}
                />
              </Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Grid container alignItems={"center"}>
                  <Checkbox
                    sx={{
                      color: "#dddddd",
                      "&.Mui-checked": {
                        color: "#6992ff",
                      },
                    }}
                  />
                  <Typography sx={{ color: "#cbcbcb" }}>Remember</Typography>
                </Grid>

                <Typography sx={{ color: "#cbcbcb", cursor: "pointer" }}>
                  Forgot password
                </Typography>
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
                Login
              </Button>

              <Button
                variant="contained"
                component={Link}
                to="/register"
                fullWidth
                sx={{
                  borderRadius: "12px",
                  background: "linear-gradient(0deg,#445fa6,#6992ff)",
                }}>
                Register
              </Button>
            </Box>
          </Paper>
        </Paper>

        <Dialog open={drawer} onClose={handleClose}>
          <DialogTitle>Welcome {loginData.username}🎉</DialogTitle>
          <DialogContent>LOGIN SUCCESSFUL✅</DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default Login;
