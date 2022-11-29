import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='wrapper'>
          <div className='left'>
            <div className='item'>
              <img src='img/en.png' alt='' />
              <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
              <Link className='link' to='/product/1'>
                Women
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/product/2'>
                Men
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/product/3'>
                Children
              </Link>
            </div>
          </div>
          <div className='center'>
            <Link className='link' to='/'>
              JOYSTORE
            </Link>
          </div>
          <div className='right'>
            <div className='item'>
              <Link className='link' to='/'>
                Homepage
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>
                About
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>
                Contact
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>
                Stores
              </Link>
            </div>
            <div className='icons'>
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderOutlinedIcon />
              <div className='cartIcon'>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
