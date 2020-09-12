// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
console.log("1:");
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// divBy3 takes in a number and returns one of two strings if the number is or isn't divisible by 3.
const divBy3 = (number) => (number % 3 === 0) ? `${number} is divisible by three` : `${number} is not divisible by three`;

console.log(divBy3(num1));
console.log(divBy3(num2));
console.log(divBy3(num3), "\n");


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.
console.log("2:");

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// allCaps takes an array and maps through every value in the function and changes it to uppercase.
const firstLetterCaps = (array) => {
    let capWords = []
    // map through word array and capitalize the first letter of string
    array.map(word => {
       capWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    })
    return capWords
}
console.log(firstLetterCaps(randomNouns), "\n");

// With a small function like this I figured returning the map outright was fine, but I recognize that it's good practice to assign the new array to a variable before returning.

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
console.log("3:");

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNumbersSort = (array) => {
    // filter out non-number types
    let filteredArray = array.filter(x => typeof x === "number");
    // sort new array of only numbers
    let sortedArray = filteredArray.sort((a, b) => a - b);
    return sortedArray
}

console.log(onlyNumbersSort(mixedDataArray), "\n");

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
console.log("4:");

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowelIndex = (string) => {
    let word = string.toLowerCase();
    let vowelArr = [];
    // deconstruct string into array of letters
    let  arrLetters = word.split("");
    // map through array checking for vowels, if found, push index to vowelArr
    arrLetters.map((letter, index) => {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
            vowelArr.push(index);
        }
    })
    // return first value in vowelIndex
    return vowelArr[0];
}

console.log(firstVowelIndex(vowelTester1));
console.log(firstVowelIndex(vowelTester2), "\n");


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
console.log("5:");

const calculator = (num1, operator, num2) => {
    // Type check for numbers
    if(typeof num1 === "number" && typeof num2 === "number"){
    // If else statements for each operator 
        if(operator === "+"){
            return num1 + num2;
        } else if(operator === "-"){
            return num1 - num2;
        } else if(operator === "*"){
            return num1 * num2;
        } else if(operator === "/"){
            // if statement accounting for 0's
            if(num2 === 0){
                return "Can't divide by 0!";
            } else {
                return num1 / num2;
            }
        } else {
            return "Please input two numbers and a mathematical operator"
        }
    } else {
        return "Please input two numbers and a mathematical operator"
    }
}

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0), "\n")
// Expected output: "Can't divide by 0!"

// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".
console.log("6:");

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"

const onlyDotIos = (array) => {
    // Filter array for only the strings with ".io"
    let filteredArray = array.filter(site => site.includes(".io") === true);
    return filteredArray;
}

console.log(onlyDotIos(websites), "\n");

// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.
console.log("6 Stretch:");

const countUp = (number) => {
    // Set anchor for the count and empty array to hold the increments
    let count = 0
    let countArr = []
    while(count <= number){
        countArr.push(count)
        count++
    }
    return countArr.join(" ")
}

console.log(countUp(5));