var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counterDisLike1 = 0;
var counterDisLike2 = 0;
var counterDisLike3 = 0;
var counterDisLike4 = 0;

function like1() {
  counter1 += 1;
  render1();
}

function like2() {
  counter2 += 1;
  render2();
}

function like3() {
  counter3 += 1;
  render3();
}

function like4() {
  counter4 += 1;
  render4();
}

function disLike1() {
  counterDisLike1 += 1;
  dislikeRender1();
}

function disLike2() {
  counterDisLike2 += 1;
  dislikeRender2();
}

function disLike3() {
  counterDisLike3 += 1;
  dislikeRender3();
}

function disLike4() {
  counterDisLike4 += 1;
  dislikeRender4();
}

function render1() {
  var disp1 = document.querySelector(".like-imag-1 > span");
  disp1.innerText = counter1;

  //   var disp2 = document.querySelector(".like-imag-2 > span");
  //   disp2.innerText = counter;

  //   var disp3 = document.querySelector(".like-imag-3 > span");
  //   disp3.innerText = counter;

  //   var disp4 = document.querySelector(".like-imag-4 > span");
  //   disp4.innerText = counter;
}

function render2() {
  var disp2 = document.querySelector(".like-imag-2 > span");
  disp2.innerText = counter2;
}

function render3() {
  var disp3 = document.querySelector(".like-imag-3 > span");
  disp3.innerText = counter3;
}

function render4() {
  var disp4 = document.querySelector(".like-imag-4 > span");
  disp4.innerText = counter4;
}

function dislikeRender1() {
  var dispDisLike1 = document.querySelector(".dislike-imag-1 > span");
  dispDisLike1.innerText = counterDisLike1;

  //   var dispDisLike2 = document.querySelector(".dislike-imag-2> span");
  //   dispDisLike2.innerText = counterDisLike;

  //   var dispDisLike3 = document.querySelector(".dislike-imag-3 > span");
  //   dispDisLike3.innerText = counterDisLike;

  //   var dispDisLike4 = document.querySelector(".dislike-imag-4 > span");
  //   dispDisLike4.innerText = counterDisLike;
}

function dislikeRender2() {
  var dispDisLike2 = document.querySelector(".dislike-imag-2> span");
  dispDisLike2.innerText = counterDisLike2;
}

function dislikeRender3() {
  var dispDisLike3 = document.querySelector(".dislike-imag-3 > span");
  dispDisLike3.innerText = counterDisLike3;
}

function dislikeRender4() {
  var dispDisLike4 = document.querySelector(".dislike-imag-4 > span");
  dispDisLike4.innerText = counterDisLike4;
}

function imageDblclick1() {
  counter1 += 1;
  render1();
}

function imageDblclick2() {
  counter2 += 1;
  render2();
}

function imageDblclick3() {
  counter3 += 1;
  render3();
}

function imageDblclick4() {
  counter4 += 1;
  render4();
}

const full_img_container = document.getElementById("fullImg_container");
const full_img = document.getElementById("fullImg");
function full_Img_size(pic) {
  full_img_container.style.display = "initial";
  full_img.src = pic;
}

function closeFullImg() {
  full_img_container.style.display = "none";
}
