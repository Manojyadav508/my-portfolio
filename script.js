/* =========================================
   AOS ANIMATION
========================================= */

AOS.init({
  duration: 1000,
  once: true,
});

/* =========================================
   TYPING EFFECT
========================================= */

const typingElement = document.getElementById("typing");

const text =
  "Machine Learning • Deep Learning • Full Stack Development • AI Solutions";

let index = 0;

function typeWriter() {
  if (!typingElement) return;

  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", () => {
  typeWriter();
});

/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (!scrollBtn) return;

  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================================
   ACTIVE NAVBAR LINK
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================================
   DARK MODE TOGGLE
========================================= */

const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const icon = darkModeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

/* =========================================
   BUTTON HOVER ANIMATION
========================================= */

const buttons = document.querySelectorAll(
  ".hero-btn, .project-btn, .contact-btn"
);

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

/* =========================================
   CONTACT FORM SUCCESS MESSAGE
========================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    setTimeout(() => {
      alert("Message sent successfully!");
    }, 500);
  });
}
