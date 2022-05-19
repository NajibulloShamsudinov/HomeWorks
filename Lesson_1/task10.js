function Dlitel(n) {
  cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
Dlitel(64);
