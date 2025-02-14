
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // name contains only alphabets and spaces including ñÑ
    const namePattern = /^[A-Za-zñÑ\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

    // email validation
    const emailPattern = /^[a-zA-Z0-9ñÑ._%+-]+@[a-zA-Z0-9ñÑ.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    if (message.length > 1000) {
        alert("Your message is too long! Please shorten it.");
        return false;
    }

    return true;
}

function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');
}
