var Arrai = document.querySelector(".array");
var Create = document.querySelector(".create");
var Input = document.querySelector(".input2");

function checkYuGiOh(n) {
  var n = Input.value;
  if (typeof n !== "number") {
    console.log(`invalid parameter: ${n}`);
  }
  const modifiedArray = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      modifiedArray.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      modifiedArray.push("yu-gi");
    } else if (i % 3 === 0 && i % 5 === 0) {
      modifiedArray.push("gi-oh");
    } else if (i % 2 === 0 && i % 5 === 0) {
      modifiedArray.push("yu-oh");
    } else if (i % 2 === 0) {
      modifiedArray.push("yu");
    } else if (i % 3 === 0) {
      modifiedArray.push("gi");
    } else if (i % 5 === 0) {
      modifiedArray.push("oh");
    } else {
      modifiedArray.push(i);
    }
  }
  Arrai.innerHTML = modifiedArray;
  console.log(modifiedArray);
  console.log(modifiedArray.length);
  return modifiedArray;
}
Create.addEventListener("click", () => {
  checkYuGiOh();
});
