const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for(const element of toggle) {
    element.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}