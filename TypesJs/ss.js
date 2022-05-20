const arr = [1, 1, 3, 7, 1, 7, 3];
var arr1 = [];
arr.sort();
arr.filter(function (elem, index) {
  if (arr[index] != arr[index + 1]) {
    arr1.push(arr[index]);
  }
});
console.log(arr1);
