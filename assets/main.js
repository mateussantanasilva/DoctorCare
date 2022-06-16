const navigation = document.getElementById('navigation')
const btnBackToTop = document.getElementById('btn-back-top')

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    changeColorNavOnScroll()

    showBtnBackToTopOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    
    const targetLine = scrollY + innerHeight / 2

    const topSection = section.offsetTop
    const heightSection = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = topSection <= targetLine 

    const bottomSection = topSection + heightSection
    const bootomSectionNotPassedTargetLine = bottomSection >= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && bootomSectionNotPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`#menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}


function changeColorNavOnScroll(){
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBtnBackToTopOnScroll(){
    if (scrollY > 400) {
        btnBackToTop.classList.add('show-btn-back-top')
    } else {
        btnBackToTop.classList.remove('show-btn-back-top')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

/* Scroll reveal */


let screenWidth = window.screen.widt

if(window.screen.width >= 1024){

    console.log('maior tela');

    //Scroll home
    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 700
    }).reveal(`
        #home header
    `)

    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 800
    }).reveal(`
        #home .content p
    `)

    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 900
    }).reveal(`
        #home .content a
    `)

    ScrollReveal({
        origin: 'right',
        distance: '40px',
        duration: 800
    }).reveal(`
        #home .column-b
    `)

    ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 700
    }).reveal(`
        #home #stats
    `)

    //Scroll services
    ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 700
    }).reveal(`
        #services header,
        #services .card
    `)

    //Scroll about
    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 700
    }).reveal(`
        #about .column-b,
        #about .column-a header
    `)
    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 800
    }).reveal(`
        #about .column-a p
    `)

    //Scroll contact
    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 700
    }).reveal(`
        #contact .column-b,
        #contact header
    `)

    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 800
    }).reveal(`
        #contact #info-contacts
    `)

    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 900
    }).reveal(`
        #contact .btn-whats
    `)

    //Scroll footer
    ScrollReveal({
        origin: 'left',
        distance: '40px',
        duration: 700
    }).reveal(`
        footer .column-a
    `)
    ScrollReveal({
        origin: 'right',
        distance: '40px',
        duration: 700
    }).reveal(`
        footer .column-b
    `)

}else{

    console.log('menor tela');
    ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 700
    }).reveal(`
        #home,
        #home header,
        #home .content,
        #home img,
        #home #statis,
        #services,
        #services header,
        #services .card,
        #about,
        #about header,
        #about .content p,
        #about .content img,
        #contact,
        #contact header,
        #contact .content #info-contacts,
        #contact .content a,
        #contact .content img,
        footer .wrapper
    `)

}