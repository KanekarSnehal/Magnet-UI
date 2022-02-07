const hamburger = document.querySelector('.hamburger');
const navbarContainer = document.querySelector('.navbar-container');

let isNavbarOpen=false;
hamburger.addEventListener("click", ()=>{
    if(!isNavbarOpen){
        navbarContainer.style.display="block";
        navbarContainer.style.height="88vh";
        navbarContainer.style.overflowY="scroll";
    }
    else{
        navbarContainer.style.display=null;
        navbarContainer.style.height=null;
        navbarContainer.style.overflowY=null;
    }
    isNavbarOpen=!isNavbarOpen;
})