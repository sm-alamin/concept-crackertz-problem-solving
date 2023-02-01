function secondLargest ( numbers ) {
    //Write your code here
    //Don't forget to return
    const sortedNumber = numbers.sort((a, b) => b - a);
    const findSecondLargest = sortedNumber[1]; 
    return findSecondLargest;
    
}
const numbers = [10,33,5,99,6];
const secondLargestNumber =secondLargest(numbers);
console.log(secondLargestNumber);
