var menu = document.querySelector(".navbar-collapse");
var close = document.querySelector(".menu-close");
var open = document.querySelector(".menu-open");
var btn = document.querySelector(".navbar-toggler");

btn.addEventListener("click", () => {
    if (btn.classList.contains("collapsed")) {
        open.style = "display:block";
        close.style = "display:none";
    } else {
        open.style = "display:none";
        close.style = "display:block";
    }
})