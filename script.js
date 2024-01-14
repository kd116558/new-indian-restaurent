//nav bar activation
const header=document.querySelector(".header");
const btn=document.querySelector(".navicon");

btn.addEventListener('click', () => {
    header.classList.toggle("active")
})

//scroll animation

// Optimized for performance using IntersectionObserver
const options = {
    root: null,
    threshold: 0.5 // Adjust as needed
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll");
      } else {
        entry.target.classList.remove("scroll");
      }
    });
  }, options);
  
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Trigger animation on refresh as well
  window.addEventListener("load", () => {
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top >= 0) {
        section.classList.add("scroll");
      }
    });
  });
  



