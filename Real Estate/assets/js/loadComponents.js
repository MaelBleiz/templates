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
    const components = [
        { selector: "#header", file: "components/header.html" },
        { selector: "#footer", file: "components/footer.html" },
        { selector: "#hero", file: "components/hero.html" },
        { selector: "#pictures", file: "components/pictures.html" },
        { selector: "#reviews", file: "components/reviews.html" },
        { selector: "#services", file: "components/services.html" },
        { selector: "#prices", file: "components/plans.html" },
        { selector: "#location", file: "components/location.html" },
        { selector: "#contact", file: "components/contact.html" }
    ];

    components.forEach(({ selector, file }) => loadComponent(selector, file));
});
