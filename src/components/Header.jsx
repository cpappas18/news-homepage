import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import closeMenuIcon from '../assets/images/icon-menu-close.svg';
import { useRef, useEffect, useState } from 'react';

const Header = (props) => {
    const {
        menuVisible,
        setMenuVisible
    } = props;

    const toggleMenu = (e) => {
        e.preventDefault();
        setMenuVisible(!menuVisible);
    }

    return (
        <header className='header'>
            <div id='logo-container'>
                <img src={logo} alt="Logo"/>
            </div>
            <div id='nav-container'>
                <button id='hamburger' className={`icon ${menuVisible ? 'hidden' : 'visible'}`} onClick={toggleMenu}>
                    <img src={menuIcon} alt="Open navigation menu" />
                </button>
                <nav id='nav-menu' className={menuVisible ? 'visible' : 'hidden'}>
                    <button id='close-menu-button' className={`icon ${menuVisible ? 'visible' : 'hidden'}`} onClick={toggleMenu}>
                        <img src={closeMenuIcon} alt="Close navigation menu" />
                    </button>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>New</a></li>
                        <li><a>Popular</a></li>
                        <li><a>Trending</a></li>
                        <li><a>Categories</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;