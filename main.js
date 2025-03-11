document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Typing Effect for Header Title
    const roles = ["Cybersecurity Engineer", "Cloud Security Specialist", "Cybersecurity Architect", "AI-Powered Security Expert"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, erasingSpeed);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});