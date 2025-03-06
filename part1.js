/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
}

function reverseString2(str) {
    return str.split("").reverse().join("");
}

function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"))
console.log(reverseString2("!dlroW olleH"))
console.log(reverseString3("!dlroW olleH"))
console.log(reverseString4("!dlroW olleH"))
console.log(reverseString5("!dlroW olleH"))



//part 1
//Take an array of numbers and return the sum.
numArray = [1, 1, 1, 1, 1, 1]
let sumOfNums = 0;

function sumArray(numArray) {
    let sumOfNums = 0;
    
    for (let i = 0; i < numArray.length; i++) {
        sumOfNums += numArray[i];
    }
    console.log(sumOfNums)
    return sumOfNums;
}
sumArray(numArray);

//Take an array of numbers and return the average.

function avgArray(numArray) {
    const avgOfSum = sumArray(numArray)

    return avgOfSum / numArray.length;
    console.log(avgOfSum / numArray.length)
}
avgArray(numArray);

// Take an array of strings and return the longest string.
stringArray = [`aaaa`, `aa`, `aaa`]

function findLongestString(stringArray) {
    let longestString = "";
    
    for (let i = 0; i < stringArray.length; i++) {
        let currentString = stringArray[i]
        
        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }
    console.log(longestString);
    return longestString;
}
findLongestString(stringArray);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

let stringsLongerArray = ['say', 'hello', 'in', 'the', 'morning']
let stringTestNum = 3;

function stringsLongerThan(stringArray, testLength) {
    let result = [];
    
    for (let i = 0; i < stringArray.length; i++) {
        let currentString = stringArray[i];
        
        if (currentString.length > testLength) {
            result.push(currentString)
        }
    }
    console.log(result)
    
    return result
}
stringsLongerThan(stringsLongerArray,stringTestNum);
let counterNum = 1

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function counter(number) {
    
    if (counterNum > number) {
        return;
    }
    
   
    console.log(counterNum)
    counterNum++
    return counter(number);
}


let n = 10;

counter(n);