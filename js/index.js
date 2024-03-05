// Get DOM elements
const signUpSection = document.getElementById("sign-up-form");
const successMessage = document.getElementById("success-message");
const dismiss = document.getElementById("dismiss");
const userEmail = document.getElementById("user-email");
const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

// Function to check if email is valid
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    // Show error message
    emailError.classList.remove("hidden");
    emailInput.classList.add("error");
    emailInput.classList.remove("border-grayCustom");
  } else {
    // Hide error message, show success message
    emailError.classList.add("hidden");
    emailInput.classList.remove("error");
    emailInput.classList.add("border-grayCustom");
    signUpSection.classList.add("hidden");
    signUpSection.classList.remove("flex");
    successMessage.classList.add("flex");
    successMessage.classList.remove("hidden");
    userEmail.textContent = emailInput.value;
  }
}

// Function to dismiss success message
function dismissSuccessMessage() {
  successMessage.classList.remove("flex");
  successMessage.classList.add("hidden");
  signUpSection.classList.remove("hidden");
  signUpSection.classList.add("flex");
}
// Function to handle changes in email input
function handleEmailInputChange() {
  emailInput.classList.remove("error");
  emailError.classList.add("hidden");
}

// Add event listeners
newsletterForm.addEventListener("submit", handleFormSubmission);
dismiss.addEventListener("click", dismissSuccessMessage);
emailInput.addEventListener("input", handleEmailInputChange);
