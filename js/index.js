document
  .getElementById("newsletter-form")
  .addEventListener("submit", (event) => {
    const emailInput = document.getElementById("email-input");
    const emailError = document.getElementById("email-error");

    if (!isValidEmail(emailInput.value)) {
      event.preventDefault();
      emailError.classList.remove("hidden");
      emailInput.classList.add("border-red-400", "bg-red-100", "text-red-400");
      emailInput.classList.remove("border-gray");
    } else {
      emailError.classList.add("hidden");
      emailInput.classList.remove(
        "border-red-400",
        "bg-red-100",
        "text-red-400"
      );
      emailInput.classList.add("border-gray");
    }
  });

function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}
