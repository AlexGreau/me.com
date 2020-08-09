import React from 'react';
import classes from './EducationSection.module.css';
import SmallCard from '../../ui/card/smallCard/SmallCard';
import { useState, useEffect } from 'react';
import { DIPLOMAS } from '../../../constants/Routes'

const EducationSection = (props) => {

    const [diplomas, setDiplomas] = useState([]);
    const url = process.env.REACT_APP_DATABASE_URL + DIPLOMAS;

    useEffect(() => {
        fetchDiplomas();
    }, [diplomas.length])

    const fetchDiplomas = () => {
        fetch(url)
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

    return (
        <div>
            <h3>Education section</h3>
            <SmallCard/>
        </div>
    )
}
export default EducationSection;