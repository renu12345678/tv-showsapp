import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu } from 'antd'
import './Navbar.css'


export default function Navbar () {
  return (
    <Menu mode='horizontal' className='navbar-menu'>
      <Menu.Item >
        <Link to='/'>
          <h2 className='nav-label'> Home </h2>
        </Link>
      </Menu.Item>
    </Menu>
  )
}
