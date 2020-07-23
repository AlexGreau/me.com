import React from 'react';
import classes from './SelfPres.module.css';

const SelfPres = (props) => {
    return (
        <div>
            <h1 className={classes.Hi}>Hi, I'm Alex</h1>
            <p className={classes.Subtitle}>Designer + developper</p>
            <hr className={classes.Separator}/>

            <p className={classes.Intro}>
                A Software engineer from France with a focus on Human Computer Interactions and 
                User experience.
            </p>
        </div>
    )
}
export default SelfPres;