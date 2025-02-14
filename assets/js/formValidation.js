document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();  // Prevent default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!validateForm(name, email, message)) {
            alert("Please enter valid details.");
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            const result = await response.text(); // Change to text() to see raw response
            console.log("Raw Response:", result);

            const jsonResponse = JSON.parse(result);
            if (jsonResponse.success) {
                alert("Thank you! We will contact you soon.");
                form.reset();
            } else {
                alert("Sorry, an unexpected error occurred. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Sorry, an unexpected error occurred. Please try again later.");
        }
    });
});

function validateForm(name, email, message) {
    const namePattern = /^[A-Za-zñÑ\s]+$/;
    const emailPattern = /^[a-zA-Z0-9ñÑ._%+-]+@[a-zA-Z0-9ñÑ.-]+\.[a-zA-Z]{2,}$/;

    return namePattern.test(name) && emailPattern.test(email) && message.length <= 1000;
}
