// slider function
let currentIndex = 0;
let sliders = document.querySelectorAll(".slide");
let bullets = document.querySelectorAll(".circle");
bullets[0].classList.add("active");
sliders[0].classList.add("active");
let prev = document.querySelector(
  ".fifth-middle-wrapper .fifth-container .left-content i:nth-child(1)"
);
let next = document.querySelector(
  ".fifth-middle-wrapper .fifth-container .left-content i:nth-child(2)"
);
// remove class function
let removeactive = () => {
  sliders.forEach((el) => {
    el.classList.remove("active");
  });
  bullets.forEach((el) => {
    el.classList.remove("active");
  });
};
// add class function
let addactive = () => {
  removeactive();
  sliders[currentIndex].classList.add("active");
  bullets[currentIndex].classList.add("active");
};
addactive();

// add previous function
prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2;
  }
  addactive();
  clearInterval(clear);
});

// add next function
next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= 3) {
    currentIndex = 0;
  }
  addactive();
  clearInterval(clear);
});

// click bullets
let bulletsClick = () => {
  bullets.forEach((item) => {
    item.addEventListener("click", () => {
      currentIndex = parseInt(item.dataset.text);
      addactive();
      clearInterval(clear);
    });
  });
};
bulletsClick();

let newCurrentIndex = 0;

// auto slider function

let autoslid = () => {
  sliders.forEach((foto) => {
    foto.classList.remove("active");
  });
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  newCurrentIndex++;
  if (newCurrentIndex > sliders.length - 1) {
    newCurrentIndex = 0;
  }

  sliders[newCurrentIndex].classList.add("active");
  bullets[newCurrentIndex].classList.add("active");
};

let clear = setInterval(autoslid, 4000);

// reveal function
window.addEventListener("scroll", revealFunction);
function revealFunction() {
  let divs = document.querySelectorAll(".reveal");

  divs.forEach((reveal, index) => {
    console.log(reveal);
    let windowHeight = window.innerHeight;
    let revealReactop = reveal.getBoundingClientRect().top;
    console.log(reveal, windowHeight, revealReactop);

    let revealPoint = 150;
    if (revealReactop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } /* else {
      reveal.classList.remove("active");
    } */
  });
}
