// Deep clone
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// variation-1779486999689

// Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// variation-1779487149235

