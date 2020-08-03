import React from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../ui/backdrop/Brackdrop';
import NavItem from '../toolbar/navItem/NavItem';
import ContactBar from '../../ui/contactBar/ContactBar';

const Drawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.isOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <React.Fragment>
            <Backdrop clicked={props.clicked} show={props.isOpen} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.CloseRow}>
                    <span className={"material-icons" + " " + classes.CloseIcon} onClick={props.clicked}>cancel</span>
                </div>
                <div className={classes.LinkSection}>
                    <NavItem name={"Abilities"} clicked={props.scrollTo} destination={props.refAbilities} />
                    <NavItem name={"Experience"} clicked={props.scrollTo} destination={props.refExperience} />
                    <NavItem name={"Contact"} clicked={props.scrollTo} destination={props.refContact} />
                </div>
                <div className={classes.ContactSection}>
                    <ContactBar />
                </div>
            </div>
        </React.Fragment>

    )
}
export default Drawer;