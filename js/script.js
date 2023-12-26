const slides = document.querySelectorAll('.slide'); const prevButton = document.querySelector('.prev'); const nextButton = document.querySelector('.next'); let currentSlide = 0;

function showSlide() { slides.forEach((slide) => { slide.classList.remove('active'); }); slides[currentSlide].classList.add('active'); }

function nextSlide() { currentSlide++; if (currentSlide >= slides.length) { currentSlide = 0; } showSlide(); }

function prevSlide() { currentSlide--; if (currentSlide < 0) { currentSlide = slides.length - 1; } showSlide(); } nextButton.addEventListener('click', nextSlide); prevButton.addEventListener('click', prevSlide); setInterval(nextSlide, 20000);

window.addEventListener('scroll', function () {
    let scrollToTopButton = document.getElementById('scrollToTopButton'); if (window.scrollY > 200) { scrollToTopButton.style.display = 'block'; } else { scrollToTopButton.style.display = 'none'; }
}); document.getElementById('scrollToTopButton').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

let slideIndex = 0; showSlides(); function showSlides() { let i; let slides = document.getElementsByClassName("mySlides"); for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; } slideIndex++; if (slideIndex > slides.length) { slideIndex = 1 } slides[slideIndex - 1].style.display = "block"; setTimeout(showSlides, 20000); } function plusSlides(n) { showSlides(slideIndex += n); }

window.onload = () => {const loadingScreen = document.getElementById("loading-screen");const content = document.getElementById("sayt");setTimeout(() => {setTimeout(() => {loadingScreen.style.display = "none";content.style.display = "block";}, 1000);}, 5000);};

let menu__item = document.querySelectorAll('.menu__item')

let menu__box = document.querySelector('.menu__box')

let menu__btn = document.querySelector('.menu__btn')

menu__box.onclick = () => {menu__box.style.display = "none"}

menu__btn.onclick = () => {menu__box.style.display = "block"}