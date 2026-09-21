export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function toMultilineHtml(value) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

export function isEmailValid(email) {
  if (!email || email.length > 254) return false;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailPattern.test(email) && !email.includes("..");
}