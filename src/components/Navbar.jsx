import React from 'react';

const Navbar = () => {
    return (
        <nav className='navCont'>
            <div className='logoCont'>
                <img src="/TrollFace.png" className= "logo" alt="logo" />
                <h3 className='logo-text'>Meme Generator</h3>
            </div>
            <div className='menuIt'>
            React Course - Project 3
            </div>
        </nav>
    );
};

export default Navbar;
