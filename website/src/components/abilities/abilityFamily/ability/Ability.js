import React from 'react';
import classes from './Ability.module.css';
import Rating from './rating/Rating';

const Ability = (props) => {

    return (
        <li className={classes.ability}>
            <p className={classes.title + ' ' + classes.animatedTitle}>{props.name} : </p>
            {
                isNaN(props.value) ? <p>{props.value}</p> : <Rating value={props.value} animated={classes.animatedRating}/>
            }
        </li>
    )
}
export default Ability;