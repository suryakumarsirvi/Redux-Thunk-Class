// URL validator
function isValidURL(url) {
  try { new URL(url); return true; }
  catch { return false; }
}

// variation-1779486995219

// Check prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// variation-1779487144700

