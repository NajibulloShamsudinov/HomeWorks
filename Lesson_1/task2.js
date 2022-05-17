function Remainder(a, b, c, d) {
  for (let i = a; i <= b; i++) {
    if (i % d == c) {
      console.log(i);
    }
  }
}
console.log(Remainder(2, 5, 0, 2));
