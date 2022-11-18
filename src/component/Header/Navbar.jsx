import { Close } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = ({user}) => {
  // console.log("user--------------------->>", user.token)
  const [isDrawerOpen, setISDrawerOpen] = useState(false);
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            EMS
          </Typography>
          <Stack direction="row" spacing={6}>
            <Avatar
              sx={{ width: "30", height: "30" }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={() => setISDrawerOpen(true)}
            />
          </Stack>
        </Toolbar>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setISDrawerOpen(false)}
        >
          <Box p={2} width="300px" textAlign="center" role="presentation">
            <IconButton
              sx={{ marginLeft: "80%" }}
              edge="end"
              aria-label="logo"
              onClick={() => setISDrawerOpen(false)}
            >
              <Close />
            </IconButton>
            <Box sx={{ display : "flex", justifyContent : "center"}}>
            <Avatar
              sx={{ width: "100px", height: "100px" }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={() => setISDrawerOpen(true)}
            />
            </Box>
            <Typography variant="h6" sx={{ fontSize : "16px", fontWeight : 800, margin : "2px 0px"}}>MI98126412 - Employee Name</Typography>
            <Typography variant="h6" sx={{ fontSize : "13px", color : '#219ebc', margin : "2px 0px"}}>employee@gmail.com</Typography>
            <Typography variant="h6" sx={{ fontSize : "13px", margin : "2px 0px"}}>Employee Designation</Typography>
            <Box sx={{ display : "flex", justifyContent : "center", margin : "8px 0px"}}>
            <Link to='/profile' target='_blank'><Button sx={{ backgroundColor : "#fff", color : "#000", width : "25px"}}>Edit</Button></Link>
              <Button sx={{ color : "#e63946"}}>Sign Out</Button>
              
            </Box>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
