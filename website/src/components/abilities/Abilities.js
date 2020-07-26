import React from 'react';
import classes from './Abilities.module.css';
import Ability from './ability/Ability';


const Abilities = (props) => { 

    return (
        <div>
            <h2>Abilities section</h2>
            <Ability name={"ability 1"} value={2}/>
        </div>
    )
}
export default Abilities;