/**
* Function Declaration
* @param {number} a - It will have a number
* @param {number} b - It will have a number
* @return {number} - It return the subtract of a and b
*/

console.log(subtract(4, 3));
function subtract(a, b) {
    return a - b;
}

/** 
* Function Declaration
* @param {string} fname - It will have a string value
* @return {string} - It will returns the string value pass in the fname parameter
*/

function myName(fname){
    return fname;
}
console.log(myName("sneha"));

/** 
* Function Expression
* @param {number} a - It will have a number
* @param {number} b - It will have a number
* @return {number} - It return the multiplication of a and b
*/

let multiply = function (a, b) {
    return a * b;
}
console.log(multiply(4, 6));

/**
 * @param {number} a - It will have a number value 
 * @param {number} b - It will have a number value 
 * @returns {number} - It will return the sum of a and b 
 */

let add = (a, b) => a + b;
console.log(add(3, 4));

/** 
* Arrow function
* @param {number} x - It will have a number value 
* @console.log {number} - It will print the square of the given value
* When we have a single parameter we don't require parenthesis in arrow function
*/

let square = x => x * x;
console.log(square(5));

/** 
 * Multiline statement arrow function
 * Define an arrow function named addAndSquare that takes two parameters, a and b
 * Add the two numbers and store the result in the variable sum
 * Square the result and store it in the variable square
 *  Return the final squared result
 * Call the addAndSquare function with arguments 2 and 3, and log the result
*/

const addAndSquare = (a, b) => {
    // Add the two numbers
    let sum = a + b;

    // Square the result
    let square = sum * sum;

    // Return the final result
    return square;
};

console.log(addAndSquare(2, 3));

/**
* default parameter example
* Function: greet  
* Generates a greeting message with an optional 'name' parameter.
* Defaults to 'Guest' if 'name' is not provided. Uses template literals.  
*Example output:
   - greet() returns 'Hello, Guest'.
   - greet('Sneha') returns 'Hello, sneha'.
*/

function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet('sneha'));

/** 
 * Default multiple parameter
 * Define a function named personal that takes two parameters, name and age, with default values 'sneha' and '20' respectively
 * Return a string that includes the name and age
 * Call the personal function without any arguments, which will use the default values 'sneha' and '20', and log the result
 * Call the personal function with the argument 'Sarita' and the default value for age, and log the result
 */
function personal(name = 'sneha', age = '20') {
    return `hii, ${name} 
    
    
    your age, ${age}!`;
}
console.log(personal());
console.log(personal('Sarita'));

/**
 * Destructuring Parameters
 * @param {string} firstName - It will take string value
 * @param {string} lastName -  It will take string value
 * @returns - It returns the firstName and lastName with a space between extract from the object called by the function personalInfo
 */

function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

let user = {
    firstName: 'sneha',
    lastName: 'sharma',
    age: 20
};

console.log(getFullName(user));    

/**
 * 
 * @param {string} separator - It will have only one string value 
 * @param  {...any} strings - It will accept indefinite number of values
 * @returns - First it will place hyphen(-) between 3 strings and store the string in result after that result the modifiedResult 
 will place hyphen(-) between each strings  
 */
function concatenateStrings(separator, ...strings) {
    let result = "";
    let modifiedResult = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += separator;
        }
    }

    for (let j = 0; j < result.length; j++) {
        modifiedResult += result[j];
        if (j < result.length - 1) {
            modifiedResult += separator;
        }
    }
    return modifiedResult;
}
console.log(concatenateStrings("-", "Hello", "World", "JavaScript"));

//Error Handling //










