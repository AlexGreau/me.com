import React, { useState, useEffect } from 'react';
import classes from './WorkSection.module.css';
import SmallCard from '../../ui/card/smallCard/SmallCard';
import { JOBS } from '../../../constants/Routes'
import Spinner from '../../ui/spinner/Spinner';
import MONTHS from "../../../constants/DateFormats";


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
                        // Parsing the date
                        const xp = parseDate(res[Object.keys(res)[i]]);    
                        experiences.push(xp)
                    }
                    // sort the array of experiences : highest id first
                    // kept "id" as key to have more flexibility
                    experiences.sort((a,b) => {
                        if (a.id < b.id) {
                            return 1
                        } else {    
                            return -1
                        }
                    })
                    setJobs(experiences)
                })
            )
    }

    const parseDate = (xp) => {
        const startDate = new Date (xp.start);
        const endDate = new Date (xp.end);
        xp.start = MONTHS[startDate.getMonth()] + " " + startDate.getFullYear();
        if (!isNaN(endDate)) {
            xp.end = MONTHS[endDate.getMonth()] + " " + endDate.getFullYear();
        } else {
            xp.end = "Ongoing";
        }
        return xp;
    }


    const jobsDeck = (
        Array.isArray(jobs) && jobs.length ?
            jobs.map(job => {
                const footer = job.start && job.end ? job.start + " - " + job.end : null;

                return <SmallCard key={job.id}
                    title={job.role}
                    subtitle={job.company}
                    location={job.location}
                    body={job.skills}
                    footer={footer}
                />
            })
            : <Spinner />
    )

    return (
        <div className={classes.container}>
            <h3>Work section</h3>
            <div className={classes.deck}>
                {jobsDeck}
            </div>
        </div>
    )
}
export default WorkSection;