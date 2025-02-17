import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";

function UserUpdateForm({
  open,
  handleClose,
  userData,
  formData,
  setFormData,
  handleUpdate,
  values, 
  handleChange, 
  handleBlur, 
  errors, 
  touched, 
  handleSubmit
}) 
{
  console.log(errors);
  
  return (
    <Dialog open={open} onClose={handleClose} component={"form"} onSubmit={handleSubmit}>
      <DialogTitle id="scroll-dialog-title">User Information</DialogTitle>
      <DialogContent
        dividers={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
        }}>
        <TextField
          id="brandName"
          name="brandName"
          label="Brand Name"
          margin="normal"
          disabled
          value={userData.brandName}
          fullwidth
        />

        <TextField
          id="userName"
          name="userName"
          label="Username"
          margin="normal"
          value={userData.userName}
          disabled
          fullwidth
        />

        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          margin="normal"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.firstName && touched.firstName) ? true : false}
          helperText={(errors.firstName && touched.firstName) ? (errors.firstName) : ""}
          fullwidth
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          margin="normal"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.lastName && touched.lastName) ? true : false}
          helperText={(errors.lastName && touched.lastName) ? (errors.lastName) : ""}
          fullwidth
        />

        <TextField
          id="dob"
          name="dob"
          label="Date of Birth"
          margin="normal"
          value={values.dob}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.dob && touched.dob) ? true : false}
          helperText={(errors.dob && touched.dob) ? (errors.dob) : ""}
          fullwidth
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.email && touched.email) ? true : false}
          helperText={(errors.email && touched.email) ? (errors.email) : ""}
          fullwidth
        />

        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          margin="normal"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.phone && touched.phone) ? true : false}
          helperText={(errors.phone && touched.phone) ? (errors.phone) : ""}
          fullwidth
        />

        <TextField
          id="phoneCountryIsdcodeId"
          name="phoneCountryIsdcodeId"
          label="ISD Code"
          margin="normal"
          value={values.phoneCountryIsdcodeId}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.phoneCountryIsdcodeId && touched.phoneCountryIsdcodeId) ? true : false}
          helperText={(errors.phoneCountryIsdcodeId && touched.phoneCountryIsdcodeId) ? (errors.phoneCountryIsdcodeId) : ""}
          fullwidth
        />

        <TextField
          id="gender"
          name="gender"
          label="Gender"
          margin="normal"
          select        
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.gender && touched.gender) ? true : false}
          helperText={(errors.gender && touched.gender) ? (errors.gender) : ""}
          fullwidth>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </TextField>

        <TextField
          id="actionUserName"
          name="actionUserName"
          label="Action UserName"
          margin="normal"
          value={values.actionUserName}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.actionUserName && touched.actionUserName) ? true : false}
          helperText={(errors.actionUserName && touched.actionUserName) ? (errors.actionUserName) : ""}
          fullwidth
        />

        <TextField
          id="address1"
          name="address1"
          label="Address 1"
          margin="normal"
          value={values.address1}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.address1 && touched.address1) ? true : false}
          helperText={(errors.address1 && touched.address1) ? (errors.address1) : ""}
          fullwidth
        />

        <TextField
          id="address2"
          name="address2"
          label="Address 2"
          margin="normal"
          value={values.address2}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.address2 && touched.address2) ? true : false}
          helperText={(errors.address2 && touched.address2) ? (errors.address2) : ""}
          fullwidth
        />

        <TextField
          id="address3"
          name="address3"
          label="Address 3"
          margin="normal"
          value={values.address3}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.address3 && touched.address3) ? true : false}
          helperText={(errors.address3 && touched.address3) ? (errors.address3) : ""}
          fullwidth
        />

        <TextField
          id="state"
          name="state"
          label="State"
          margin="normal"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.state && touched.state) ? true : false}
          helperText={(errors.state && touched.state) ? (errors.state) : ""}
          fullwidth
        />

        <TextField
          id="city"
          name="city"
          label="City"
          margin="normal"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.city && touched.city) ? true : false}
          helperText={(errors.city && touched.city) ? (errors.city) : ""}
          fullwidth
        />

        <TextField
          id="zipCode"
          name="zipCode"
          label="Zip Code"
          margin="normal"
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.zipCode && touched.zipCode) ? true : false}
          helperText={(errors.zipCode && touched.zipCode) ? (errors.zipCode) : ""}
          fullwidth
        />

