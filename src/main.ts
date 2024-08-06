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
