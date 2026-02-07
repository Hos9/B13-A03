/*function signature/sample */
function finalScore(omr) {
  if (
    typeof omr !== "object" ||
    omr === null ||
    !("right" in omr) ||
    !("wrong" in omr) ||
    !("skip" in omr)
  ) {
    return "Invalid";
  }

  const { right, wrong, skip } = omr;

  const isNumberValid = (x) =>
    Number.isFinite(x) && x > 0 && Number.isInteger(x);

  if (![right, wrong, skip].every(isNumberValid)) {
    return "Invalid";
  }

  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  const score = right * 1 + wrong * -0.5 + skip * 0;
  return Math.round(score);
}

console.log(finalScore({ right: 50, wrong: 25, skip: 25 }));
console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore("!@#"));
console.log(finalScore(["Raj"]));
