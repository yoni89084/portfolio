import React from 'react';
import avatar from '../images/myimage.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className="links">
                <div className="profile">
                    <img src={avatar} alt="My Avatar" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" activeclassname="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" activeclassname="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/project" activeclassname="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" activeclassname="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>&copy; All rights reserved</p>
                </footer>
            </nav>
        </div>
    );
};

export default Navbar;
