import React from 'react';
import classes from './Rating.module.css';

const Rating = (props) => {
    const MAX_SCORE = 5;
    const FilledStarsArray = [];
    const EmptyStarsArray = [];

    for (let i = 0; i < props.value; i++) {
        FilledStarsArray.push(
            <i key={i} className={"material-icons " + classes.Filled}>star</i>
        )
    }

    for (let i = props.value; i < MAX_SCORE; i++) {
        EmptyStarsArray.push(
            <i key={i} className={"material-icons " + classes.Empty}>star</i>
        )
    }

    const FilledStars = (
        <React.Fragment>
            {FilledStarsArray.map(star => star)}
        </React.Fragment>
    )

    const EmptyStars = (
        <React.Fragment>
            {EmptyStarsArray.map(star => star)}
        </React.Fragment>
    )
    return (
        <div className={classes.Rating}>
            {FilledStars}
            {EmptyStars}
        </div>
    )
}
export default Rating;