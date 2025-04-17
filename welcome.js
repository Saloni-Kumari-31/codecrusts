// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userEmail").textContent = `Logged in as: ${user.email}`;
    } else {
        // Redirect to login page if not logged in
        window.location.href = "./login";
    }
});

// Logout function
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "./login"; // Redirect to login page after logout
    }).catch((error) => {
        console.error("Logout error:", error);
    });
});
