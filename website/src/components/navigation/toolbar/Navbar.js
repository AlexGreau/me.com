import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';

import { FirebaseContext } from '../../Firebase/server';

const Navbar = (props) => {
    const bar = (firebase) => {
        return (
            <nav className={classes.NavBar + ' ' + props.className}>
                <Logo></Logo>
                <button className={classes.resume} onClick={firebase.getCV}>Resume</button>
            </nav>
        )
    }

    return (
        <FirebaseContext.Consumer>
            {firebase => {
                return bar(firebase);
            }}
        </FirebaseContext.Consumer>
    )
}
export default Navbar;