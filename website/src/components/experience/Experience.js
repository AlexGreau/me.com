import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from '../ui/spinner/Spinner';
import SmallCard from '../ui/card/smallCard/SmallCard';
import { JOBS } from '../../constants/Routes';
import { DIPLOMAS } from '../../constants/Routes';
import MONTHS from "../../constants/DateFormats";


import classes from './Experience.module.css';

const Experience = (props) => {
    // url
    const url_education = process.env.REACT_APP_DATABASE_URL + DIPLOMAS;
    const url_jobs = process.env.REACT_APP_DATABASE_URL + JOBS;

    // states
    const [diplomas, setDiplomas] = useState([]);
    const [jobs, setJobs] = useState([])

    // effects
    useEffect(() => {
        fetchDiplomas();
        fetchJobs();
    }, [diplomas.length, jobs.length])

    // fetches
    const fetchDiplomas = () => {
        fetch(url_education)
            .then((rep) => rep.json()
                .then(res => {
                    const education = [];
                    for (let i in Object.entries(res)) {
                        education.push(res[Object.keys(res)[i]])
                    }
                    console.log(education)
                    setDiplomas(education)
                })
            )
    }

    const fetchJobs = () => {
        fetch(url_jobs)
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
                    experiences.sort((a, b) => {
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

    // utility
    const parseDate = (date) => {
        const startDate = new Date(xp.start);
        const endDate = new Date(xp.end);
        xp.start = MONTHS[startDate.getMonth()] + " " + startDate.getFullYear();
        if (!isNaN(endDate)) {
            xp.end = MONTHS[endDate.getMonth()] + " " + endDate.getFullYear();
        } else {
            xp.end = "Ongoing";
        }
        return xp;
    }

    // sub sections 
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

    const educationDeck = (
        Array.isArray(diplomas) && diplomas.length ?
            diplomas.map(dip => {
                return <SmallCard
                    key={dip.name}
                    title={dip.name}
                    subtitle={dip.school}
                    footer={dip.date}
                />
            })
            : <Spinner />
    )

    return (
        <div>
            <h1 className={props.familyTitleStyle}>What I have been up to</h1>
            {jobsDeck}
            {educationDeck}
        </div>
    )
}
export default Experience;