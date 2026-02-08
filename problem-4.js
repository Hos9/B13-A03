/*function signature/sample */
function gonoVote(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Invalid";
  }

  let ha = 0;
  let na = 0;

  for (const vote of array) {
    if (typeof vote !== "string") {
      return "Invalid";
    } else {
      vote.trim().toLowerCase();
    }

    if (vote === "ha") {
      return ha++;
    } else if (vote === "na") {
      return na++;
    } else return "Invalid";
  }

  if (ha > na) {
    return true;
  } else if ((ha = na)) {
    return "equal";
  } else return false;
}

console.log(gonoVote(["ha", "na", "ha", "na"]));
