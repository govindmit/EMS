import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuBar from '../../component/Dashboard/MenuBar'
import Navbar from '../../component/Header/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display : "flex"}}>
        <MenuBar />
        <Box sx={{ width : '75%'}}>
          <Typography variant="h5" sx={{marginTop : "2%", marginLeft : "5%"}}>Welcome User</Typography>
        </Box>
      </Box>
    </>
  )
}

export default HomePage