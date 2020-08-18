import React from 'react';
import classes from './Skillset.module.css';
import SkillCard from './skillCard/SkillCard'

const Skillset = (props) => {
    return (
        <div className={classes.container}>
            <p>This is a Skillset</p>
            <SkillCard/>
        </div>)
}
export default Skillset;