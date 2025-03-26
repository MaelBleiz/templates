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
