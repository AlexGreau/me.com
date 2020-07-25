import email from '../assets/contactLogos/email.png'
import github from '../assets/contactLogos/github.png'
import linkedIn from '../assets/contactLogos/linkedin.png'

// Linkedin
const LinkedIn = {
    index: 1,
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

// List of all the contact to be rendered in contact bar
const CONTACTS = [
    LinkedIn,
    Github,
    Email
]




export default CONTACTS;