import React from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import SelfPres from '../../components/description/self/SelfPres';

const Layout = (props) => {
    return (

        <React.Fragment>
            <Navbar className={classes.nav}></Navbar>
            <main className={classes.container}>
                <SelfPres></SelfPres>
                {props.children}
            </main>
        </React.Fragment>
    )
}
export default Layout;