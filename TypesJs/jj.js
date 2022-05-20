const arr = [2, 100, 3, 7, 10, 7, 3]; //mimn
let max = arr.length;
arr.forEach((elem) => {
  if (elem > max) {
    max = elem;
  }
});
console.log(max);
