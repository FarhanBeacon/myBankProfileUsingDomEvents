document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;
  if (email === "fab@gmail.com" && password === "123") {
    window.location.href = 'profileStatus.html';
  } else {
    alert("Invalid User Info!!! Try Again");
  }
});
