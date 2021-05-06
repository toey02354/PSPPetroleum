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
  cer.style.display = "noen";
  hist.style.display = "none";
  about.style.display = "block";
}
