function sortNumber(numbers){
    const sortNumbers = numbers.sort((a,b) => a-b);
    return sortNumbers;
}
const numbers = [5, 9, 8, 1, 3, 10, 7, 6, 4, 2];
const sortedNumber = sortNumber(numbers);
console.log(sortedNumber);