import React from 'react';
import classes from './AbilityFamily.module.css';
import Ability from '../ability/Ability';

const AbilityFamily = (props) => {

    const skillsList = (
        <div className={classes.skillsList}>
            <div className={classes.col}>
                {props.list.map(skill => {
                    return <Ability key={skill[0]} name={skill[0]} value={skill[1]} />
                })}
            </div>
            <div className={classes.col}>
                {props.list.map(skill => {
                    return <Ability key={skill[0]} name={skill[0]} value={skill[1]} />
                })}
            </div>
        </div>
    )
    return (
        <div className={classes.family}>
            <h3 className={classes.title}>{props.name} :</h3>
            {skillsList}
        </div>
    )
}
export default AbilityFamily;