import React from 'react';
import classes from './ContactMe.module.css';

const ContactMe = (props) => {
    return (
        <div ref={props.ref}>
            <h2 className={props.familyTitleStyle}>Say hello !</h2>
            <p>map of where i am</p>
            <p>List of contact points OR Form</p>
        </div>

    )
}
export default ContactMe;