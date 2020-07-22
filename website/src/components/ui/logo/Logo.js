import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <a className={classes.logo}>
            Alex<span className={classes.secondary}>Greau</span>
        </a>
    )
}
export default Logo;