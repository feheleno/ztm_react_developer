import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebse.utils';

import './navbar.styles.scss'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
const NavBar = () => {
  const { currentUser, seteCurrentUser} = useContext(UserContext);
  const signOutHandler = async() => {
    await signOutUser();
    seteCurrentUser(null);
  };


  return (
    <Fragment>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shop'>
            SHOP
          </Link>
          {
            currentUser ?
              (
                <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
              ) : (
                <Link className='nav-link' to='auth'>
                  SIGN IN
                </Link>
              )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavBar;