import React, { useEffect, useState } from 'react';
import classes from './Abilities.module.css';
import AbilityFamily from './abilityFamily/AbilityFamily';


const Abilities = (props) => {
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        const URL = process.env.REACT_APP_DATABASE_URL + process.env.REACT_APP_ABILITIES + ".json";
        const ABILITIES = [];
        fetch(URL)
            .then((response) => response.json()
                .then(rep => {
                    for (let elem in rep) {
                        const skillset = [];
                        for (let skill in rep[elem]) {
                            skillset.push([skill, rep[elem][skill]]);
                        };
                        const family = [elem, skillset];
                        ABILITIES.push(family);
                    }
                    setAbilities(ABILITIES);
                })
            )
            .catch(err => console.log(err))

    }, [abilities.length]);

    const ListOfAbilities = (
        <div className={classes.container}>
            {abilities.map(family => {
                return (
                    <AbilityFamily key={family[0]} name={family[0]} list={family[1]} />
                )
            })}
        </div>
    )

    return (
        <div>
            <h1 className={props.familyTitleStyle}>What I can do</h1>
            {ListOfAbilities}
        </div>
    )
}
export default Abilities;