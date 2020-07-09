import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo/rocket-svgrepo-com.svg'
import './header.styles.scss'

const Header = ({ isAdmin, loggedIn, firstName }) => {
  if (loggedIn) {
    if (isAdmin) {
            // **Admin Nav Bar **
            return (
              <div className='header'>
                <NavLink className='logo-container' to="/">
                  <span className='logo-text'>bottlerocket</span>
                  <Logo className='logo'/>
                </NavLink>
                
                <div className='nav-options'>
                  <NavLink 
                    className='option' 
                    to='/wines'>
                  Wines
                  </NavLink>
                  <NavLink 
                    className='option' 
                    to='/offers'>
                  Offers
                  </NavLink>

                  <NavLink 
                    className='option' 
                    to='/signout'>
                  Sign Out
                  </NavLink>
                </div>
              </div>
            )  // **END Admin Nav Bar **
    } else {
      // ** User Nav Bar **
      return (
      <div className='header'>
      
      <NavLink className='logo-container' to="/">
        <span className='logo-text'>bottlerocket</span>
          <Logo className='logo'/>
      </NavLink>

      <div className='nav-options'>
        
        <NavLink 
          className='option' 
          to='/user/transactions'>
        Purchases
        </NavLink>

        <NavLink 
          className='option' 
          to='/profile'>
        Profile
        </NavLink>

        
        <NavLink 
          className='option' 
          to='/signout' >
        Logout
        </NavLink>
      </div>
    </div>
      )   // END User Nav Bar **
  }
 } else {
   // ** Not Logged In Bar **
    return (
      <div className='header'>
      
      <NavLink className='logo-container' to="/">
      <span className='logo-text'>bottlerocket</span>
        <Logo className='logo'/>
        </NavLink>
      <div className='nav-options'>
        <NavLink 
          className='option' 
          to='/signup' >
        Sign Up
        </NavLink>
        
        <NavLink 
          className='option' 
          to='/signin' >
        Log In
        </NavLink>
      </div>
    </div>
    )
  }
}

export default Header