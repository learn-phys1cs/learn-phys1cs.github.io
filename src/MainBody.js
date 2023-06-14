import React from 'react';
import './css/mainbody.css';

const MainBody = () => {
    return (
        <>
            <section className='info'>
                <div className='info-text left'>
                    <h1>learn-phys1cs</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                </div>
            </section>
            <section className='main-panel'>
                <div className='main-panel-title'>
                    <h1 style={{ fontSize: '1.5em'}}>Register for Summer Classes</h1>
                </div>
                <div className='main-panel-info'>
                    <h2>
                        Weekly meetings to learn everyday physics!
                    </h2>
                    <div className='button-holder'>
                        <input type='button' value='Interested?' className='input' />
                        <input type='button' value='Contact Us' className='input'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBody;