import React from 'react';
import './css/navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src='' alt='Logo for physics' className='logo' />
            <div className='menu'>
                <input type='button' value='About' className='input'/>
                <input type='button' value='The Team'className='input'/>
                <input type='button' value='Curriculum'className='input'/>
            </div>
        </div>
    )
}

export default Navbar;