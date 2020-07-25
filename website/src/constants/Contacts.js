import email from '../assets/contactLogos/email.png'
import github from '../assets/contactLogos/github.png'
import linkedIn from '../assets/contactLogos/linkedin.png'

// List of all the contact to be rendered in contact bar
const CONTACTS = [
    LinkedIn,
    Github,
    Email
]

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
    link: 'https://github.com/AlexGreau/Alex-Portfolio',
    img: github
}

// Email
const Email = {
    id: 3,
    name: "Email",
    link: 'mailto:alexgreau@live.fr',
    img: email
}




export default CONTACTS;