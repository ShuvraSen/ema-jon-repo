import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
           <img className='header-logo' src={logo} alt="" /> 
           <div className='header-info'>
           <a href="/home">Shop</a>
           <a href="/order">Order</a>
           <a href="/inventory">Inventory</a>
           <a href="/login">Login</a>
           
            
           </div>
        </nav>
    );
};

export default Header;