<TextField
          id="userAccountTypeId"
          name="userAccountTypeId"
          label="User Account Type Id"
          margin="normal"
          value={values.userAccountTypeId}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.userAccountTypeId && touched.userAccountTypeId) ? true : false}
          helperText={(errors.userAccountTypeId && touched.userAccountTypeId) ? (errors.userAccountTypeId) : ""}
          fullwidth
        />

        <TextField
          id="countryId"
          name="countryId"
          label="Country ID"
          margin="normal"
          value={values.countryId}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.countryId && touched.countryId) ? true : false}
          helperText={(errors.countryId && touched.countryId) ? (errors.countryId) : ""}
          fullwidth
        />

        <TextField
          id="affiliateTag"
          name="affiliateTag"
          label="Affiliate Tag"
          margin="normal"
          value={values.affiliateTag}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.affiliateTag && touched.affiliateTag) ? true : false}
          helperText={(errors.affiliateTag && touched.affiliateTag) ? (errors.affiliateTag) : ""}
          fullwidth
        />

        <TextField
          id="activeStatus"
          name="activeStatus"
          label="Active Status"
          margin="normal"
          value={values.activeStatus}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.activeStatus && touched.activeStatus) ? true : false}
          helperText={(errors.activeStatus && touched.activeStatus) ? (errors.activeStatus) : ""}
          fullwidth
        />

        <TextField
          id="reportingHirearchyUserId"
          name="reportingHirearchyUserId"
          label="Reporting Hirearchy User Id"
          margin="normal"
          disabled
          value={values.reportingHirearchyUserId}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.reportingHirearchyUserId && touched.reportingHirearchyUserId) ? true : false}
          helperText={(errors.reportingHirearchyUserId && touched.reportingHirearchyUserId) ? (errors.reportingHirearchyUserId) : ""}
          fullwidth
        />

        <TextField
          id="isPlayerAge18Plus"
          name="isPlayerAge18Plus"
          label="Update Player Age Eligibility (18+)"
          margin="normal"
          select
          value={values.isPlayerAge18Plus}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.isPlayerAge18Plus && touched.isPlayerAge18Plus) ? true : false}
          helperText={(errors.isPlayerAge18Plus && touched.isPlayerAge18Plus) ? (errors.isPlayerAge18Plus) : ""}
          fullwidth>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </TextField>

        <TextField
          id="isPlayerAcceptTAndC"
          name="isPlayerAcceptTAndC"
          label="Update Terms and Conditions"
          margin="normal"
          select
          value={values.isPlayerAcceptTAndC}
          onChange={handleChange}
          onBlur={handleBlur}
          error = {(errors.isPlayerAcceptTAndC && touched.isPlayerAcceptTAndC) ? true : false}
          helperText={(errors.isPlayerAcceptTAndC && touched.isPlayerAcceptTAndC) ? (errors.isPlayerAcceptTAndC) : ""}
          fullwidth>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </TextField>
        {/* Currency Details */}
        <DialogTitle>Player Currency Details</DialogTitle>
        <Divider />
        <TextField
          id="playerCurrencyId"
          name="playerCurrencyId"
          disabled
          label="Player Currency Id"
          margin="normal"
          value={userData.playerCurrencyId}
        />
        <TextField
          id="playerCurrencyDetailsId"
          name="playerCurrencyDetailsId"
          label="Id"
          disabled
          margin="normal"
          value={userData.playerCurrencyDetails?.id || ""}
          // onChange={(e) =>
          //   setUserData({
          //     ...userData,
          //     playerCurrencyDetails: {
          //       ...userData.playerCurrencyDetails,
          //       id: e.currentTarget.value,
          //     },
          //   })
          // }
        />
        <TextField
          id="playerCurrencyDetailsCode"
          name="playerCurrencyDetailsCode"
          label="Code"
          margin="normal"
          disabled
          value={userData.playerCurrencyDetails?.code || ""}
        />
        <TextField
          id="playerCurrencyDetailsName"
          name="playerCurrencyDetailsName"
          label="Name"
          margin="normal"
          disabled
          value={userData.playerCurrencyDetails?.name || ""}
          // onChange={(e) =>
          //   setUserData({
          //     ...userData,
          //     playerCurrencyDetails: {
          //       ...userData.playerCurrencyDetails,
          //       name: e.currentTarget.value,
          //     },
          //   })
          // }
        />

        {/* <TextField
          label=""
          placeholder=""
          margin="normal"
          value={userData.brandName}
          onChange={(e) =>
            setUserData({ ...userData, brandName: e.currentTarget.value })
          }
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserUpdateForm;
