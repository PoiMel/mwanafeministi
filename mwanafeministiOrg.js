// Navigation: highlight active tab on click
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Dynamically load blog posts (optional)
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.querySelector(".blog-container");

  const posts = [
    {
      title: "Feminist Economies",
      image: "images/blog1.jpg",
      link: "https://example.com/post1",
    },
    {
      title: "Rest as Resistance",
      image: "images/blog2.jpg",
      link: "https://example.com/post2",
    },
    {
      title: "Radical Pleasure",
      image: "images/blog3.jpg",
      link: "https://example.com/post3",
    },
  ];

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");
    postElement.innerHTML = `
      <a href="${post.link}" target="_blank">
        <img src="${post.image}" alt="${post.title}" class="blog-img" />
        <h3>${post.title}</h3>
      </a>
    `;
    blogContainer.appendChild(postElement);
  });
});

// Join form
const joinForm = document.querySelector(".join-form");
if (joinForm) {
  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for joining and contributing to Mwanafeministi Org!");
    joinForm.reset();
  });
}

// Smooth scroll for nav
document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Resource toggle for each resource-list (+/-)
document.querySelectorAll(".resource-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const targetId = btn.getAttribute("data-target");
    const list = document.getElementById(targetId);
    const sign = btn.querySelector(".plusminus");
    if (list.style.display === "one" || list.style.display === "") {
      list.style.display = "block";
      sign.textContent = "-";
    } else {
      list.style.display = "none";
      sign.textContent = "+";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".resource-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const resourceList = document.getElementById(targetId);

      if (
        resourceList.style.display === "none" ||
        !resourceList.style.display
      ) {
        resourceList.style.display = "block";
        button.querySelector(".plusminus").textContent = "-"; // Change to minus
      } else {
        resourceList.style.display = "none";
        button.querySelector(".plusminus").textContent = "+"; // Change to plus
      }
    });
  });
});

// IP disclaimer toggle
document.querySelectorAll(".ip-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const targetId = btn.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const sign = btn.querySelector(".plusminus");
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      sign.textContent = "-";
    } else {
      content.style.display = "none";
      sign.textContent = "+";
    }
  });
});
