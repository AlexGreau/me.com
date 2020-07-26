import React from 'react';
import classes from './AbilityFamily.module.css';
import Ability from '../ability/Ability';

const AbilityFamily = (props) => {

    const skillsList = (
        <React.Fragment>
            {props.list.map(skill => {
                return <Ability key={skill[0]} name={skill[0]} value={skill[1]} />
            })}
        </React.Fragment>
    )
    return (
        <div>
            <h3>{props.name}</h3>
            {skillsList}
        </div>
    )
}
export default AbilityFamily;