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

//Website dark/light theme

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


//Responsive navigation menu toggle

//Scroll reveal animations

//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations