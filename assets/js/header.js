// Wait until the entire DOM is updated (including dynamically loaded components)
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded, but header might not be ready yet");

  // Use MutationObserver to detect when the header is added
  const observer = new MutationObserver(() => {
      const menuToggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector("header nav");

      if (menuToggle) {
          console.log("menuToggle found! Adding event listener...");
          observer.disconnect(); // Stop observing once found

          menuToggle.addEventListener("click", () => {
              console.log("Menu toggle clicked");
              nav.classList.toggle("active");
          });
      }
  });

  // Observe changes in the body (or a specific container where the header is inserted)
  observer.observe(document.body, { childList: true, subtree: true });
});
