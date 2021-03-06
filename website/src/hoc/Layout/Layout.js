import React, { useState, useRef } from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import SelfPres from '../../components/description/self/SelfPres';
import ContactBar from '../../components/ui/contactBar/ContactBar';
import Logo from '../../components/ui/logo/Logo'
import ContactMe from '../../components/contactMe/ContactMe';
import Experience from '../../components/experience/Experience';
import Abilities from '../../components/abilities/Abilities';
import Drawer from '../../components/navigation/drawer/Drawer';

const Layout = (props) => {
    const CONTACT = useRef(null);
    const EXPERIENCE = useRef(null);
    const ABILITIES = useRef(null);

    const [showMenuDrawer, setShowMenuDrawer] = useState(false);

    const scrollToRef = (ref) => {
        if (showMenuDrawer) {
            closeDrawer();
        }
        window.scrollTo(0, ref.current.offsetTop)
    }

    const closeDrawer = () => {
        setShowMenuDrawer(false)
    }

    const openDrawer = () => {
        setShowMenuDrawer((prevState => !prevState))
    }

    return (
        <React.Fragment>
            <Drawer isOpen={showMenuDrawer}
                clicked={closeDrawer}
                scrollTo={scrollToRef}
                drawerToggleHandler={openDrawer}
                refContact={CONTACT}
                refExperience={EXPERIENCE}
                refAbilities={ABILITIES}
            />

            <div className={classes.container} >
                <Navbar className={classes.nav}
                    scrollTo={scrollToRef}
                    drawerToggleHandler={openDrawer}
                    refContact={CONTACT}
                    refExperience={EXPERIENCE}
                    refAbilities={ABILITIES}
                ></Navbar>
                <header className={classes.header}>
                    <SelfPres></SelfPres>
                </header>

                <hr className={classes.separator} ref={ABILITIES} />
                <main className={classes.main} >
                    {/* <hr className={classes.mainSeparator} ref={ABILITIES} /> */}
                    <Abilities familyTitleStyle={classes.familyTitle} />
                    <hr className={classes.mainSeparator} ref={EXPERIENCE} />
                    <Experience familyTitleStyle={classes.familyTitle} />
                    <hr className={classes.mainSeparator} ref={CONTACT} />
                    <ContactMe familyTitleStyle={classes.familyTitle} />
                </main>

                <hr className={classes.separator} />
                <footer className={classes.footer}>
                    <Logo />
                    <hr className={classes.contactSeparator} />
                    {/* <p>{process.env.REACT_APP_EMAIL_ADDRESS}</p> */}
                    <ContactBar />
                </footer>
            </div>
        </React.Fragment>

    )
}
export default Layout;