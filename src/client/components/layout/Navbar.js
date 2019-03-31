import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav id="nav">
            <ul className="container">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">All books</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;