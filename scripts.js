// verify natural image width and height

window.onload = function () {
  var img = document.getElementById("about-img");
  console.log("Natural Width: ", img.naturalWidth);
  console.log("Natural Height: ", img.naturalHeight);
};

// Form Validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

// Toggle Mobile Navigation Menu

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("#menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  menuToggle.addEventListener("change", function () {
    if (this.checked) {
      mobileNav.style.display = "block";
    } else {
      mobileNav.style.display = "none";
    }
  });
});
