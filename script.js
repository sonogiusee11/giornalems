document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Grazie ${name}! Ti contatteremo a breve all'indirizzo email: ${email}`);
});
