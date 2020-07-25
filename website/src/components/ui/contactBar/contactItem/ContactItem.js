import React from 'react';
import classes from './ContactItem.module.css';

const Contactitem = (props) => { 
    const { name, link, img } = props.social;

    return (
        <a href={link}>
            <img src={img} alt={name} className="socialProfileImg" />
        </a>
    )
}
export default Contactitem;