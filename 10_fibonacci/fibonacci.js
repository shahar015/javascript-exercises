const fibonacci = function (num) {
  let sum;
  let lastNum =0;
  let curNum=1;
  if (Number(num) > 0) {
    if(Number(num) == 1) return 1;
    for (let i = 1; i < Number(num); i++) {
        sum = lastNum + curNum;
        lastNum = curNum;
        curNum = sum;
    }
    return sum;
  }
  return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
