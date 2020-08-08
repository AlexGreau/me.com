import React, { useState, useEffect } from 'react';
import classes from './WorkSection.module.css';
import SmallCard from '../../ui/card/smallCard/SmallCard';
import { JOBS } from '../../../constants/Routes'
import Spinner from '../../ui/spinner/Spinner'


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
                    console.log(res)
                    const experiences = [];
                    for (let i in Object.entries(res)) {
                        experiences.push(res[Object.keys(res)[i]])
                    }
                    setJobs(experiences)
                })
            )
    }


    const jobsDeck = (
        Array.isArray(jobs) && jobs.length ?
            jobs.map(job => {
                return <SmallCard key={job.id}
                    title={job.role}
                    company={job.company}
                    location={job.location}
                    skills={job.skills}
                    startDate={job.start}
                    endDate={job.end}
                     />
            })
            : <Spinner />
    )

    return (
        <div className={classes.container}>
            <h3>Work section</h3>
            {jobsDeck}
        </div>
    )
}
export default WorkSection;