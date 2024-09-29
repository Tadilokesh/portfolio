const text = "Software Developer";
let index = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    }
}

type(); // Start the typing effect

document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.getElementById('Home');
    const aboutSection = document.getElementById('About');
    const projectsSection = document.getElementById('Projects');
    
    const contactSection = document.getElementById('Contact');

    // Initially hide all sections except Home
    aboutSection.style.display = 'none';
    projectsSection.style.display = 'none';
    contactSection.style.display = 'none';

    function showSection(sectionToShow) {
        // Hide all sections
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsSection.style.display = 'none';
       
        contactSection.style.display = 'none';

        // Show the selected section after a short delay
        setTimeout(() => {
            sectionToShow.style.display = 'block';
            sectionToShow.classList.add('animated'); // Add animation class if needed
        }, 200); // Adjust delay here (200ms for example)
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle click on Home link
    document.querySelector('a[href="#Home"]').addEventListener('click', function (e) {
        e.preventDefault();
        showSection(homeSection);
    });

    // Handle click on About link
    document.querySelector('a[href="#About"]').addEventListener('click', function (e) {
        e.preventDefault();
        showSection(aboutSection);
    });

    // Handle click on Projects link
    document.querySelector('a[href="#Projects"]').addEventListener('click', function (e) {
        e.preventDefault();
        showSection(projectsSection);
    });

    // Handle click on Portfolio link
    

    // Handle click on Contact link
    document.querySelector('a[href="#Contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        showSection(contactSection);
    });
});
