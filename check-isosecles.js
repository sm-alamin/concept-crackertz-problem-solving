function checkTriangle(side1, side2,side3){
    //write your code here
    //don't forget to write return
    let message1 = "Yes";
    let message2 = "No";
    if( (side1 !== side2 && side2 !== side3) && (side1 === side2 || side2 === side3 || side1 === side3) ){
        return message1;
    }else{
        return message2;
    }
}

const sides = checkTriangle(9, 8, 9);
console.log(sides);