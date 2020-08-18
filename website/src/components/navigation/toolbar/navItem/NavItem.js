import React from 'react';
import classes from './NavItem.module.css';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <Link className={classes.NavItem} to={props.destination} onClick={props.clicked}>{props.name}</Link>
    )
}
export default NavItem;