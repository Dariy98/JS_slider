// example https://getbootstrap.com/docs/4.5/components/carousel/

console.log("Hello!");

let activeClass = 0;
const images = document.querySelectorAll(".carousel-item");
const sliderForward = () => {
  images[activeClass].classList.remove("active");
  if (activeClass + 1 === images.length) {
    activeClass = 0;
  } else {
    activeClass++;
  }
  images[activeClass].classList.add("active");
};
const sliderBack = () => {
  images[activeClass].classList.remove("active");
  if (activeClass - 1 < 0) {
    activeClass = images.length - 1;
  } else {
    activeClass--;
  }
  images[activeClass].classList.add("active");
};
let activeClassOfLi = 0;
const li = document.querySelectorAll("li");
const liForward = () => {
  li[activeClassOfLi].classList.remove("active");
  if (activeClassOfLi + 1 === li.length) {
    activeClassOfLi = 0;
  } else {
    activeClassOfLi++;
  }
  li[activeClassOfLi].classList.add("active");
};
const liBack = () => {
  li[activeClassOfLi].classList.remove("active");
  if (activeClassOfLi - 1 < 0) {
    activeClassOfLi = images.length - 1;
  } else {
    activeClassOfLi--;
  }
  li[activeClassOfLi].classList.add("active");
};
document.querySelector("body").addEventListener("click", event => {
  const classList = event.target.classList;
  if (classList.contains("carousel-control-next-icon")) {
    sliderForward();
    liForward();
  }
  if (classList.contains("carousel-control-prev-icon")) {
    sliderBack();
    liBack();
  }
  if (event.target.dataset.slideTo) {
    let slide = JSON.parse(event.target.dataset.slideTo);
    images.forEach(img => {
      if (img.classList.contains("active")) {
        img.classList.remove("active");
      }
    });
    li.forEach(item => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    images[slide].classList.add("active");
    li[slide].classList.add("active");
  }
});
