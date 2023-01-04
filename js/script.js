const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
navBtn.addEventListener("click", function (e) {
  header.classList.toggle("open-nav");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav-link")) {
      header.classList.toggle("open-nav");
    }
  });
});

//////////////////////////////////////////////////////////
// Sticky Navigation
const heroSection = document.querySelector(".hero-box");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;