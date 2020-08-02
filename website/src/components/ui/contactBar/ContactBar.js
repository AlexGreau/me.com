import React from 'react';
import classes from './ContactBar.module.css';
import CONTACTS from '../../../constants/Contacts';
import { FirebaseContext } from '../../Firebase/server';

import CV_icon from '../../../assets/contactLogos/CV_icon.png'

import ContactItem from './contactItem/ContactItem';
import Resume from '../resume/Resume';


const ContactBar = (props) => {
    return (
        <div className={classes.ContactBar}>
            {/* Adding resume icon to the bar */}
            <Resume />
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