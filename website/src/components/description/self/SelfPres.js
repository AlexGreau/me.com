import React from 'react';
import { useState } from 'react';

import classes from './SelfPres.module.css';
import { FirebaseContext } from '../../Firebase/server';
import Spinner from '../../ui/spinner/Spinner'

const SelfPres = (props) => {
    const [imgURL, setImgURL] = useState(null);
    const img = (firebase) => {
        const Url = firebase.getProfileImg()
            .then(function (url) {
                setImgURL(url)
                return url;
            }).catch(function (error) {
                console.error(error)
            });;

        return (
            imgURL ? (
                <img
                className={classes.ProfilePic}
                    src={imgURL}
                    alt="My profile pic"
                ></img>)
                : <Spinner/>)
    };

    return (
        <div className={classes.Container}>
            <div className={classes.TitleModule}>
                <h1 className={classes.Hi}>Hi, I'm Alex</h1>
                <p className={classes.Subtitle}>Designer + developper</p>
                <hr className={classes.Separator} />

                <p className={classes.Intro}>
                    A Software engineer from France with a focus on Human Computer Interactions and
                    User experience.
            </p>
            </div>
            <div className={classes.ImgModule}>
                <FirebaseContext.Consumer>
                    {firebase => {
                        return img(firebase);
                    }}
                </FirebaseContext.Consumer>
            </div>

        </div>

    )
}
export default SelfPres;