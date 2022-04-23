const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('li')
const navBtn = document.querySelector('#nav-btn')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    burger.classList.toggle('toggle')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        removeActive()
    })
})

navBtn.addEventListener('click', () => {
    removeActive()
})

function removeActive() {
    navLinks.classList.remove('active')
    burger.classList.remove('toggle')
}


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".showcase-img", { x : 30, opacity: 0 }, { x : 0, opacity: 1, duration: 1 });
tl.fromTo(".contact", { opacity: 0 }, { opacity: 1, duration: 1,}, "-=.7")
tl.fromTo(".social-links", { y:100, opacity: 0 }, { y:0, opacity: 1, duration: 1,}, "-=.7")
tl.fromTo(".logo", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1,});
tl.fromTo(".nav-links", { opacity: 0 }, { opacity: 1, duration: 1, }, "-=1");
tl.fromTo("#btn", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1,  }, "-=1.3");