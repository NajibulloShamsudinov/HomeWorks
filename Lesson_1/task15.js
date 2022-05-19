const arr = [1, 2, 3];
cnt = 0;
const arr1 = arr.filter(function (e, index) {
  if (arr[index + 1] > arr[index]) {
    cnt++;
  }
});
console.log(cnt);
