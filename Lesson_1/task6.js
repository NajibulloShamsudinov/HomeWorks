function Numbers(a) {
  cnt = 0;
  while (a != 0) {
    cnt = cnt + (a % 10);
    a = Math.floor(a / 10);
  }
  console.log(cnt);
}
Numbers(123);
