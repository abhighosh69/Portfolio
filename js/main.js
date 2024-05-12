//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
//Portfolio section - Modal
    const projectModals = document.querySelectorAll(".projects-model");
    const imgCards = document.querySelectorAll(".img-card");
    const projectClosseBtns = document.querySelectorAll(".projects-close-btn");
    
    var projectModal = function (modalClick) {
        projectModals[modalClick].classList.add("active");
    }
    
    imgCards.forEach((imgCard, i) => {
        imgCard.addEventListener("click", () =>{
            projectModal(i);
        });
    });

    projectClosseBtns.forEach((projectClosseBtn) => {
        projectClosseBtn.addEventListener("click", () =>{
            projectModals.forEach((projectModalView) => {
                projectModalView.classList.remove("active");
            });
        });
    });

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations