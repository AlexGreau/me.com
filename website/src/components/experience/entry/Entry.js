import React from 'react';
import classes from './Entry.module.css';

const Entry = (props) => { 
    return (
        <li >
            <h3>{props.subtitle} : {props.title}</h3>
            <p>{props.location}, {props.dates}</p>
            <p>{props.body}</p>
        </li>
    )
}
export default Entry;