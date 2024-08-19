import React from 'react'
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";


function Wrapper() {
  return (
    <>
    <Header />
    <Sidebar />
    <Outlet />
  </>
  )
}

export default Wrapper