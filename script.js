// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Slider Controls
const slider = document.getElementById("slider");

function nextSlide() {
  slider.scrollLeft += 350;
}

function prevSlide() {
  slider.scrollLeft -= 350;
}

// Auto Slide
setInterval(() => {
  slider.scrollLeft += 350;

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollLeft = 0;
  }
}, 2500);

// Fade-in animation
const sections = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// Typing Animation
const typingText = document.getElementById("typing");
const words = ["Data Science Student", "Full Stack Developer", "AI Project Builder", "Automation Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  }

  let speed = isDeleting ? 70 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Mobile Menu Toggle
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}