import React, { useState, useEffect } from 'react';
import classes from './ContactMe.module.css';
import ContactBar from '../ui/contactBar/ContactBar';
import Input from '../ui/form/Input';

const ContactMe = (props) => {
    const EmailTarget = "mailto:";
    const EmailSubject = "subject=";
    const EmailBody = "body=";
    const QuerySeparator = "?";
    const Me = process.env.REACT_APP_EMAIL_ADDRESS;

    // const [Sender_name, setSender_name] = useState('');
    const [Mail_subject, setMail_subject] = useState('');
    const [Mail_body, setMail_body] = useState("");
    const [SendLink, setSendLink] = useState("mailto:" + Me);

    useEffect(() => {
        const newLink = EmailTarget + Me + QuerySeparator
            + EmailSubject + Mail_subject + QuerySeparator
            + EmailBody + Mail_body;

        setSendLink(newLink);
        return () => { }
    }, [Mail_subject, Mail_body])

    return (
        <div ref={props.ref} className={classes.contactMe}>
            <h2 className={props.familyTitleStyle}>Say hello !</h2>
            <div className={classes.container}>
                <div className={classes.contactOptions}>
                    <p>List of contact points OR Form</p>
                    <a href={SendLink}>{Me}</a>
                    <ContactBar />
                </div>
                <form className={classes.form}
                    action={SendLink}
                >
                    <Input elementType='input'
                        value={Mail_subject}
                        changed={(event) => {
                            setMail_subject(event.target.value)
                        }
                        }
                        placeholder={"Subject"}
                    />
                    <Input elementType='textarea'
                        value={Mail_body}
                        changed={(event) => setMail_body(event.target.value)}
                        placeholder={"Dear Alex, \n"} />

                    <Input elementType="submit" value="Send over">
                        {/* <Button>Send over</Button> */}
                    </Input>
                </form>
            </div>
        </div>

    )
}
export default ContactMe;