import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';

const Navbar = (props) => {

    return (
        <nav className={classes.NavBar + ' ' + props.className}>
            <Logo></Logo>
            <div>
                <div onClick={() => props.scrollTo(props.contactRef)}>Contact</div>
            </div>
        </nav>
    )
}
export default Navbar;