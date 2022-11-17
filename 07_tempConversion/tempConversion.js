const ftoc = function(temp) {
  let num=(temp-32)*(5/9);
  return Number(num.toFixed(1));
};
ftoc(100);
const ctof = function(temp) {
  let num=(temp*(9/5))+32;
return Number(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
