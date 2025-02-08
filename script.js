// Check if the code is running in a browser or Node.js environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // Smooth Scrolling for Navigation Menu
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pop-Up Details for Skills
    const skills = document.querySelectorAll('.skills-list li');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`You clicked on ${skill.textContent}!`);
        });
    });

    // Header Animation on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');

        if (window.scrollY > 50) {
            header.style.backgroundColor = '#3E8E41';
        } else {
            header.style.backgroundColor = '#4CAF50';
        }
    });
} else {
    // Node.js-specific logic for testing
    const { JSDOM } = require("jsdom");

    const dom = new JSDOM(`
        <!DOCTYPE html>
        <html>
        <body>
            <header>Header</header>
            <nav class="nav-menu">
                <a href="#section1">Section 1</a>
                <a href="#section2">Section 2</a>
            </nav>
            <ul class="skills-list">
                <li>Skill 1</li>
                <li>Skill 2</li>
            </ul>
            <div id="section1">Section 1 Content</div>
            <div id="section2">Section 2 Content</div>
        </body>
        </html>
    `);

    const document = dom.window.document;

    // Simulate the functionality in Node.js
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        console.log(`Found navigation link: ${link.textContent}`);
    });

    const skills = document.querySelectorAll('.skills-list li');
    skills.forEach(skill => {
        console.log(`Found skill: ${skill.textContent}`);
    });
}
