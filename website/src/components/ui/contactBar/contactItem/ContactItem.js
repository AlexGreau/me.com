import React from 'react';
import classes from './ContactItem.module.css';

const Contactitem = (props) => { 
    const { name, link, img } = props.social;

    return (
        <a href={link} className={classes.item}>
            <img src={img} alt={name} className={classes.img} />
        </a>
    )
}
export default Contactitem;