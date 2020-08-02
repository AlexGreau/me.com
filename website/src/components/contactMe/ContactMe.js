import React, { useState, useEffect } from 'react';
import classes from './ContactMe.module.css';
import ContactBar from '../ui/contactBar/ContactBar';
import Input from '../ui/form/Input';

const ContactMe = (props) => {
    const EmailTarget = "mailto:";
    const EmailSubject = "subject=";
    const EmailBody = "body=";
    const Me = process.env.REACT_APP_EMAIL_ADDRESS;

    // const [Sender_name, setSender_name] = useState('');
    const [Mail_subject, setMail_subject] = useState('');
    const [Mail_body, setMail_body] = useState("");
    const [SendLink, setSendLink] = useState("");

    useEffect(() => {
        const newLink = EmailTarget + Me + "?"
            + EmailSubject + Mail_subject + "&"
            + EmailBody + Mail_body;

        setSendLink(newLink);
        console.log(SendLink)
        return () => { }
    }, [Mail_subject, Mail_body])

    return (
        <div ref={props.ref} className={classes.contactMe}>
            <h2 className={props.familyTitleStyle}>Say hello !</h2>
            <div className={classes.container}>
                <div className={classes.contactOptions}>
                    <p>List of contact points OR Form</p>
                    <a href={SendLink} onClick={() => console.log(SendLink)}>{Me}</a>
                    <ContactBar />
                </div>
                <form className={classes.form}
                    action={SendLink}
                    method="post">
                    <Input elementType='input'
                        value={Mail_subject}
                        changed={(event) => {
                            setMail_subject(event.target.value)
                        }}
                        placeholder={"Subject"}
                        isRequired={true}
                        type="email"
                        label="Subjet :"
                    />

                    <Input elementType='textarea'
                        value={Mail_body}
                        changed={(event) => setMail_body(event.target.value)}
                        placeholder={"Dear Alex, \n"}
                        isRequired={true}
                        label="Enquiry :"   
                        />

                    <Input elementType="submit" value="Send over" />
                </form>
            </div>
        </div>

    )
}
export default ContactMe;