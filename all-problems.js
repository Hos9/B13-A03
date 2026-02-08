//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    const discountAmount = (currentPrice * discount) / 100;
    const afterDiscount = currentPrice - discountAmount;
    return afterDiscount.toFixed(3);
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  const isLengthOk = otp.length === 8;
  const hasPrefix = otp.startsWith("ph-");

  return isLengthOk && hasPrefix;
}

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  if (typeof str !== "string" || str.length <= 0) {
    return "Invalid";
  }

  const trimmed = str.trim();

  let words = [];
  if (trimmed.length > 0) {
    words = trimmed.split(/\s+/);
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