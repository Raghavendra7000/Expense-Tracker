const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please enter your Email and Password.");
    return;
  }

  // Redirect to Dashboard
  window.location.href = "dash.html";
});
