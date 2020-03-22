//Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//Slice to remove items from the array.

let modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//Function #2: Array Splice
//Using Splice to add items into foods Array.

let Food = foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

//fiter function will return the only matched item from the array.

let EvenNumbers = numberArray.filter(function isEven(num) {
    return (num % 2 == 0);
});

//Console the Even Number
console.log(EvenNumbers);

//Function #3.1: Prime Number

let PrimeNumbers = numberArray.filter(function isPrime(num) {
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
        return true;
    }
});

console.log(PrimeNumbers);

//Function #4: Reject
// reversing the logic of the Prime Number 
let NonPrimeNumbers = numberArray.filter(function nonPrime(num) {
    for (i = 0; i < Math.sqrt(num); i++) {
        if (num % i === 0);
    }
    return true;
});

//console the Non Prime Number

console.log(NonPrimeNumbers);

//Function #5: Lambda 

console.log(numberArray.filter(Even = (num) => { return num % 2 === 0; }
));

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];

//findSquareOfNumbers() to find square of each elemnt of array.
console.log(myArray.map(findSquareOfNumbers = (num) => { return num * num }));

//Function #7: Reduce

const MyArray = [2, 3, 5, 10, 7];

//reduce function to multiply each item of array
//initial value = 1 ; so that it could not affect the whole value.
console.log("Multiply:" + MyArray.reduce(multiply = (initial, item) => { return initial * item }, 1));

//produce square of the each item using the Reduce function

const Arrays = [11, 34, 20, 5, 53, 16];

//printing array of the square of each item in the given array

