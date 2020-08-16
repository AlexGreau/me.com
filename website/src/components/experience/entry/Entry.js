import React from 'react';
import classes from './Entry.module.css';

const Entry = (props) => {
    const location = (
        props.location ? <span className={classes.location}>
            <span class={"material-icons" + " " + classes.icon}>pin_drop</span>
            <p>{props.location}</p>
        </span>
            : null
    )
    const date = (
        props.dates ?
        <span className={classes.detailDate}>
            <span class={"material-icons" + " " + classes.icon}>event</span>
            {props.dates}
        </span>
        : null
    )

    const skills = (
        props.body ?
        <span className={classes.skillset}>
            <span class={"material-icons" + " " + classes.icon}>construction</span>
            {props.body}
        </span>
        : null
    )

    return (
        <li className={classes.container}>
            <span className={classes.date}>{props.dates}</span>
            <span className={classes.body}>
                <p className={classes.title}><strong >{props.subtitle} : {props.title}</strong></p>
                {location}
                {date}
                {skills}
            </span>
        </li>

    )
}
export default Entry;