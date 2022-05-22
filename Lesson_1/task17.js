const arr = [1, -3, 4, -2, 1];
cnt = 0;
for (let i = 1; i <= arr.length - 1; i++) {
  if ((arr[i] > 0 && arr[i - 1] > 0) || (arr[i] < 0 && arr[i + 1] < 0)) {
    console.log("Yes");
    break;
  } else {
    cnt++;
  }
  if (cnt > 0) {
    console.log("No");
    break;
  }
}
