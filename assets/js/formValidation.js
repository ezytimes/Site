
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if name contains only alphabets and spaces
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

    // Basic email validation pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Ensure message is not too long
    if (message.length > 1000) {
        alert("Your message is too long! Please shorten it.");
        return false;
    }


    return true;
}

function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // Basic example, replaces < and > with nothing
}
