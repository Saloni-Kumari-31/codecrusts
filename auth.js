// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXsGf1js6GUEZBWI5_FCeZ4pIIqafrBJU",
    authDomain: "fir-76325.firebaseapp.com",
    projectId: "fir-76325",
    storageBucket: "fir-76325.firebasestorage.app",
    messagingSenderId: "1082729740137",
    appId: "1:1082729740137:web:75bc7db7b50f4db1002ff8",
    measurementId: "G-XE10HVPHQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form Submission Event Listener
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});

// Login function
// Login function

// Login function
function login() {
    const email = document.getElementById("em1").value;
    const password = document.getElementById("pass1").value;
    const messageBox = document.getElementById("message");
    const loginButton = document.getElementById("loginBtn");

    // Disable button and change text
    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "welcome.html"; // Redirect on success
        })
        .catch((error) => {
            messageBox.textContent = "Error: User does not exist or incorrect password!";
            messageBox.style.color = "red";
            messageBox.style.fontWeight = "bold";

            // Re-enable button and reset text
            loginButton.disabled = false;
            loginButton.textContent = "Login";
        });
}

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "welcome.html"; // Redirect if user is already logged in
    }
});
