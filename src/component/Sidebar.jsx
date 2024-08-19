import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Sidebar(){
  const [isSidebarOpen , setisSidebarOpen] = useState(false)
  return (
    <>
    <button className="toggle-sidebar-btn">Toggle Sidebar</button>{" "}
    {/* Add your toggle button here */}
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item ">
        <NavLink className={({isActive})=>
        `${isActive ? "nav-link" : " nav-link  collapsed"}`} to="/">
            <span>Users</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
            `${isActive ? "nav-link" : " nav-link  collapsed"}`} to="/Orders">
            <i className="bi bi-cart"></i>
            <span>order</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
            `${isActive ? "nav-link" : " nav-link  collapsed"}`} to="/user-profile">
            <i className="bi bi-folder"></i>
            <span>My Account</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>
            `${isActive ? "nav-link" : " nav-link  collapsed"}`} to="rate">
            <i className="bi bi-gear"></i>
            <span>Rating & Reviews</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  </>
  )
}

export default Sidebar