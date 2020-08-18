import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';
import NavItem from './navItem/NavItem';

import {ABOUT, PORTFOLIO, CONTACT} from '../../../constants/Routes'


const Navbar = (props) => {
    return (
        <nav className={classes.NavBar + ' ' + props.className}>
            <Logo></Logo>
            <span className={"material-icons" + " " + classes.icon} onClick={props.drawerToggleHandler}>menu</span>

            <div className={classes.LinkSection}>
                <NavItem name={"About"} destination={ABOUT} />
                <NavItem name={"Portfolio"} destination={PORTFOLIO} />
                <NavItem name={"Resume"} destination={props.refContact} />
                <NavItem name={"Contact"} destination={CONTACT} />
            </div>
        </nav>
    )
}
export default Navbar;