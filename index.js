var Inputt = document.querySelector(".input");
var Solve = document.querySelector(".solve");
var Answer = document.querySelector(".answer");

function convertFahrToCelsius(fahrenheit) {
  var fahrenheit = Inputt.value;
  var fTemp = fahrenheit;

  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + "\xB0F is " + fToCel.toFixed(4) + "\xB0C.";

  Answer.innerHTML = fToCel.toFixed(4) + "\xB0C.";

  console.log(message);
}

Solve.addEventListener("click", () => {
  convertFahrToCelsius();
});
