import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import "../style/header.css"
import { Link } from 'react-router-dom'
import { useStateValue } from '../provider/StateProvider'

function Header() {
  const [{cards}, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
    <div className="header_logo">
      <StoreIcon className="header_logo_img" />
      <h3 className="header_logo_title">e.shop</h3>
      </div>
      </Link>
      <div className="header_search">
      <input type="text" className="header_search_input" placeholder="Search..." >
      </input>
        <SearchIcon className="header_search_icon"  />
      </div>
      <div className="header_nav">
        <div className="nav_item">
        <span className="nav__item_gest">Hello Ramzi</span>
        <Link to='/login' className="nav__item_link">
        <span className="nav__item_sign">Sign in </span>
        </Link>
        </div>   
       
        <div className="nav_item_basket">
       <Link to="/card " style={{ textDecoration: 'none',color: 'white' }}>
                 <ShoppingBasketIcon />
          </Link>
        <span className="nav__basket_count ">{cards.length}</span>
        </div>
 
      </div>
    </div>
  )
}

export default Header
