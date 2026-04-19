document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.getElementById("send-btn");
    const status = document.getElementById("form-status");

    btn.disabled = true;
    btn.textContent = "Sending...";

    const templateParams = {
        from_name: this.name.value,
        from_email: this.email.value,
        message: this.message.value,
    };

    emailjs.send("service_vz1ilrc", "template_7ri71ws", templateParams)
        .then(() => {
            status.style.color = "#00ff88";
            status.textContent = "✅ Message sent successfully!";
            this.reset();
        })
        .catch((error) => {
            status.style.color = "#ff4444";
            status.textContent = "❌ Failed to send. Please try again.";
            console.error(error);
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = "Send Message";
        });
});