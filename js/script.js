// localstorage

var z = +window.localStorage.getItem("alocal") + 1;
window.localStorage.setItem("alocal", z);
document.getElementById("local").innerHTML = z;

// start clock
setInterval(function () {
  var button = document.getElementById("button");
  var tte = new Date();
  var hours = tte.getHours();
  var minuets = tte.getMinutes();
  var secands = tte.getSeconds();
  button.textContent = `${hours} : ${minuets} : ${secands}`;
}, 500);

//end clock

// start anima
function anima(id) {
  var ele = document.getElementById(id),
    textNodi = ele.childNodes[0],
    text = textNodi.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNodi.data = text;
  }, 200);
}
document.getElementById("none").onclick = function () {
  this.style.outline = "none";
};

// scroll
document.getElementById("i").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
