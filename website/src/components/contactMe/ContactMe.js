import React, { useState, useEffect } from 'react';
import classes from './ContactMe.module.css';
import ContactBar from '../ui/contactBar/ContactBar';
import Input from '../ui/form/Input';

const ContactMe = (props) => {
    const EmailTarget = "mailto:";
    const EmailSubject = "subject=";
    const EmailBody = "body=";
    const QuerySeparator = "&";
    const Me = process.env.REACT_APP_EMAIL_ADDRESS;

    const [Sender_name, setSender_name] = useState('');
    const [Sender_subject, setSender_subject] = useState(null);
    const [Mail_body, setMail_body] = useState("");
    const [SendLink, setSendLink] = useState("mailto:" + Me);

    const buildSendingLink = () => {
        return EmailTarget + Me + QuerySeparator + EmailSubject + QuerySeparator + EmailBody;
    }

    useEffect(() => {
        setSendLink(buildSendingLink());
        return () => { }
    }, [Sender_name, Sender_subject, Mail_body])

    return (
        <div ref={props.ref} className={classes.contactMe}>
            <h2 className={props.familyTitleStyle}>Say hello !</h2>
            <div className={classes.container}>
                <div className={classes.contactOptions}>
                    <p>List of contact points OR Form</p>
                    <a href={SendLink}>{Me}</a>
                    <ContactBar />
                </div>
                <div className={classes.form}>
                    <Input elementType='input' />
                    <Input elementType='textarea'
                        value={Mail_body}
                        changed={(event) => setMail_body(event.target.value)}
                        placeholder={"Dear Alex, \n"} />
                </div>
            </div>
        </div>

    )
}
export default ContactMe;