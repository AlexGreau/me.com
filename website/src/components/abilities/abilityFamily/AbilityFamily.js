import React from 'react';
import classes from './AbilityFamily.module.css';
import Ability from './ability/Ability';

const AbilityFamily = (props) => {

    const skillsList = () => {
        return (
            <ul className={classes.skillsList}>
                {props.list.map(skill => {
                    return <Ability key={skill[0]} name={skill[0]} value={skill[1]} />
                })}
            </ul>
        )
    }

    return (
        <div className={classes.family}>
            <h3 className={classes.title}>{props.name} :</h3>
            {skillsList()}
        </div>
    )
}
export default AbilityFamily;