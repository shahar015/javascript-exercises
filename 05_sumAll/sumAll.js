const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0 || num1 !== parseInt(num1)|| num2 !== parseInt(num2)) {
    return "ERROR";
  }
  let sum = 0;
  for (let i = Math.min(num1, num2); i <= Math.max(num2, num1); i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
