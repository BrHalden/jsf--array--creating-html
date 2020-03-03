
/************
 * EXAMPLE - Convert this for loop to use array.map()
 ************/

let exampleArray = [2,5,6,12,19];

// using for loop
let doubledArray = [];
for(let i = 0; i < exampleArray.length; i++) {
    const number = exampleArray[i];
    // map each item from from (number) to (number * 2)
    const newNumber = number * 2;
    // add the item to the array
    doubledArray.push(newNumber);
}

console.log("Multiplied by 2 (for loop): ", doubledArray);

// ** ANSWER using map **
// call array.map and store the result
let doubledArrayMap = exampleArray.map(function(number) {
    // return the mapped item
    return number * 2;
});

console.log("Multiplied by 2 (map): ", doubledArrayMap);


/************
 * Convert this for loop to use array.map()
 ************/

let letters = ["a", "b", "c", "d"];

// using for loop
let tripleLetters = [];
for(let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    // map each item
    const newItem = letter + letter + letter;
    // add the item to the array
    tripleLetters.push(newItem);
}

console.log("Triple letters (for loop): ", tripleLetters);



// call array.map and store the result
let tripleLettersMap = letters.map(function(letter) {
    // return the mapped item
    return letter + letter + letter; /*** ANSWER BY UPDATING THIS LINE ***/
});

console.log("Triple letters (map): ", tripleLettersMap);




/************
 * Convert this for loop to use array.map()
 ************/

let numbers = [2,3,5,7,9];

// using for loop
let squared = [];
for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // map each item
    const newItem = number * number;
    // add the item to the array
    squared.push(newItem);
}

console.log("Raised to power of 2 (for loop): ", squared);

let raised = numbers.map(function(number){
    return number * number;
});
console.log(`raised by the power of two(map): ${raised}`);
// call array.map and store the result
let squaredMap = numbers.map(function(number){
    return number * number;
}); /*** ANSWER BY CALLING MAP ON numbers (similar to the other questions) ***/

console.log("Raised to power of 2 (map): ", squaredMap);


