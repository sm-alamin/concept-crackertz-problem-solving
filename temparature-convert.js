//  Celsius to Fahrenheit
// function temperatureConverter(valNum) {
//     const convertIntoFahrenheit  = (valNum * 9/5) + 32 ;
//     return convertIntoFahrenheit;
// }
// const temperature = temperatureConverter(10);
// console.log(temperature);

// Fahrenheit to Celsius
function temperatureConverter(valNum) {;
    const convertIntoCelsius  = (valNum - 32) / 1.8;
    const showInTwoDecimal = convertIntoCelsius.toFixed(2);
    return Number(showInTwoDecimal);
}
const temperature = temperatureConverter(55);
console.log(temperature);