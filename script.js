document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.querySelectorAll(".nav-links");
  const mainNavbar = document.getElementById("main-navbar");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("open");
    mainNavbar.classList.toggle("active");
  });

  navLinks.forEach((navLink) =>
    navLink.addEventListener("click", function () {
      hamburgerMenu.classList.remove("open");
      mainNavbar.classList.remove("active");
    })
  );

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.text();
        })
        .then((data) => {
          alert(data);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert(
            "There was an error sending your message. Please try again later."
          );
        });
    });
});
