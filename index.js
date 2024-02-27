var exp = document.getElementById("explr");

var prog = "Explore Latest From Blog";
var a = 1;

setInterval(function () {
  exp.innerHTML = prog.slice(0, a);
  a++;

  if (a > prog.length) {
    a = 0;
  }
}, 200);


// counter javascripts 


var valueDisplays = document.querySelectorAll("#h11");
var interval = 5000;

valueDisplays.forEach((valueDisplays) => {
  var startvalue = 0;
  var endvalue = parseInt(valueDisplays.getAttribute("data-val"));;
  var duration = Math.floor(interval / endvalue);
  var counter = setInterval(function () {
    startvalue += 1;
    valueDisplays.textContent = startvalue;
    if (startvalue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});



