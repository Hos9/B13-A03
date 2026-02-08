/*function signature/sample */
function analyzeText(str) {
  if (typeof str !== "string" || str.length <= 0) {
    return "Invalid";
  }

  const trimmed = str.trim();

  let words = [];
  if (trimmed.length > 0) {
    words = trimmed.split(/\s+/);
    // words = trimmed.split(" ");
  }

  let longest = "";
  for (const w of words) {
    if (w.length > longest.length) {
      longest = w;
    }
  }

  const tokenCount = str.replace(/\s/g, "").length;

  return { longwords: longest, token: tokenCount };
}

console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText(""));
