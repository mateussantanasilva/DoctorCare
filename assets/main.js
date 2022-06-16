const navigation = document.getElementById('navigation')
const btnBackToTop = document.getElementById('btn-back-top')

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    changeColorNavOnScroll()
    showBtnBackToTopOnScroll()
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
`);