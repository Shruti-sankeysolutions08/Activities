
const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");


form.addEventListener("submit", function(event) {
  event.preventDefault();  
  
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Clear previous error message
  errorMessage.textContent = "";

  if (email === "sankey901@solutions.com" && password === "mindset")
     {
    window.location.href = "welcome.html"; 
  } 
  else if (email !== "sankey901@solutions.com") {
    
    errorMessage.textContent = "Invalid username/email";
  } 
  else if (password !== "mindset") {

    errorMessage.textContent = "Invalid password";
  }

  email.value = "";
  password.value = "";
});
