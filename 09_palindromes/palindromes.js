const palindromes = function (str) {
  let strLst = [];
  let final = [];
  strLst = str.split("");
  let index = 0;
  for (let i = 0; i < strLst.length; i++) {
    if (strLst[i].toLowerCase() != strLst[i].toUpperCase())
      final[index] = strLst[i].toLowerCase();
    index++;
  }
  if (final.join("") == final.reverse().join("") ) return true;
  return false;
};
palindromes('tacos') ;
// Do not edit below this line
module.exports = palindromes;
