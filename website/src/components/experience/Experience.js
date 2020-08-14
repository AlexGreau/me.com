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
    const [jobs, setJobs] = useState([]);
    const [experiences, setExperiences] = useState([]);

    // effects
    useEffect(() => {
        fetchDiplomas();
        fetchJobs();
        sortExperiences();
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
                    setDiplomas(education)
                })
            )
    }

    const fetchJobs = () => {
        fetch(url_jobs)
            .then((rep) => rep.json()
                .then(res => {
                    const workXp = [];
                    for (let i in Object.entries(res)) {
                        workXp.push(res[Object.keys(res)[i]])
                    }
                    setJobs(workXp)
                })
            )
    }

    // utility
    const parseDate = (date) => {
        const startDate = new Date(date);
        return date ? MONTHS[startDate.getMonth()] + " " + startDate.getFullYear() : "Ongoing";
    }

    const sortExperiences = () => {
        const EXP = [...diplomas, ...jobs];
        // sorting 
        EXP.sort((a, b) => {
            const dateA = new Date(a.start);
            const dateB = new Date(b.start);
            if (dateA < dateB) {
                return 1
            } else {
                return -1
            }
        })
        setExperiences(EXP);
    }

    // sub sections 
    const timeline = (
        Array.isArray(experiences) && experiences.length ?
            experiences.map((xp, index) => {
                let card;
                if (xp.company) {
                    const jobFooter = parseDate(xp.start) && parseDate(xp.end) ? parseDate(xp.start) + " - " + parseDate(xp.end) : null;
                    card = (
                        <SmallCard key={xp.id}
                            title={xp.role}
                            subtitle={xp.company}
                            location={xp.location}
                            body={xp.skills}
                            footer={jobFooter}
                            styles={classes.job}
                        />
                    )
                } else if (xp.school) {
                    card = <SmallCard
                        key={xp.name}
                        title={xp.name}
                        subtitle={xp.school}
                        footer={parseDate(xp.date)}
                        styles={classes.diploma}
                    />
                }
                return card
            })
            : <Spinner />
    )

    return (
        <div>
            <h1 className={props.familyTitleStyle}>What I have been up to</h1>
            {timeline}
        </div>
    )
}
export default Experience;