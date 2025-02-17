import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { act, useEffect, useState } from "react";
import profileLogo from "../assets/images/user_image.png";
import Navbar from "./Navbar";
import UserUpdateForm from "./UserUpdateForm";
import { updateSchema } from "../schema";
import { useFormik } from "formik";

function User() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [userData, setUserData] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    firstName: "",
    email: "",
    phone: "",
    phoneCountryIsdcodeId: "",
    gender: "",
    actionUserName: "",
    address1: "",
    address2: "",
    address3: "",
    state: "",
    city: "",
    zipCode: "",
    userAccountTypeId : "",
    affiliateTag: "",
    activeStatus: "",
    isPlayerAge18Plus: false,
    isPlayerAcceptTAndC: false,
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const USER_URL =
    "http://ec2-18-206-191-96.compute-1.amazonaws.com:9081/main-api-gateway/player-management-gateway/player-management/api/v1/player-profiles/getPlayerProfileById/";

  const UPDATE_URL =
    "http://ec2-18-206-191-96.compute-1.amazonaws.com:9081/main-api-gateway/player-management-gateway/player-management/api/v1/player-profiles/updatePlayerProfile/";

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(USER_URL + userId);
      if (response.status === 200) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } else {
        console.log("error while getting user details");
      }
    } catch (error) {
      console.error("error while getting user details : ", error.body);
    }
  };

  useEffect(() => {
    console.log(userId);
    if (userId) {
      fetchUser(userId);
    } else {
      console.error("User Id not found");
    }
  }, [userId]);

    useEffect(() => {
      if (userData) {
        setValues((prevState) => ({
          ...prevState,
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          dob: userData.dob || "",
          email: userData.email || "",
          phone: userData.phone || "",
          phoneCountryIsdcodeId: userData.phoneCountryIsdcodeId || "",
          gender: userData.gender || "",
          actionUserName: userData.actionUserName || "",
          address1: userData.address1 || "",
          address2: userData.address2 || "",
          address3: userData.address3 || "",
          state: userData.state || "",
          city: userData.city || "",
          zipCode: userData.zipCode || "",
          userAccountTypeId: userData.userAccountTypeId || "",
          affiliateTag: userData.affiliateTag || "",
          activeStatus: userData.activeStatus || "",
          isPlayerAge18Plus: userData.isPlayerAge18Plus || false,
          isPlayerAcceptTAndC: userData.isPlayerAcceptTAndC || false,
        }));
      }
    }, [userData]);

  const userUpdate = async (reqPayload) => {
    if (!reqPayload) return;
    console.log("reqPayload : ", reqPayload);

    try {
      const response = await fetch(UPDATE_URL + userId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqPayload),
      });

      if (response.status === 200 || response.status === 202) {
        console.log("User Updated Successfully");
        const data = await response.json();
        console.log("User Updated : ", data);
        setUserData(data);
        setOpen(false);
      } else {
        console.log("error while updating the user");
      }
    } catch (error) {
      console.log("error while updating the user : ", error.body);
    }
  };

  const handleUpdate = () => {

    const profile = {
      id: userId,
      brandName: userData.brandName,
      userAccountTypeId: values.userAccountTypeId,
      userName: userData.userName,
      password: userData.password,
      affiliateTag: values.affiliateTag,
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob,
      countryId: values.countryId,
      email: values.email,
      phone: values.phone,
      phoneCountryIsdcodeId: values.phoneCountryIsdcodeId,
      address1: values.address1,
      address2: values.address2,
      address3: values.address3,
      state: values.state,
      city: values.city,
      zipCode: values.zipCode,
      gender: values.gender,
      activeStatus: values.activeStatus,
      actionUserName: values.actionUserName,
      reportingHirearchyUserId: userData.reportingHirearchyUserId,
      playerCurrencyId: userData.playerCurrencyId,
      isPlayerAge18Plus: values.isPlayerAge18Plus,
      isPlayerAcceptTAndC:  values.isPlayerAcceptTAndC
    };
    console.log(JSON.stringify(profile));
    userUpdate(profile);
  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit, setValues } =
    useFormik({
      initialValues: formData,
      validationSchema: updateSchema,
      onSubmit: handleUpdate,
    });

  return (
    <>
      <Navbar />
      <Container maxWidth="none">
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Grid
            container
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}>
            <Grid
              size={{ xs: 12, lg: 4 }}
              justifyContent={"center"}
              alignItems={"center"}>
              <Grid
                component={Paper}
                elevation={6}
                textAlign={"center"}
                gap={1}
                sx={{
                  background:
                    "linear-gradient(185deg, hsla(0, 0.00%, 45.90%, 0.55) 3.64%, rgba(59, 59, 59, 0.48) 96.32%)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <img src={profileLogo} alt="proike_img" />
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={() => {
                    setOpen(true);
                  }}>
                  Update Profile
                </Button>
                <Typography color="white">{userData.userName}</Typography>

                <Typography color="white">{userData.email}</Typography>

                <Typography color="white">{userData.phone}</Typography>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid
                component={Paper}
                elevation={6}
                sx={{
                  padding: "10px 20px",
                  background:
                    "linear-gradient(185deg, hsla(0, 0.00%, 45.90%, 0.55) 3.64%, rgba(59, 59, 59, 0.48) 96.32%)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                }}>
                <TableContainer>
                  <TableHead>
                    <Typography
                      variant="h4"
                      fontWeight={"bold"}
                      sx={{ color: "#fff" }}>
                      User Information :{" "}
                    </Typography>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        User Id : {userData.id}
                      </Typography>
                    </TableRow>

                    <TableRow>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        Brand Name : {userData.brandName}
                      </Typography>
                    </TableRow>

                    <TableRow>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        User Name : {userData.userName}
                      </Typography>
                    </TableRow>

                    <TableRow>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        Email : {userData.email}
                      </Typography>
                    </TableRow>

                    <TableRow>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        Phone Number : {userData.phone}
                      </Typography>
                    </TableRow>
                    {userData.playerCurrencyDetails && (
                      <TableRow>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Currency Code : {userData.playerCurrencyDetails.code}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Currency Name : {userData.playerCurrencyDetails.name}
                        </Typography>
                      </TableRow>
                    )}
                    <TableRow>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        Created At : {userData.createdAt}
                      </Typography>
                    </TableRow>
                  </TableBody>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* Update Modal */}
        <UserUpdateForm
          open={open}
          handleClose={handleClose}
          userData={userData}
          formData={formData}
          setFormData={setFormData}
          handleUpdate={handleUpdate}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}

export default User;
