import React from 'react';
import classes from './ContactItem.module.css';

const Contactitem = (props) => { 
    const { name, link, img, id } = props.social;
    const onClick = props.clicked;
    return (
        <a href={link} className={classes.item} onClick={onClick} key={'item' + id}>
            <img src={img} alt={name} className={classes.img} />
            <span className={classes.tooltiptext}>{name}</span>
        </a>
    )
}
export default Contactitem;