import React from 'react'
import Navbar from '../Header/Navbar'

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default Layout