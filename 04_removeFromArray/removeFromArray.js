const removeFromArray = function() {
    let arg=Array.from(arguments);
    console.log(arg.join(","));
    let arr=arg.shift();
    console.log(arg.join(","));
    let index;
    for (let i=0; i<arg.length ; i++)
    {
    index=-1;
    for (let a=0; a<arr.length; a++)
    {
        if(arr[a]===arg[i])
        index=a;
    }
    if (index!=-1)
    arr.splice(index,1);
}
    return arr;
}
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
