// =========================
// DARK MODE TOGGLE
// =========================

const darkModeToggle =
  document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  // SAVE THEME IN LOCAL STORAGE

  if (
    document.body.classList.contains("dark-mode")
  ) {

    localStorage.setItem("theme", "dark");

  } else {

    localStorage.setItem("theme", "light");
  }
});

// LOAD SAVED THEME

window.onload = () => {

  if (
    localStorage.getItem("theme") === "dark"
  ) {

    document.body.classList.add("dark-mode");
  }

  // START TYPING EFFECT

  typeEffect();
};

// =========================
// TYPING EFFECT
// =========================

const text =
  "Machine Learning Enthusiast | Full Stack Developer | AI Engineer";

let index = 0;

function typeEffect() {

  if (index < text.length) {

    document.getElementById("typing")
      .innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 70);
  }
}

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn =
  document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    scrollBtn.style.display = "flex";

  } else {

    scrollBtn.style.display = "none";
  }
});

// SMOOTH SCROLL TO TOP

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"
  });
});

// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      window.scrollY >= sectionTop
      &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === `#${current}`
    ) {

      link.classList.add("active");
    }
  });
});

// =========================
// HERO IMAGE PARALLAX EFFECT
// =========================

const profileImage =
  document.querySelector(".profile-img");

window.addEventListener("mousemove", (e) => {

  const x =
    (window.innerWidth / 2 - e.pageX) / 40;

  const y =
    (window.innerHeight / 2 - e.pageY) / 40;

  profileImage.style.transform =
    `translate(${x}px, ${y}px)`;
});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-5px) scale(1.03)";
  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0px) scale(1)";
  });
});

// =========================
// PROJECT CARD HOVER GLOW
// =========================

const projectCards =
  document.querySelectorAll(".project-card");

projectCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    card.style.background =
      `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(59,130,246,0.18),
        rgba(255,255,255,0.05)
      )
      `;
  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
      "rgba(255,255,255,0.08)";
  });
});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
  "%cWelcome to Manoj's Portfolio 🚀",
  "color:#3b82f6; font-size:16px; font-weight:bold;"
);
