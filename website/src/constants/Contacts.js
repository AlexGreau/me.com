import email from '../assets/contactLogos/email.png'
import github from '../assets/contactLogos/github.png'
import linkedIn from '../assets/contactLogos/linkedin.png'
import CV_icon from '../assets/contactLogos/CV_icon.png'

// Linkedin
const LinkedIn = {
    id: 1,
    name: "LinkedIn",
    img: linkedIn,
    link: 'https://www.linkedin.com/in/alexandre-greau/'
}

// Github
const Github = {
    id: 2,
    name: "Github",
    link: 'https://github.com/AlexGreau/me.com',
    img: github
}

// Email
const Email = {
    id: 3,
    name: "Email",
    link: 'mailto:' + process.env.REACT_APP_EMAIL_ADDRESS,
    img: email
}

// CV
const CV = {
    id: 4,
    name: "Resume",
    link: 'mailto:' + process.env.REACT_APP_EMAIL_ADDRESS,
    img: CV_icon
}


// List of all the contact to be rendered in contact bar
const CONTACTS = [
    LinkedIn,
    Github,
    Email
]




export default CONTACTS;