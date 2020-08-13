import React from 'react';
import classes from './SmallCard.module.css';

const SmallCard = (props) => {
    return (
        <div className={classes.container + " " + props.styles}>
            <div className={classes.header}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.subtitle}>{props.subtitle}</div>
            </div>
            <div className={classes.body}>
                {props.body}
            </div>
            <div className={classes.footer}>
                {props.footer}
            </div>
        </div>
    )

}
export default SmallCard;