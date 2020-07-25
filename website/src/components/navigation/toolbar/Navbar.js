import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';

import { FirebaseContext } from '../../Firebase/server';

const Navbar = (props) => {

    return (
        <nav className={classes.NavBar + ' ' + props.className}>
            <Logo></Logo>
        </nav>
    )
}
export default Navbar;