/* =====================================================
   contact.js  —  Page 6: Contact Form Live Validation
   Assignment 2 | Web Technologies
   Simple DOM Manipulation and Form Validation
   ===================================================== */

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. Get references to form and input elements
    const contactForm = document.getElementById("contactForm");
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const subjectSelect = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const successBox = document.getElementById("formSuccess");

    // Get references to error message spans
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // 2. Helper functions to display and clear errors
    function showError(inputElement, errorElement, message) {
        inputElement.classList.add("input-error");
        inputElement.classList.remove("input-valid");
        errorElement.textContent = message;
    }

    function clearError(inputElement, errorElement) {
        inputElement.classList.remove("input-error");
        inputElement.classList.add("input-valid");
        errorElement.textContent = "";
    }

    // 3. Validation Functions for each field

    // Validate Full Name
    function validateFullName() {
        const value = fullNameInput.value.trim();
        if (value === "") {
            showError(fullNameInput, nameError, "Full name is required.");
            return false;
        } else if (value.length < 3) {
            showError(fullNameInput, nameError, "Name must be at least 3 characters long.");
            return false;
        } else {
            clearError(fullNameInput, nameError);
            return true;
        }
    }

    // Validate Email Address using regular expression
    function validateEmail() {
        const value = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
            showError(emailInput, emailError, "Email address is required.");
            return false;
        } else if (!emailPattern.test(value)) {
            showError(emailInput, emailError, "Please enter a valid email address (e.g. user@example.com).");
            return false;
        } else {
            clearError(emailInput, emailError);
            return true;
        }
    }

    // Validate Subject selection
    function validateSubject() {
        const value = subjectSelect.value;
        if (value === "" || value === "default") {
            showError(subjectSelect, subjectError, "Please select an inquiry subject.");
            return false;
        } else {
            clearError(subjectSelect, subjectError);
            return true;
        }
    }

    // Validate Message (minimum 10 characters)
    function validateMessage() {
        const value = messageInput.value.trim();
        if (value === "") {
            showError(messageInput, messageError, "Message is required.");
            return false;
        } else if (value.length < 10) {
            showError(messageInput, messageError, "Message must be at least 10 characters long.");
            return false;
        } else {
            clearError(messageInput, messageError);
            return true;
        }
    }

    // 4. Live / Real-Time Validation on user input
    fullNameInput.addEventListener("input", validateFullName);
    emailInput.addEventListener("input", validateEmail);
    subjectSelect.addEventListener("change", validateSubject);
    messageInput.addEventListener("input", validateMessage);

    // 5. Form Submission Event Handler
    contactForm.addEventListener("submit", function (event) {
        // Prevent default browser form submission
        event.preventDefault();

        // Run all field validations
        const isNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        // Check if all fields passed validation
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Form is valid: display success message
            const customerName = fullNameInput.value.trim();
            successBox.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <strong>Thank you, ${customerName}!</strong>
                <p>Your message has been validated successfully. All fields meet the requirements.</p>
                <small style="color: #555;">(Note: Front-end demo only. No server backend is connected.)</small>
            `;
            successBox.style.display = "block";

            // Reset form fields
            contactForm.reset();

            // Clear green validation styles
            fullNameInput.classList.remove("input-valid");
            emailInput.classList.remove("input-valid");
            subjectSelect.classList.remove("input-valid");
            messageInput.classList.remove("input-valid");

            // Scroll success message smoothly into view
            successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            // Validation failed: hide success message
            successBox.style.display = "none";
        }
    });

});

