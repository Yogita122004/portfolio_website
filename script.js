// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});























































































































// // Smooth scrolling for navigation links
// document.querySelectorAll('nav a').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href').substring(1);
//     const targetSection = document.getElementById(targetId);
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Contact form validation
// const form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//   e.preventDefault();
  
//   const name = form.querySelector("input[type='text']").value.trim();
//   const email = form.querySelector("input[type='email']").value.trim();
//   const message = form.querySelector("textarea").value.trim();

//   if (!name || !email || !message) {
//     alert("Please fill out all fields.");
//     return;
//   }

//   // Basic email validation
//   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!email.match(emailPattern)) {
//     alert("Please enter a valid email address.");
//     return;
//   }

//   alert("Thank you for contacting me!");
//   form.reset();
// });