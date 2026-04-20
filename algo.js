// URL validator
function isValidURL(url) {
  try { new URL(url); return true; }
  catch { return false; }
}

// variation-1779486995219

