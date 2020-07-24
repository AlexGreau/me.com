import React from 'react';
import classes from './Layout.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import SelfPres from '../../components/description/self/SelfPres';

const Layout = (props) => {
    return (

        <React.Fragment>
            <Navbar className={classes.nav}></Navbar>
            <header className={classes.header}> 
                    <SelfPres></SelfPres>
            </header>
            <main className={classes.main}>
                <hr className={classes.separator}/>
                {props.children}
            </main>
        </React.Fragment>
    )
}
export default Layout;