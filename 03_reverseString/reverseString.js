const reverseString = function(str) {
    strLst=str.split("");
    strLst=strLst.reverse();
    str=strLst.join("");
    return str;
};
console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
