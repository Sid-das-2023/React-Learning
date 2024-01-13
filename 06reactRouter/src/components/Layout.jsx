import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ContactUs from './ContactUs/ContactUs'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ContactUs />
    </>
  )
}

export default Layout
