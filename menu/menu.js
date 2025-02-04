document.addEventListener("DOMContentLoaded", function() {
    const dropdownPanel = document.getElementById("dropdownPanel");
    const navButtons = document.querySelectorAll(".nav-btn");
    const logoButton = document.getElementById("logoButton");
    let currentPage = window.location.pathname.split("/").pop().toLowerCase(); // Normalize case

    console.log("Current Page:", currentPage); // Debugging log

    navButtons.forEach(button => {
        let buttonPage = button.getAttribute("data-page").toLowerCase(); // Normalize case

        if (buttonPage === currentPage) {
            console.log("Active Button Found:", buttonPage); // Debugging log
            button.classList.add("active-nav");
        }

        button.addEventListener("click", function() {
            dropdownPanel.classList.toggle("active");
        });
    });

    // Navigation button redirects
    document.getElementById("aboutBtn").addEventListener("click", function() {
        window.location.href = "aboutme.html";
    });
    
    document.getElementById("blogBtn").addEventListener("click", function() {
        window.location.href = "blog.html";
    });
    
    document.getElementById("contactBtn").addEventListener("click", function() {
        window.location.href = "contact.html";
    });

    // Logo redirects to homepage
    logoButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
