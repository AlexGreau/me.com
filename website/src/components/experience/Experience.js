import React from 'react';
import classes from './Experience.module.css';
import Education from './education/EducationSection';
import Work from './work/WorkSection'

const Experience = (props) => { 
    
    return (
        <div>
            <h1 className={props.familyTitleStyle}>What I have been up to</h1>
            <Education/>
            <Work/>
        </div>
    )
}
export default Experience;