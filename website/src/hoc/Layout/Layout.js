import React from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import SelfPres from '../../components/description/self/SelfPres';

const Layout = (props) => {
    return (

        <React.Fragment>
            <Navbar className={classes.nav}></Navbar>
            <header>
                <div className={classes.header}>
                    <SelfPres></SelfPres>
                </div>
            </header>
            <main >
                {props.children}
            </main>
        </React.Fragment>
    )
}
export default Layout;