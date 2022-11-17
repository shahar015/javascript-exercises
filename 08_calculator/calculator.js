const add = function (num1, num2) {
  if (parseInt(num1) === num1 && parseInt(num2) === num2) {
    return num1 + num2;
  }
  return "ERROR";
};

const subtract = function (num1, num2) {
  if (parseInt(num1) === num1 && parseInt(num2) === num2) {
    return num1 - num2;
  }
  return "ERROR";
};

const sum = function (nums) {
  let sum = 0;
  let error = 0;
  if (nums.length == 0) return sum;
  for (let i = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) === nums[i]) sum += nums[i];
    else error++;
  }
  if (error!=0) return "ERROR";
  return sum;

};

const multiply = function (nums) {
  let sum = 1;
  let error = 0;
  if (nums.length == 0) return sum;
  for (let i = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) === nums[i]) sum *= nums[i];
    else error++;
  }
  if (error!=0) return "ERROR";
  return sum;
};

const power = function (num1, num2) {
  if (parseInt(num1) === num1 && parseInt(num2) === num2) {
    return num1 ** num2;
  }
  return "ERROR";
};

const factorial = function (num) {
  let sum = 1;
  if (parseInt(num) === num) {
    for (let i = 1; i <= num; i++) {
      sum *= i;;
    }
    return sum;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
