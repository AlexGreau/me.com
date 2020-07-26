import React from 'react';
import classes from './Ability.module.css';
import Rating from './rating/Rating';

const Ability = (props) => {

    return (
        <div className={classes.ability}>
            <p>{props.name} : </p>
            {
                isNaN(props.value) ? <p>{props.value}</p> : <Rating value={props.value} />
            }
        </div>
    )
}
export default Ability;