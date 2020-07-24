import app from 'firebase/app';
import "firebase/storage";
import {RESUME, PROFILE_PIC} from '../../constants/Routes';
import React from "react"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASURMENTID
};

class Firebase {
    constructor() {
        this.app = app.initializeApp(firebaseConfig);
        this.storage = app.storage();
    }

    getCV = () => {
        this.storage.refFromURL("gs://mecom-8f0c4.appspot.com")
        .child(RESUME)
        .getDownloadURL()
        .then(function (url) {
            window.open(url, 'yoyoyo');
        }).catch(function (error) {
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
    }

    getProfileImg = () => {
        return this.storage.refFromURL("gs://mecom-8f0c4.appspot.com")
        .child(PROFILE_PIC)
        .getDownloadURL();

        // this.storage.refFromURL("gs://mecom-8f0c4.appspot.com")
        // .child(PROFILE_PIC)
        // .getDownloadURL()
        // .then(function (url) {
        //     console.log("url in firebase object ", url)
        //     return url;
        // }).catch(function (error) {
        //    console.error(error)
        // });
    }
}

export default Firebase;