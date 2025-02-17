import * as yup from "yup";

export const usernameValidation = yup
  .string()
  .min(5, "Username should be at least 5 characters")
  .required("Username cannot be empty");


export const passwordValidation = yup
  .string()
  .min(5, "Password should be at least 5 characters")
  .required("Password cannot be empty");

export const emailValidation = yup
  .string()
  .email("Enter valid email")
  .required("Email cannot be empty")


export const loginSchema = yup.object().shape({
  username: usernameValidation,
  password: passwordValidation,
});

export const registerSchema = yup.object().shape({
  username: usernameValidation,
  password: passwordValidation,
  email: emailValidation,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password cannot be empty"),
  countryId: yup
    .number()
    .positive()
    .integer()
    .required("Country cannot be empty"),
  countryCode: yup
    .number()
    .positive()
    .integer()
    .required("Country Code cannot be empty"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Mobile Number cannot be empty"),
  currency: yup
    .number()
    .positive()
    .integer()
    .required("Currency cannot be empty"),
  isPlayerAcceptTAndC: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms & Conditions")
    .required("Terms & Conditions Agreement cannot be empty"),
});

export const updateSchema = yup.object().shape({
  email: emailValidation,
  actionUserName: yup
    .string()
    .required("Active UserName cannot be empty"),
    phoneCountryIsdcodeId: yup
    .number()
    .min(10, "Country Code must be 2 digits")
    .max(99, "Country Code must be 2 digits")
    .required("Country Code cannot be empty"),
  phone: yup
    .string()
    .matches(/^\+[0-9]{12}$/, "Phone number must start with + and be exactly 14 characters")
    .required("Mobile Number cannot be empty"),
  userAccountTypeId: yup
    .number()
    .max(10, "UserAccountTypeId must be below 10")
    .required("UserAccountTypeId cannot be empty"),
  dob: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date of Birth must be in YYYY-MM-DD format")
    .required("Date of Birth cannot be empty"),  
  zipCode: yup
  .string()
  .matches(/^[0-9]{6}$/, "Phone number must be exactly 6 digits"),
  isPlayerAcceptTAndC: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms & Conditions")
    .required("Terms & Conditions Agreement cannot be empty"),
});

/*
playerCurrencyId -d
reportingHirearchyUserId - d
actionUserName -c
phoneCountryIsdcodeId -c
phone -c
email -c
userName -d
userAccountTypeId -c
brandName -d
id - disable
**/