/*function signature/sample */
function validOtp(otp) {
  // console.log(typeof otp);
  //   console.log(otp.length);

  if (typeof otp !== "string" && !otp.startsWith("ph-")) {
    return "Invalid";
  } else if (otp.length !== 8) {
    return false;
  } else {
    return true;
  }
}

console.log(validOtp("ph-10985"));
console.log(validOtp("ab-10985"));
console.log(validOtp("ph-1234"));
console.log(validOtp("abc-12345"));
console.log(validOtp(["ph-10985"]));
console.log(validOtp(12345678));
// console.log(validOtp("ph-10985"));
// console.log(validOtp("ph-10985"));
