/*function signature/sample */
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  const isLengthOk = otp.length === 8;
  const hasPrefix = otp.startsWith("ph-");

  return isLengthOk && hasPrefix;
}

console.log(validOtp("ph-10985"));
// console.log(validOtp("ab-10985"));
console.log(validOtp("ph-1234"));
console.log(validOtp("abc-12345"));
console.log(validOtp(["ph-10985"]));
console.log(validOtp(12345678));
// console.log(validOtp("ph-10985"));
// console.log(validOtp("ph-10985"));
