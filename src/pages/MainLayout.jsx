import React from "react"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className='site-container'>
      <Outlet />
    </div>
  )
}

export default MainLayout