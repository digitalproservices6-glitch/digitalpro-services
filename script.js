
const whatsappNumber = "03164355959";



document.getElementById("contactForm")
.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const text = `Hello DigitalPro Services!

Name: ${name}
Email: ${email}
Service: ${service}
Project: ${message}`;

  const url = "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
});
