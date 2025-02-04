document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ menu.js is loaded!");

    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        const buttonPage = button.getAttribute("data-page");

        // Debugging: Log button clicks
        button.addEventListener("click", function() {
            console.log(`Navigating to: ${buttonPage}`);
            window.location.href = `/${buttonPage}`; // Ensure correct absolute path
        });
    });

    // Logo Button (Ensures homepage navigation)
    const logoButton = document.querySelector(".logo-btn");
    if (logoButton) {
        logoButton.addEventListener("click", function() {
            console.log("Navigating to Homepage");
            window.location.href = "/index.html";
        });
    }
});
