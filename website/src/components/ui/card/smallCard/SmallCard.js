import React from 'react';
import classes from './SmallCard.module.css';

const SmallCard = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.company}>{props.company}</div>
            </div>
            <div className={classes.body}>
                {props.skills}
            </div>
            {/* <div className={classes.actionSection}>
                <Button>See more</Button>
            </div> */}
        </div>
    )

}
export default SmallCard;