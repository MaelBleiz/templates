

/* scrolling effect*/
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");
    console.log(`Found ${elements.length} hidden elements`);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("Making visible:", entry.target);
          entry.target.classList.add("show"); // Add class when visible
        }
      });
    });
  
    elements.forEach((el) => observer.observe(el));
  });


  /* Type effect */
const text = "Your cosy place near Elterleinplatz in Hernals.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-effect").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();


// Header scrolling effect //

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  // Check if header exists
  if (!header) return;

  // Adjust the header class based on scroll position
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});


// FAQ
document.addEventListener("DOMContentLoaded", function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
      question.addEventListener("click", function() {
          const answer = question.nextElementSibling; // Get the corresponding answer

          if (answer.style.display === "block") {
              answer.style.display = "none"; // Hide answer if it's open
          } else {
              answer.style.display = "block"; // Show answer if it's closed
          }
      });
  });
});


