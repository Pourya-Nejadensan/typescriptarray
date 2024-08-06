// Task 1: Create an array of numbers and use the .map function to double all the numbers in the array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log('Array: ' ,numbers);

function doubleMapFunc (numbers: number[]): number[] {
    return numbers.map(x => x *= 2);
}
console.log('doubleMapFunc: ',doubleMapFunc(numbers));

// Task 2: Create an array of words and use the .filter function to select only the words that are longer than 5 letters
let words: string[] = ["aa", "b", "ccc", "ddddd", "eeeeee", "f", "gggggggg"];

const filterFunc = words.filter(word => word.length > 5);

console.log('Word length bigger than 5: ',filterFunc);

// Task 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
let numbers2: number[] = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumAllNumbers = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log('Sum all numbers: ', sumAllNumbers);

// Task 4: Create an array of numbers and use the .some function to check if at least one number is greater than 10
let numbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const hasNumberGreaterThanTen  = numbers3.some((element) => element > 10)

console.log('Has array the number greater than ten: ', hasNumberGreaterThanTen);
