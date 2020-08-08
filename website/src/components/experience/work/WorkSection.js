import React, { useState, useEffect } from 'react';
import classes from './WorkSection.module.css';
import SmallCard from '../../ui/card/smallCard/SmallCard';
import { JOBS } from '../../../constants/Routes'


const WorkSection = (props) => { 

    const [jobs, setJobs] = useState([])
    const url = process.env.REACT_APP_DATABASE_URL + JOBS;

    useEffect(() => {
        fetchJobs();
    }, [jobs.length])

    const fetchJobs = () => {
        fetch(url)
            .then((rep) => rep.json()
                .then(res => {
                    const experiences = [];
                    for (let i in Object.entries(res)) {
                        experiences.push(res[Object.keys(res)[i]])
                    }
                    setJobs(experiences)
                })
            )
    }


    return (
        <div className={classes.container}>
            <h3>Work section</h3>
            <SmallCard/>
        </div>
    )
}
export default WorkSection;