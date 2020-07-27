import React from 'react';
import classes from './Experience.module.css';
import Education from './education/EducationSection';
import Work from './work/WorkSection'

const Experience = (props) => { 
    
    return (
        <div>
            <h2 className={props.familyTitleStyle}>Experience</h2>
            <Education/>
            <Work/>
        </div>
    )
}
export default Experience;