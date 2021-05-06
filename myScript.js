var mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", () => {
  let scrolls = window.scrollY;
  if (scrolls > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function show_certificate() {
  var cer = document.getElementById("button-certificate");
  var hist = document.getElementById("button-history");
  var about = document.getElementById("button-about");
  cer.style.display = "block";
  hist.style.display = "none";
  about.style.display = "none";
}

function show_history() {
  var cer = document.getElementById("button-certificate");
  var hist = document.getElementById("button-history");
  var about = document.getElementById("button-about");
  cer.style.display = "none";
  hist.style.display = "block";
  about.style.display = "none";
}

function show_about() {
  var cer = document.getElementById("button-certificate");
  var hist = document.getElementById("button-history");
  var about = document.getElementById("button-about");
  cer.style.display = "none";
  hist.style.display = "none";
  about.style.display = "block";
}
