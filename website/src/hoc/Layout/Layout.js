import React, { useRef } from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import SelfPres from '../../components/description/self/SelfPres';
import ContactBar from '../../components/ui/contactBar/ContactBar';
import Logo from '../../components/ui/logo/Logo'
import ContactMe from '../../components/contactMe/ContactMe';

const Layout = (props) => {
    const CONTACT = useRef(null)
    const scrollToRef = (ref) => {
        window.scrollTo(0, ref.current.offsetTop)
    }

    return (

        <div className={classes.container} >
            <Navbar className={classes.nav} scrollTo={scrollToRef} contactRef={CONTACT} ></Navbar>
            <header className={classes.header}>
                <SelfPres></SelfPres>
            </header>

            <hr className={classes.separator} />
            <main className={classes.main} >
                {props.children}
                <hr className={classes.mainSeparator} ref={CONTACT} />
                <ContactMe />
            </main>

            <hr className={classes.separator} />
            <footer className={classes.footer}>
                <Logo />
                <hr className={classes.contactSeparator} />
                {/* <p>{process.env.REACT_APP_EMAIL_ADDRESS}</p> */}
                <ContactBar />
            </footer>
        </div>
    )
}
export default Layout;