document.addEventListener("DOMContentLoaded", function() {
    const dropdownPanel = document.getElementById("dropdownPanel");
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            dropdownPanel.classList.toggle("active");
        });
    });
});
