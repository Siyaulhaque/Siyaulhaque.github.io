// Load header dynamically and handle navigation
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            initializeNavigation(); // Call function to handle navigation after inserting header
        });
});

function initializeNavigation() {
    console.log("✅ Header loaded and navigation initialized!");

    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        const buttonPage = button.getAttribute("data-page");

        // Debugging: Log button clicks
        button.addEventListener("click", function () {
            console.log(`Navigating to: ${buttonPage}`);
            window.location.href = `/${buttonPage}`; // Ensure correct absolute path
        });
    });

    // Logo Button (Ensures homepage navigation)
    const logoButton = document.querySelector(".logo-btn");
    if (logoButton) {
        logoButton.addEventListener("click", function () {
            console.log("Navigating to Homepage");
            window.location.href = "/index.html";
        });
    }
}
