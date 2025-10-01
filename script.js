const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=> {
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=> {
    container.classList.add("toggle");
});
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggleLoginPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.setAttribute("name", "eye-off-outline"); 
  } else {
    password.type = "password";
    togglePassword.setAttribute("name", "eye-outline");
  }
});
toggleRegisterPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.setAttribute("name", "eye-off-outline"); 
  } else {
    password.type = "password";
    togglePassword.setAttribute("name", "eye-outline");
  }
});
setupPasswordToggle("loginPassword", "toggleLoginPassword");
setupPasswordToggle("registerPassword", "toggleRegisterPassword");

