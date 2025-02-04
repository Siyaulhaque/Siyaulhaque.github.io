document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");
    const dropdownPanel = document.querySelector(".dropdown-panel");
    let activeSection = null;

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            
            if (activeSection === targetSection) {
                dropdownPanel.classList.remove("active");
                activeSection.style.display = "none";
                activeSection = null;
            } else {
                if (activeSection) activeSection.style.display = "none";
                targetSection.style.display = "block";
                dropdownPanel.classList.add("active");
                activeSection = targetSection;
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".header") && !event.target.closest(".dropdown-panel")) {
            dropdownPanel.classList.remove("active");
            if (activeSection) activeSection.style.display = "none";
            activeSection = null;
        }
    });
});
