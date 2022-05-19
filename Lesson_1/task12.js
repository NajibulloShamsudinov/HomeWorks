const arr = [4, 5, 3, 4, 2, 3];
function SumChisel(n) {
  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
SumChisel();
