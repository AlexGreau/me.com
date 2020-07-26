import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../../ui/logo/Logo';
import NavItem from './navItem/NavItem';


const Navbar = (props) => {
    return (
        <nav className={classes.NavBar + ' ' + props.className}>
            <Logo></Logo>
            <div className={classes.LinkSection}>
                <NavItem name={"Abilities"} clicked={props.scrollTo} destination={props.refAbilities} />
                <NavItem name={"Experience"} clicked={props.scrollTo} destination={props.refExperience} />
                <NavItem name={"Contact"} clicked={props.scrollTo} destination={props.refContact} />
            </div>
        </nav>
    )
}
export default Navbar;