function findGrade(marks){
    //write your code here
    //don't forget to write return
    let result1 ="A";
    let result2 ="B";
    let result3 ="C";
    let result4 ="D";
    let result5 ="F";
    if(marks >= 80){
        return result1;
    }else if(marks >= 60) {
        return result2;
    }else if(marks >= 50) {
        return result3;
    }else if(marks >= 40) {
        return result4;
    }else {
        return result5;
    }
}
const marks = findGrade(39);
console.log(marks);