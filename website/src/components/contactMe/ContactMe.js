import React from 'react';
import classes from './ContactMe.module.css';
import Map from '../ui/map/Map';
import ContactBar from '../ui/contactBar/ContactBar';

const ContactMe = (props) => {
    return (
        <div ref={props.ref} className={classes.contactMe}>
            <h2 className={props.familyTitleStyle}>Say hello !</h2>
            <div className={classes.container}>
                <Map />
                <div className={classes.contactOptions}>
                    <p>List of contact points OR Form</p>
                    <ContactBar/>

                </div>
            </div>
        </div>

    )
}
export default ContactMe;