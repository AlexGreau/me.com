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
        return () => { }
    }, [Mail_subject, Mail_body])

    return (
        <div ref={props.ref}>
            <h1 className={props.familyTitleStyle}>Say hello !</h1>
            <div className={classes.container}>
                {/* <div className={classes.contactOptions}> */}
                <div className={classes.textInfoContainer}>
                    <p>If you have a project that you want to get started,
                             think you need my help with something or just fancy saying hey, then get in touch.</p>
                    {/* <p className={classes.textInfo}><span class="material-icons">place</span>  Saint-Raphael, FRANCE</p> */}
                    <p className={classes.textInfo}><span className="material-icons">alternate_email</span>
                        <a href={SendLink}>{Me}</a>
                    </p>
                    <div className={classes.contactBarContainer}>
                        <ContactBar />
                    </div>
                </div>

                {/* </div> */}
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
                        type="text"
                        label="Subjet :"
                    />

                    <Input elementType='textarea'
                        value={Mail_body}
                        changed={(event) => setMail_body(event.target.value)}
                        placeholder={"Dear Alex, \n"}
                        isRequired={true}
                        type="text"
                        label="Enquiry :"
                    />

                    <Input elementType="submit" value="Send over" />
                </form>
            </div>
        </div>

    )
}
export default ContactMe;