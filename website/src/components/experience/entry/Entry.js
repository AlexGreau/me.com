import React from 'react';
import classes from './Entry.module.css';

const Entry = (props) => {
    const xpDetails = props.location ? props.location + ", " + props.dates : props.dates;
    return (
        <li>
            <h3>{props.subtitle} : {props.title}</h3>
            <p>{xpDetails}</p>
            <p>{props.body}</p>
        </li>
    )
}
export default Entry;