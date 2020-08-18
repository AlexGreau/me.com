import React from 'react';
import classes from './Resume.module.css';
import CV_icon from '../../../assets/contactLogos/CV_icon.png'
import { FirebaseContext } from '../../Firebase/server';
import ContactItem from '../contactBar/contactItem/ContactItem';

const Resume = (props) => {

    const CV = {
        id: 0,
        name: "Resume",
        img: CV_icon
    }

    return (
        <FirebaseContext.Consumer>
            {firebase => {
                return <ContactItem key={CV.id} social={CV} clicked={firebase.getCV} />;
            }}
        </FirebaseContext.Consumer>
    )
}

export default Resume;