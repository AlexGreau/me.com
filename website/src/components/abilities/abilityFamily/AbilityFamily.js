import React from 'react';
import classes from './AbilityFamily.module.css';
import Ability from './ability/Ability';

const AbilityFamily = (props) => {

    const skillsList = () =>{
        const half_length = Math.ceil(props.list.length / 2);
        const firstHalf = [...props.list].splice(0,half_length);
        const secondHalf = [...props.list].splice(half_length, props.list.length)
        
        return (
        <div className={classes.skillsList}>
            <div className={classes.col}>
                {firstHalf.map(skill => {
                    return <Ability key={skill[0]} name={skill[0]} value={skill[1]} />
                })}
            </div>
            <div className={classes.col}>
                {secondHalf.map(skill => {
                    return <Ability key={skill[0]} name={skill[0]} value={skill[1]} />
                })}
            </div>
        </div>
    )}

    return (
        <div className={classes.family}>
            <h3 className={classes.title}>{props.name} :</h3>
            {skillsList()}
        </div>
    )
}
export default AbilityFamily;