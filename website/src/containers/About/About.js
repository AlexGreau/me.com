import React from 'react';
import classes from './About.module.css';

const About = (props) => {
    return (
        <div className={classes.container}>
            About
            <div>the goal here is to tell my story, who I am</div>
            <ul>
                <li>The goal of the website</li>
                <li>Storyline (swimming etc)</li>
                <li>Diplomas and Experience</li>
                <li>contact me to chat !</li>
            </ul>
            <div>Should have links to other pages </div>

        </div>
    )
}
export default About;