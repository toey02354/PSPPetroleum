let video = document.querySelector(".column1");
let fadeDivider = 900;
let piceo = document.querySelector(".picture1");
let fadeDivider2 = 1200;
window.addEventListener("scroll", () => {
  let scrollvalue = window.scrollY;
  opacityValue1 = 1 - scrollvalue / fadeDivider;
  opacityValue2 = scrollvalue / fadeDivider2;
  if (scrollvalue >= 100) {
    video.style.opacity = opacityValue1;
  }
  if (scrollvalue >= 900) {
    piceo.style.opacity = opacityValue2;
  }
  if (scrollvalue < 50) {
    video.style.opacity = 1;
    piceo.style.opacity = 1;
  }
});
var vid1 = document.getElementById("myVideo1");
var vid2 = document.getElementById("myVideo2");

function playVid1() {
  vid1.play();
}
function pauseVid1() {
  vid1.pause();
}
function playVid2() {
  vid2.play();
}
function pauseVid2() {
  vid2.pause();
}
