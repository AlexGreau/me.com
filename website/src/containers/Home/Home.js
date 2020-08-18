import React from 'react';
import classes from './Home.module.css';
import Navbar from '../../components/navigation/toolbar/Navbar';
import pres from '../../components/description/self/SelfPres'
import SelfPres from '../../components/description/self/SelfPres';
import Skillset from '../../components/skillset/Skillset';
import ContactMe from '../../components/contactMe/ContactMe';
import Footer from '../../components/ui/footer/Footer';

const Home = (props) => { 
    return (
        <div className={classes.container}>
            <Navbar/>
            <div>
                <SelfPres/>
            </div>
            <div>
                <Skillset/>
            </div>
            <div>
                <ContactMe/>
            </div>
            <Footer/>

            {/* <div>The goal of this screen is to have a very short intro to the website :</div>
            <ul>
                <li>A navbar to be able to  shortcut to any pages</li>
                <li>small version of every sections, to intrigue the visitor and start building a relation ship</li>
                <li>A hire me button, in case the user is convinced</li>
            </ul> */}

        </div>
    )
}
export default Home;