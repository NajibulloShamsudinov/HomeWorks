const arr = [1, 2, 3, 4, 5];
//function SumChisel(n) {
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//    console.log(arr[i]);
// }
//}
//}
//SumChisel();

var arr1 = arr.filter(function (e) {
  if (e % 2 == 0) {
    console.log(e);
  }
});
