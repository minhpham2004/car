import React from 'react'
import '../../css/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase'
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SortIcon from '@mui/icons-material/Sort';
import { NavLink } from 'react-router-dom'


function Navbar() {
  window.document.title = 'MORENT'

  return (
    <div>
      <nav className="navbar">
        <div className="right_nav">
          <NavLink to={'/'} className='navigation_link'>
            <h1>MORENT</h1>
          </NavLink>
          <div className="nav_input">
            <div className="search_icon"><SearchIcon /></div>
            <InputBase placeholder='Search something here' id='nav-input_id' />
            <div className="sort_icon"><SortIcon /></div>
          </div>
        </div>
        <ul className="nav_icons">
          <li className="nav-icons_link heart">
            <FavoriteIcon />
          </li>
          <li className="nav-icons_link bell">
            <NotificationsIcon />
          </li>
          <li className="nav-icons_link settings">
            <SettingsIcon />
          </li>
          <li className="nav-icons_link avatar">
            <img src="" alt="" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar