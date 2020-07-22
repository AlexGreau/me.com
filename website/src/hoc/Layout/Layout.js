import React from 'react';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (

        <React.Fragment>
            <main>
                <h1 className={classes.presentation}>Hi, I'm Alex</h1>
                {props.children}
            </main>
        </React.Fragment>
    )
}
export default Layout;