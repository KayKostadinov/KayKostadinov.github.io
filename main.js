const heroImg = document.querySelector('.welcome');

let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

console.log(width)
if (width < 900) {
    heroImg.onload = () => {
        heroImg.style.backgroundImage = "linear-gradient(rgba($primary, 1) 0%, rgba(transparent, 0) 20%, rgba($teal, 0.2) 80%, rgba($primary, 1) 100%),url('../pictures/55.jpg')"
    }
}