function checkYuGiOh(n) {
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
  console.log(modifiedArray);
  console.log(modifiedArray.length);
  return modifiedArray;
}

checkYuGiOh(100);
