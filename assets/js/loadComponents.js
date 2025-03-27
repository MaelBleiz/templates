async function loadComponent(selector, file) {
    const element = document.querySelector(selector);
    
    if (!element) {
        console.warn(`Element ${selector} not found. Skipping ${file}`);
        return;
    }

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}`);

        const data = await response.text();
        element.innerHTML = data;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let pathPrefix = window.location.pathname.includes("pages") ? "../" : "";  // If "pages" folder, go up one level
    const components = [
      
        { selector: "#header", file: pathPrefix + "components/header.html" },
        { selector: "#hero", file: "components/hero.html" },
        { selector: "#prices", file: "components/plans.html" },
        { selector: "#services", file: "components/services.html" },
        { selector: "#location", file: "components/location.html" },
        { selector: "#footer", file: "components/footer.html" },
        { selector: "#FAQ", file: "components/FAQ.html" },


       //  { selector: "#contact", file: "components/contact.html" } 
    ];

    components.forEach(({ selector, file }) => loadComponent(selector, file));
});
