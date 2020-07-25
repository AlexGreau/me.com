import React from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import SelfPres from '../../components/description/self/SelfPres';
import ContactBar from '../../components/ui/contactBar/ContactBar';

const Layout = (props) => {
    return (

        <div className={classes.container}>
            <Navbar className={classes.nav}></Navbar>
            <header className={classes.header}>
                <SelfPres></SelfPres>
            </header>

            <hr className={classes.separator} />
            <main className={classes.main}>
                {props.children}
            </main>

            <hr className={classes.separator} />
            <footer className={classes.footer}>
                <ContactBar />
            </footer>
        </div>
    )
}
export default Layout;