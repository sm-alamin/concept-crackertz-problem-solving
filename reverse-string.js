const reverseMaker = (word)=> {
    //Write Your solution Here
    return word.split("").reverse().join("");
  };
const word = "Hello";
const reverseString = reverseMaker(word);
console.log(reverseString);