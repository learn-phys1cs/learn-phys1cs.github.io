import React, { useState } from 'react';
import './css/navbar.css';
import MainBody from './MainBody';
import About from './About';

const Navbar = () => {
    const [section, setSection] = useState("main")

    return (
        <>
        <div className='navbar'>
            
            <img src='' alt='Logo for physics' className='logo' onClick={() => setSection("main")}/>
            <div className='menu'>
                <input type='button' value='About' className='input' onClick={() => setSection("about")}/>
                <input type='button' value='Curriculum'className='input' onClick={() => setSection("curriculum")}/>
                <input type='button' value='Join Us' className='input'/>
            </div>
        </div>

            {section === "main" ? <MainBody /> : section === "about" ? <About /> : <div></div>}
        </>
    )
}

export default Navbar;