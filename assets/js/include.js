document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error("Error loading component:", error));
    }

    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");
});
