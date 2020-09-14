//............Question 1

describe("divBy3", () => {
    test("if number is divisible by 3, return 'number is divisible by three', else return 'number is divisible by three'", () => {
        expect(divBy3(15)).toEqual("15 is divisible by three")
        expect(divBy3(0)).toEqual("0 is divisible by three")
        expect(divBy3(-7)).toEqual("-7 is not divisible by three")
    })
})

const divBy3 = (number) => (number % 3 === 0) ? `${number} is divisible by three` : `${number} is not divisible by three`;

//............Question 2

describe("firstLetterCaps", () => {
    test("return array with all string values changes to Upper Case", () => {
        expect(firstLetterCaps(["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"])
    })
})

const firstLetterCaps = (array) => {
    let capWords = []
    array.map(word => {
       capWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    })
    return capWords
}

//............Question 3

describe("onlyNumbersSort", () => {
    test("takes an array and returns the array filtered for only numbers and sorted.", () => {
        expect(onlyNumbersSort([true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"])).toEqual([-8, 0, 8, 46, 59, 90, 107])
    })
})

const onlyNumbersSort = (array) => {
    // filter out non-number types
    let filteredArray = array.filter(x => typeof x === "number");
    // sort new array of only numbers
    let sortedArray = filteredArray.sort((a, b) => a - b);
    return sortedArray
}

//............Question 4

describe("firstVowelIndex", () => {
    test("takes a string and returns the index of the first vowel.", () => {
        expect(firstVowelIndex("learn")).toEqual(1)
        expect(firstVowelIndex("throw")).toEqual(3)
    })
})

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

//............Question 5

describe("calculator", () => {
    test("takes 3 arguments, 2 numbers and an operator, and returns the mathemathical expression's answer'", () => {
        expect(calculator(3, "*", 9)).toEqual(27)
        expect(calculator(16, "+", 3)).toEqual(19)
        expect(calculator(89, "/", 0)).toEqual("Can't divide by 0!")
        expect(calculator(89, "banana", 0)).toEqual("Please input two numbers and a mathematical operator")
        expect(calculator("banana", "/", 10)).toEqual("Please input two numbers and a mathematical operator")
    })
})

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
            if(num1 === 0 || num2 === 0){
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

//............Question 6

describe("onlyDotIos", () => {
    test("takes an array and finds the '.io's", () => {
        expect(onlyDotIos(["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
        )).toEqual(["codepen.io", "codepen.io"])
    })
})

const onlyDotIos = (array) => {
    // Filter array for only the strings with ".io"
    let filteredArray = array.filter(site => site.includes(".io") === true);
    return filteredArray;
}


//............Question 6 Stretch

describe("countUp", () => {
    test("takes an array and finds the '.io's", () => {
        expect(countUp(5)).toEqual("0 1 2 3 4 5")
    })
})

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


