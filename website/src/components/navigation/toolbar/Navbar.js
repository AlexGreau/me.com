import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';

const Navbar = (props) => {
    return (
        <nav className={classes.NavBar + ' ' + props.className}>
            <Logo></Logo>
            <div className={classes.resume}>Resume</div>
        </nav>
    )
}
export default Navbar;