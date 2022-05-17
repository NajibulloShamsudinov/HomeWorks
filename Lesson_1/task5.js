function Min(x, d) {
  var cnt = 0;
  while (d != 0) {
    if (x % 10 == d) {
      cnt++;
    }
    x = Math.floor(x / 10);
  }
  console.log(cnt);
}
Min(123313, 3);
