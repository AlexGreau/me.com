import React from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';

const Layout = (props) => {
    return (

        <React.Fragment>
            <Navbar className={classes.nav}></Navbar>
            <main className={classes.container}>
                <h1 className={classes.presentation}>Hi, I'm Alex</h1>
                {props.children}
            </main>
        </React.Fragment>
    )
}
export default Layout;