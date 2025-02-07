document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            loadMenuScript(); // Ensure menu.js is loaded after header
        });
});

function loadMenuScript() {
    const script = document.createElement("script");
    script.src = "menu.js";
    script.defer = true;
    document.body.appendChild(script);
}
