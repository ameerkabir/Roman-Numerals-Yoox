const converToRoman = num => {
  // console.log("is being called");
  // console.log({ num });
  let romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = "";
  for (let key in romans) {
    if (num >= romans[key]) {
      result += key.repeat(Math.trunc(num / romans[key]));
      console.log(result);
      num -= romans[key] * Math.trunc(num / romans[key]);
    }
    // console.log(romans[key])
  }
  console.log({ result });
  return result;
};

//@ Conver roman to number
const converToInteger = roman => {
  var result = 0;
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanValues = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  for (var i = 0; i <= decimal.length; i++) {
    while (roman.indexOf(romanValues[i]) === 0) {
      //checking for the first characters in the string
      result += decimal[i];
      //adding the decimal value to our result counter
      roman = roman.replace(romanValues[i], "");
      //remove the matched Roman letter from the beginning
    }
  } 
  console.log(result);
  return result;
};

const isRoman = roman => {
  let intialValue = 0;
  const romanValues = ["D", "I", "V", "X", "L", "C", "M"];
  roman.split("").map(str => {
    if (romanValues.indexOf(str) > -1) {
      intialValue += 1;
    }
  });
  return (
    typeof roman === "string" &&
    roman.split("").length === intialValue &&
    roman.length > 0
  );
};

module.exports = {converToRoman, isRoman, converToInteger};