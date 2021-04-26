function factorial(n) {
  let result = 1;
  let multiplier = 0;

  while (n >= 1) {
    n = n - 1;
    multiplier = multiplier + 1;
    result = result * multiplier;
  }
  return result;
}
