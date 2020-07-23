import React from 'react';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.logo}>
            Alex<span className={classes.secondary}>Greau</span>
        </div>
    )
}
export default Logo;