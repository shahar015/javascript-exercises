const caesar = function(str, num) {
    strLst=str.split("");
    for(let i=0; i<str.length; i++)
    {
        strLst[i]=encode(strLst[i],num);
    }
    return strLst.join("");
};
function encode(char,num){
    let uni=Number(char.charCodeAt(0));
    let newUni;
        if(uni>=65&& uni<=90)
        {
            if(uni+num>90)
            {
                newUni=uni+num-(Math.ceil(num/26)*26)
            }
            else if(uni+num<65)
            {
                if(Math.floor(-num/26)!=0)
                newUni=uni+num+(Math.floor(-num/26)*26)
                else
                newUni=uni+num+26;
            }
            else
            {
                newUni=uni+num;
            }
        }
        
        else if(uni>=97&& uni<=122)
        {
            if(uni+num>122)
            {
                newUni=uni+num-(Math.ceil(num/26)*26)
            }
            else if(uni+num<97)
            {
                if(Math.floor(-num/26)!=0)
                newUni=uni+num+(Math.floor(-num/26)*26)
                else
                newUni=uni+num+26;
            }
            else
            {
                newUni=uni+num;
            }
        }
        else
        {
            newUni=uni;
        }
        return String.fromCharCode(newUni);

}
console.log(caesar('a',-1));

// Do not edit below this line
module.exports = caesar;
