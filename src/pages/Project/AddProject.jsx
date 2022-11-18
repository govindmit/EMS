import { Box, Typography,   Avatar,
  Button,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  TextField, 
  MenuItem} from "@mui/material";
import React, { useState } from "react";
import MenuBar from "../../component/Dashboard/MenuBar";
import Navbar from "../../component/Header/Navbar";
import Joi, { schema } from "joi-browser";
import { updateProfile } from "../../utils/profileService";

const AddProject = () => {

  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    technologies : []
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
        technologies : ""
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
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <MenuBar />
        <Box sx={{ width : '75%'}}>
          <Typography variant="h5" sx={{marginTop : "2%", marginLeft : "5%"}}>Add Project</Typography>
          <Grid sx={{ marginTop: "20px" }}>
        <Card sx={{ maxWidth: 700, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} sx={{ marginTop: "5px" }}>
                <Grid xs={12} item>
                  <TextField
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    placeholder="Project title"
                    label="Project title"
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
                    placeholder="Date"
                    label="Date"
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
                    placeholder="Client Name"
                    label="Client Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.email}</FormHelperText>
                )}
                  <Grid item xs={12}>
                  <TextField 
                    label="Select Employee"
                    select
                    value={profileData.technologies}
                    onChange={handleChange}
                    fullWidth
                    SelectProps={{
                      multiple : true
                    }}
                  >
                  <MenuItem value='React'>React</MenuItem>
                  <MenuItem value='Node'>Node</MenuItem>
                  <MenuItem value='NextJS'>NextJS</MenuItem>
                  </TextField>
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.password}</FormHelperText>
                )}
                <Grid item xs={12}>
                  <TextField 
                    label="Select Technologies"
                    select
                    value={profileData.technologies}
                    onChange={handleChange}
                    fullWidth
                    SelectProps={{
                      multiple : true
                    }}
                  >
                  <MenuItem value='React'>React</MenuItem>
                  <MenuItem value='Node'>Node</MenuItem>
                  <MenuItem value='NextJS'>NextJS</MenuItem>
                  </TextField>
                </Grid>
                {errors && errors.errors && errors.errors.name && (
                  <FormHelperText sx={{color : "#d90429"}}>{errors.errors.phone}</FormHelperText>
                )}
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleChange}
                    placeholder="Employer id"
                    label="Employer Id"
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
        </Box>
      </Box>
    </>
  );
};

export default AddProject;
