function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
    const sortedNumber = numbers.sort((a, b) => a - b);
    const findingSmallestNumber = sortedNumber[0]; 
    return findingSmallestNumber;
}
const numbers =[10,33,5,99,6];
const smallestNumber = findingSmallest(numbers);
console.log(smallestNumber);