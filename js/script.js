welcomeMessage();

/// Welcome Message
function welcomeMessage() {
    /// Prompt user for their name
    let username = prompt("Enter your name:");
    /// If a name is entered, display it in the header; otherwise, show a default message
    if (username) {

        /// Display the username in the header
        document.getElementById("username").innerHTML = username;
    } else {

        /// If no name is entered, show a default welcome message
        alert("Welcome to my portfolio!");
    }
}

/// Form Validation
function validateForm() {
    /// Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    /// Simple validation
    if (name === "" || email === "" || message === "") {
        /// If any field is empty, show an alert
        alert("Please fill in all fields.");
    } else {
        /// If all fields are filled, show a success message
        alert(Thanks, ${name}! Form submitted successfully!);
    }
}