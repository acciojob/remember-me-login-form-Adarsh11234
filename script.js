// Check for existing user details in local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  const existingBtn = document.getElementById("existing");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
    existingBtn.addEventListener("click", () => {
      alert(`Logged in as ${savedUsername}.`);
    });
  }
});

// Handle form submission
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}.`);

  // Show the "Login as existing user" button if "remember me" was checked
  const existingBtn = document.getElementById("existing");
  if (rememberMe) {
    existingBtn.style.display = "block";
  }
});

