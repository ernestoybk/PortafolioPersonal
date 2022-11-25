/* ========== Mostrar Menú ==========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*========== Menú Visible ==========*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========== Menú Oculto ==========*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* ========== ELiminar Menú Mobile ==========*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ========== Work Filters - Mixit ==========*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__container-element'
    },
    animation: {
        duration: 300
    }
});

/* ========== Link active work ==========*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork));


/* ========== Email JS==========*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){

        //Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //Show message
        contactMessage.textContent = 'Debes completar todos los campos 🧐'
    }else{
        //serviceID - templateID - #form - Publickey
        emailjs.sendForm('service_5ie9h6s','template_o5oixtw','#contact-form','Xqb8QY66DTeRZ2aPx')
        .then(()=>{
            //Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'

            //Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)
        })
    }
}
contactForm.addEventListener('submit', sendEmail)