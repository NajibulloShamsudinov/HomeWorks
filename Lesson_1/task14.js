const arr = [1, 2, 3, -1, -2, 4];

//function Mm() {
//cnt = 0;
//for (let i = 0; i <= arr.length; i++) {
// if (arr[i] > 0) {
//  cnt++;
//}
//}
//console.log(cnt);
//}
//Mm();
cnt = 0;
const arr1 = arr.filter(function (e) {
  if (e > 0) {
    cnt++;
  }
});
console.log(cnt);
