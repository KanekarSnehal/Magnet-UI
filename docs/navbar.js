const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click",()=>{
    mobileNav.style.display="block"
})

closeBtn.addEventListener("click",()=>{
    mobileNav.style.display="none"
})