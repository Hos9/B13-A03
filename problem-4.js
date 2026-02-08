/*function signature/sample */
function gonoVote(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Invalid";
  }

  let ha = 0;
  let na = 0;

  for (let vote of array) {
    if (typeof vote !== "string") {
      return "Invalid";
    }

    vote = vote.trim().toLowerCase();

    if (vote === "ha") {
      ha++;
    } else if (vote === "na") {
      na++;
    } else {
      return "Invalid";
    }
  }

  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}

console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["Ma", "na", "ha", "na"]));
console.log(gonoVote(["Ha", "Na", " ha ", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));
