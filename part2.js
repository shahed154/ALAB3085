arrayTest = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// part 1 Sort the array by age.

// had to spend 20 mins figuring out why the age comparison wasnt working and its because IT WAS A STRING?????? ATUFG DHJBKLNO: PA"Fghvjkl;
// idk what i was doing  it worked without changing to an Int BUT then it didnt . was very confusing. just gonna leave it how it is sicne this works
// YALL ARE EVIL  :(  
function sortByAge(arrayToTest) {

    arrayToTest.sort(function (a, b) {
        return parseInt(a.age - b.age)

    });

    return (arrayTest)
}
// part 2  Filter the array to remove entries with an age greater than 50. 
//console.log(sortByAge(arrayTest))

let comparisonAge = 50;
function removeAgeTest(arrayToTest, numberToTest) {

    const result = arrayToTest.filter((person) => parseInt(person.age) < numberToTest);
    return result;
}
//console.log(removeAgeTest(arrayTest,comparisonAge))

// p3 Map the array to change the “occupation” key to “job” and increment every age by 1.


const adjustedArray = arrayTest.map(changeOccupationAndAge)

function changeOccupationAndAge(arrayToChange) {
    const newArray = [arrayToChange]
    newArray.job = arrayToChange.occupation
    delete arrayToChange.occupation

    arrayToChange.age++;
    return newArray;
}
console.log(adjustedArray)


// p4 Use the reduce method to calculate the sum of the ages. Then use the result to calculate the average age.

const agesArray = arrayTest.map(item => (item.age)) // => parseInt(item.age));

const total = agesArray.reduce(sum);

console.log(total)

console.log(total/arrayTest.length)

function sum(a,b)
{
    return a+b;
}
