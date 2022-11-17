const findTheOldest = function(people) {
    let max=-1;
    let person;
    let age;
    for (let i=0; i<people.length; i++){
        if(people[i].yearOfDeath!=undefined)
        age=people[i].yearOfDeath-people[i].yearOfBirth;
        else
        age=2022-people[i].yearOfBirth;
        max= Math.max(max,age);
        if(max==age) person= people[i];
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
