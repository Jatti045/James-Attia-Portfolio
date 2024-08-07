document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.querySelectorAll(".nav-links");
  const mainNavbar = document.getElementById("main-navbar");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("open");
    mainNavbar.classList.toggle("active");
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  });

  navLinks.forEach((navLink) =>
    navLink.addEventListener("click", function () {
      hamburgerMenu.classList.remove("open");
      mainNavbar.classList.remove("active");
      document.body.style.overflow = "auto";
    })
  );

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Form submission works! This message would be sent to your email on a live site."
      );

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
