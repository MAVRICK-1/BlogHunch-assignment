import React from 'react'
import Navbar1 from './Navbar1';
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar1 title=""/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout