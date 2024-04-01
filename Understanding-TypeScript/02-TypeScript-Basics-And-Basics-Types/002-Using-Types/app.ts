function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(30, 26, "as-number")); // 56

console.log(combine("30", "26", "as-number")); //3026

console.log(combine("Hoang", "Cao", "as-text")); // HoangCao
