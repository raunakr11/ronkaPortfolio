document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const skillsSection = document.getElementById('skills-section');
 
  const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           nav.classList.add('inverted');
         } else {
           nav.classList.remove('inverted');
         }
       });
     },
     {
       rootMargin: '0px 0px -575px 0px', // Adjust the threshold for triggering the color inversion
     }
  );
 
  observer.observe(skillsSection);
 });
 
