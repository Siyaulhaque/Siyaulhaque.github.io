document.addEventListener("DOMContentLoaded", function() {
    const dropdownPanel = document.getElementById("dropdownPanel");
    const navButtons = document.querySelectorAll(".nav-btn");
    const logoButton = document.getElementById("logoButton");
    const currentPage = window.location.pathname.split("/").pop().toLowerCase();

    // Highlight the active page button
    navButtons.forEach(button => {
        let buttonPage = button.getAttribute("data-page").toLowerCase();

        if (buttonPage === currentPage) {
            button.classList.add("active-nav");
        }

        // Ensure proper redirection without affecting dropdown
        button.addEventListener("click", function() {
            window.location.href = buttonPage;
        });
    });

    // Ensure logo button redirects to homepage
    logoButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
