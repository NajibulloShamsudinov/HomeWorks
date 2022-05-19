function Task8(a) {
  for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
      console.log(i);
      break;
    }
  }
}
Task8(9);
