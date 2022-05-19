function Chislo(x) {
  while (x != 0) {
    console.log(x % 10);
    x = Math.floor(x / 10);
  }
}
Chislo(123);
