import React from 'react';
import classes from './Footer.module.css';
import Logo from '../logo/Logo';
import ContactBar from '../contactBar/ContactBar';

const Footer = (props) => {
    return (
        <div className={classes.container}>
            <Logo />
            <hr className={classes.contactSeparator} />
            {/* <p>{process.env.REACT_APP_EMAIL_ADDRESS}</p> */}
            <ContactBar />
        </div>)
}
export default Footer;