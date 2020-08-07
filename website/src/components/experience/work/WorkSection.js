import React from 'react';
import classes from './WorkSection.module.css';
import SmallCard from '../../ui/card/smallCard/SmallCard';

const WorkSection = (props) => { 
    return (
        <div className={classes.container}>
            <h3>Work section</h3>
            <SmallCard/>
        </div>
    )
}
export default WorkSection;