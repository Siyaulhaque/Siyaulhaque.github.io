document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const logoButton = document.querySelector(".logo-btn"); // Ensure correct selection
    const currentPage = window.location.pathname.split("/").pop(); // Get current file name

    navButtons.forEach(button => {
        const buttonPage = button.getAttribute("data-page");

        // Apply active class if the current page matches the button's data-page
        if (currentPage === buttonPage) {
            button.classList.add("active-nav");
        }

        // Redirect on click
        button.addEventListener("click", function() {
            window.location.href = buttonPage;
        });
    });

    // Ensure logo button redirects to homepage
    if (logoButton) {
        logoButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
