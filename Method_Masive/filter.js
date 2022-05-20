// filter()-->parametri function megira ki yagonchi vazvrashat mekna "masivi asosira tagir namedihad"
const arr = [15, 16, 17, 18, 19, 20];
console.log(
  arr.filter(function (age) {
    if (age >= 18) {
      return age;
    }
  })
);
console.log(arr);
