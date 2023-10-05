import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.scss';
import Cookies from 'js-cookie';
import axios from 'axios';

const Navbar = () => {
  const user_name = Cookies.get('user_name');
    // Function to handle logout
  const handleLogout = () => {
    // Remove user-related cookies
    Cookies.remove('user_name');
    Cookies.remove('user');
    Cookies.remove('access_token');
    Cookies.remove('csrf_token');
    window.location.href = '/';
  };
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/' className='link'><p>Bhoj<span>aniya</span></p></Link>
        </div>
        <div className="links">
          <Link className='link' to='/fund'>Funding</Link>
          <Link className='link' to='/food'>Food Donate</Link>
          <Link className='link' to='/org'>Organizations</Link>
        </div>
        <div className="user-info">
          {user_name ? (
            <div className="user">
              <span>{user_name}</span>
              <Link className='link' to='/logout'><button onClick={handleLogout}>Logout</button></Link>
            </div>
          ) : (
            <div className="btns">
              <Link className='link' to='/login'><button>Login</button></Link>
              <Link className='link' to='/register'><button>Register</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
