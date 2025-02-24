// ====SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //   menu show
    // validate if constant exist
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    // menu hidden
    // validate if constant exist
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
    }

// ==== REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ==== SWIPER PROJECTS
let swiperProjects = new Swiper(".projects__container", {
    loop:true,
    spaceBetween: 24,
    
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 140,
        },
        1441: {
            slidesPerView: 2,
            spaceBetween: 250,
          },
      },
    mousewheel: true,
    keyboard: true,
});


// ==== EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields'
    }else{
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_qvlp56g', 'template_a4hz72n', '#contact-form', 'DMU9wyf-MxaYaKtdz')
            .then(()=>{
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Message sent ✔️'

                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

            //clear the input field
            contactEmail.value = ''
            contactName.value = ''
            contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

// ==== SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// ==== SHOW SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// ====DARK LIGHT THEME : DARK MODE
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ===CHANGE BACKGROUND HEADER
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// ===SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal('.home__data, .projects__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification__content, .services__card', {interval: 100})


