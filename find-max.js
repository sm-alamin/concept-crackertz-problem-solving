function findMax(max) {
    const number1 = max[0];
    const number2 = max[1];
    const number3 = max[2];
    if (number1 >= number2 && number1 >= number3) {
        return number1;
    } else if (number2 >= number1 && number2 >= number3) {
        return number2;
    } else {
        return number3;
    }
}
const max = [55,10,95];
const findMaxNumber = findMax(max);
console.log(findMaxNumber);
