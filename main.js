let hamBar = document.querySelector(".hambar");
let menuBar = document.querySelector(".menu");
hamBar.addEventListener("click", () => {
  hamBar.classList.toggle("active");
  menuBar.classList.toggle("active");
});

/* sticky */
let header = document.querySelector("nav");
window.addEventListener("scroll", stickyFunction);
function stickyFunction() {
  header.classList.toggle("sticky", window.scrollY > 50);
}
