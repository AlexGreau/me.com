import React from 'react';
import classes from './ContactBar.module.css';
import CONTACTS from '../../../constants/Contacts'

import ContactItem from './contactItem/ContactItem';


const ContactBar = (props) => {
    return (
        <div className={classes.ContactBar}>
            {
                CONTACTS.map(SOCIAL => {
                    return (
                        <ContactItem key={SOCIAL.id} social={SOCIAL} />
                    )
                })
            }
        </div>
    )
 
}
export default ContactBar;