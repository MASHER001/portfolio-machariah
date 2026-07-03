const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀" : "☾";
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuButton.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const values = ["name", "email", "subject", "message"].map((key) =>
    String(formData.get(key) || "").trim()
  );

  if (values.some((value) => value.length === 0)) {
    formStatus.textContent = "Please complete all fields before sending.";
    return;
  }

  formStatus.textContent = "Thank you. Your message is ready to be sent.";
  contactForm.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
