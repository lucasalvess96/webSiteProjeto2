const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.navigation')
menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

function toggleMenu(){
    menuToggle.classList.remove('active')
    navigation.classList.remove('active')
}