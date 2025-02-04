document.addEventListener("DOMContentLoaded", function() {
    const dropdownPanel = document.getElementById("dropdownPanel");
    const navButtons = document.querySelectorAll(".nav-btn");
    const logoButton = document.getElementById("logoButton");
    const currentPage = window.location.href;

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            dropdownPanel.classList.toggle("active");
        });

        // Check if the current page URL includes the data-page value
        if (currentPage.includes(button.getAttribute("data-page"))) {
            button.classList.add("active-nav");
        }
    });

    // Navigation redirection using dataset attributes
    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = button.getAttribute("data-page");
        });
    });

    // Ensure logo button redirects to homepage
    logoButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
