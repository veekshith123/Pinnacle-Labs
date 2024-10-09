
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    document.getElementById("confirmation-message").textContent = `Reservation confirmed for ${guests} guests on ${date} at ${time}.`;
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}. Your message has been sent!`);
});