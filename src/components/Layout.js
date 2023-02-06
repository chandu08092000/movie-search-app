import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import './layout.css'

function  Layout() {
  return (
    <div className="navbar" >
        <h1><NavLink className='link1' to='/'>High-Q Labs</NavLink></h1>
        <div className="navlink">

            <NavLink activeClassName='active' className='link' to='/'>HOME</NavLink>
            <NavLink activeClassName='active' className='link' to='/Search'>Search</NavLink>
            <NavLink activeClassName='active' className='link' to='/Sample'>Sample</NavLink>

        </div>
    
        <Outlet/>
    </div>
  )
}

export default Layout