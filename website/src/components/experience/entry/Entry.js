import React from 'react';
import classes from './Entry.module.css';

const Entry = (props) => {
    const xpDetails = props.location ? props.location + ", " + props.dates : props.dates;
    return (
        <li className={classes.container}>
            <span className={classes.date}>{props.dates}</span>
            <span className={classes.body}>
                <p className={classes.title}><strong >{props.subtitle} : {props.title}</strong></p>
                <p>{xpDetails}</p>
                <p className={classes.skillset}>{props.body}</p>
            </span>

        </li>

    )
}
export default Entry;