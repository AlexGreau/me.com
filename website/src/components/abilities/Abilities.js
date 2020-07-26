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
                    // console.log('full response :', rep)
                    for (let elem in rep) {
                        const skillset = [];
                        for (let skill in rep[elem]) {
                            skillset.push([skill, rep[elem][skill]]);
                        };
                        const family = [elem, skillset];
                        ABILITIES.push(family);
                    }
                    console.log("final array", ABILITIES)
                    setAbilities(ABILITIES);
                })
            )
            .catch(err => console.log(err))

    }, [abilities.length]);

    console.log(abilities.length)

    
    const ListOfAbilities = (
        <React.Fragment>
            {abilities.map(family => {
                return (
                    <AbilityFamily key={family[0]} name={family[0]} list={family[1]} />
                )
            })}
        </React.Fragment>
    )

    return (
        <div>
            <h2>Abilities section</h2>
            {ListOfAbilities}
        </div>
    )
}
export default Abilities;