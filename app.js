const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  

  function animateLinks() {
    const screen = window.matchMedia("(max-width: 768px)");
    navLinks.forEach((link, index) => {
        if (link.style.animation && screen.matches) {
          link.style.animation = "";
        } else if(screen.matches){
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.7}s`;
        }
    });
  }

  //Toggle Nav
  burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      animateLinks();
  });

  //Toggle while clicking on links
  function linkToggle() {
    navLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
          nav.classList.toggle("nav-active");

          animateLinks();        
      });
    });
  }
  linkToggle();
};

navSlide();
