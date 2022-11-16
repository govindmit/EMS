import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Joi, { schema } from "joi-browser";
import { updateProfile } from "../../utils/profileService";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});

  schema = {
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number().required(),
    dob: Joi.date().required(),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(profileData, schema, options);
    const { error } = result;

    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log("validateError", errors);
      setErrors(errorData);
      return errorData;
    }
  };

  const doSubmit = async () => {
    const res = await updateProfile(profileData);
    setProfileData({
      profileData: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        dob: "",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSumbitynkjh");
    const errors = validate();
    setErrors({ errors });
    console.log("errors@@@@@@@@@@", errors);

    if (errors) return;
    doSubmit();
    console.log("submitted");
  };

  const handleChange = ({ currentTarget: input }) => {
    const profiledata = { ...profileData };
    profiledata[input.name] = input.value;
    setProfileData(profiledata);
  };

  return (
    <>
      <Grid sx={{ marginTop: "20px" }}>
        <Box sx={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <Typography gutterBottom variant="h5">
            Profile
          </Typography>
        </Box>
        <Card sx={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Box sx={{ display: "flex" }}>
              <Avatar
                sx={{ width: "70px", height: "70px" }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", fontWeight: 800, margin: "2px 0px" }}
                >
                  MI98126412 - Employee Name
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "13px", color: "#219ebc", margin: "2px 0px" }}
                >
                  employeename@gmail.com
                </Typography>
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} sx={{ marginTop: "5px" }}>
                <Grid xs={12} item>
                  <TextField
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.name}</FormHelperText>
                )}
                <Grid xs={12} item>
                  <TextField
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.lastName}</FormHelperText>
                )}
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.email}</FormHelperText>
                )}
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    value={profileData.password}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.password}</FormHelperText>
                )}
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.phone}</FormHelperText>
                )}
                <Grid item xs={12}>
                  <TextField
                    type="date"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleChange}
                    placeholder="Enter DOB"
                    label="DOB"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.dob}</FormHelperText>
                )}
                <Grid item xs={6} sx={{marginLeft : "25%"}}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default EditProfile;
