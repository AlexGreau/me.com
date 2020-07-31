import React from 'react';
import classes from './ContactMe.module.css';
import ContactBar from '../ui/contactBar/ContactBar';
import Input from '../ui/form/Input';

const ContactMe = (props) => {
    return (
        <div ref={props.ref} className={classes.contactMe}>
            <h2 className={props.familyTitleStyle}>Say hello !</h2>
            <div className={classes.container}>
                <div className={classes.contactOptions}>
                    <p>List of contact points OR Form</p>
                    <ContactBar/>
                    <Input elementType='input'/>
                    <Input elementType='textarea'/>

                </div>
            </div>
        </div>

    )
}
export default ContactMe;