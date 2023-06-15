import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Indexpage from './pages/Indexpage'

const Layout = () => {
  return (
    <div className='py-4 px-8 flex flex-col min-h-screen'>
        <Header />
        <Outlet />
        {/* <Indexpage /> */}
       
    </div>
  )
}

export default Layout