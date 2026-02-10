exports.fibonacci = (n) => {
  if (n <= 0) return [];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.slice(0, n);
};
exports.primes = (nums) =>
  nums.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
exports.hcf = (nums) =>
  nums.reduce((a, b) => gcd(a, b));
exports.lcm = (nums) =>
  nums.reduce((a, b) => (a * b) / gcd(a, b));
