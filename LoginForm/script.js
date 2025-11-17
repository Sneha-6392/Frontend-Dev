const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const title = document.getElementById("title");

document.getElementById("signupLink").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    title.innerText = "Signup";
});

document.getElementById("loginLink").addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    title.innerText = "Login";
});

// LOGIN
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
});

// SIGNUP
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup successful!");
});
