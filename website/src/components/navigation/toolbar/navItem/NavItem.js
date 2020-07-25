import React from 'react';
import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <div onClick={() => props.clicked(props.destination)} className={classes.NavItem}>{props.name}</div>
    )
}
export default NavItem;