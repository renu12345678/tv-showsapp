import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu } from 'antd'

export default function Navbar () {
  return (
    <Menu mode='horizontal' style={{background: 'darkslategray'}}>
      <Menu.Item >
        <Link to='/'>
          <h2 style={{color:'white'}}> Home </h2>
        </Link>
      </Menu.Item>
    </Menu>
  )
}
