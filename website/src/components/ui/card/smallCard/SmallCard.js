import React, { useState, useEffect } from 'react';
import classes from './SmallCard.module.css';
import { JOBS } from '../../../../constants/Routes'

const SmallCard = (props) => {
    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        fetchJobs();
    }, [jobs.length])

    const fetchJobs = () => {
        fetch(JOBS)
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
            <div className={classes.header}>
                <div className={classes.title}>Research officer </div>
                <div className={classes.company}>Company</div>
            </div>
            <div className={classes.body}>
                Phasellus finibus, libero et rhoncus cursus, purus mauris rutrum ipsum, sit amet faucibus massa urna at felis.
            </div>
            {/* <div className={classes.actionSection}>
                <Button>See more</Button>
            </div> */}
        </div>
    )

}
export default SmallCard;