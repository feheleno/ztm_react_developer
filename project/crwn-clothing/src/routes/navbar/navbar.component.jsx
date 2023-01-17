import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navbar.styles.scss'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
const NavBar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to=''>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBar;