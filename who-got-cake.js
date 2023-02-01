function JimOrDela (marksOfJim, marksOfDela , marksOfChinku) {
    //Write your code here
    //Must follow lowercase and uppercase
    //Don't forget to return
    if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku){
        return 'Jim';
    }else if(marksOfDela > marksOfJim && marksOfDela > marksOfChinku) {
        return 'Dela';
    }else{
        return 'Chinku';
    }
}
const marksOfJim = 84;
const marksOfDela = 99;
const marksOfChinku = 77;
const gotCake = JimOrDela(marksOfJim, marksOfDela, marksOfChinku);
console.log(gotCake);