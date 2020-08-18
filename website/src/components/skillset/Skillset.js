import React from 'react';
import classes from './Skillset.module.css';
import SkillCard from './skillCard/SkillCard';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button'

import {PORTFOLIO} from '../../constants/Routes'

const Skillset = (props) => {
    return (
        <div className={classes.container}>
            <p>This is a Skillset</p>
            <SkillCard/>
            <Link to={PORTFOLIO}><Button>Explore my projects</Button></Link>
        </div>)
}
export default Skillset;