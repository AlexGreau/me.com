import React from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../ui/backdrop/Brackdrop';

const Drawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.isOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <React.Fragment>
            <Backdrop clicked={props.clicked} show={props.isOpen}/>
            <div className={attachedClasses.join(' ')}>
                {props.isOpen}
            </div>
        </React.Fragment>

    )
}
export default Drawer;