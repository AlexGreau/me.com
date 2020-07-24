import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';

import { FirebaseContext } from '../../Firebase/server';
import { RESUME } from '../../../constants/Routes'

const Navbar = (props) => {
    const bar = (firebase) => {
        return (
            <nav className={classes.NavBar + ' ' + props.className}>
                <Logo></Logo>
                <div className={classes.resume} onClick={firebase.getCV}>Resume</div>
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