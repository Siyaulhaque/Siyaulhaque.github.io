document.addEventListener("DOMContentLoaded", function() {
    const dropdownPanel = document.getElementById("dropdownPanel");
    const navButtons = document.querySelectorAll(".nav-btn");
    const logoButton = document.getElementById("logoButton");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            dropdownPanel.classList.toggle("active");
        });
    });

    // Ensure navigation buttons redirect correctly
    document.getElementById("aboutBtn").addEventListener("click", function() {
        window.location.href = "aboutme.html";
    });
    
    document.getElementById("blogBtn").addEventListener("click", function() {
        window.location.href = "blog.html";
    });
    
    document.getElementById("contactBtn").addEventListener("click", function() {
        window.location.href = "contact.html";
    });

    // Ensure logo button redirects to homepage
    logoButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
