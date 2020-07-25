import React from 'react';
import classes from './ContactBar.module.css';
import CONTACTS from '../../../constants/Contacts';
import { FirebaseContext } from '../../Firebase/server';

import CV_icon from '../../../assets/contactLogos/CV_icon.png'

import ContactItem from './contactItem/ContactItem';


const ContactBar = (props) => {

    const buildCV = (firebase) => {
        /* <button className={classes.resume} onClick={firebase.getCV}>Resume</button> */
        const CV = {
            id: 0,
            name: "Resume",
            img: CV_icon
        }

        return (
            <ContactItem key={CV.id} social={CV} clicked={firebase.getCV} />
        )
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ContactBar}>
                <FirebaseContext.Consumer >
                    {firebase => {
                        return buildCV(firebase);
                    }}
                </FirebaseContext.Consumer>
                {
                    CONTACTS.map(SOCIAL => {
                        return (
                            <ContactItem key={SOCIAL.id} social={SOCIAL} />
                        )
                    })
                }
            </div>
        </div>

    )

}
export default ContactBar;