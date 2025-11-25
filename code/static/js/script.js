// ================================
// 🌙 Dark Mode Toggle
// ================================
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌓";
toggleBtn.classList.add("dark-toggle");
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Keep mode remembered
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}


// ================================
// ✍️ Typing Animation for Hero Text
// ================================
const typingText = document.querySelector(".hero h1 span");

if (typingText) {
  const words = ["Data Scientist", "Developer", "Creator"];
  let i = 0;

  function typeWord() {
    typingText.textContent = words[i];
    i = (i + 1) % words.length;
    setTimeout(typeWord, 2000);
  }

  typeWord();
}


// ================================
// 🔽 Smooth Scroll for Navigation
// ================================
const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ================================
// 🚀 Reveal Animation on Scroll
// ================================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run once on load

// ================================
// 🎉 Contact & Thank You Page Effects
// ================================
const thankyouSection = document.querySelector(".thankyou-section");
if (thankyouSection) {
  thankyouSection.classList.add("active");
  setTimeout(() => {
    thankyouSection.style.transition = "transform 0.6s ease";
    thankyouSection.style.transform = "scale(1.02)";
    setTimeout(() => {
      thankyouSection.style.transform = "scale(1)";
    }, 300);
  }, 300);
}
