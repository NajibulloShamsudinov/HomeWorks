const arr = [1, 2, 3, 4, 5, 3];
cnt = 0;
for (let i = 1; i <= arr.length - 1; i++) {
  if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
    cnt++;
  }
}
console.log(cnt);
