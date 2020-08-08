import React from 'react';
import classes from './SmallCard.module.css';
import Button from '../../button/Button';

const SmallCard = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>Title</div>
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