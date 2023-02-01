function JimOrDela (marksOfJim, marksOfDela) {
    //Write your code here
    //Must follow lowercase and uppercase
    //Don't forget to return
    if(marksOfJim > marksOfDela){
        return 'Jim';
    }else{
        return 'Dela';
    }
}
const marksOfJim = 84;
const marksOfDela = 74;
const gotCake = JimOrDela(marksOfJim, marksOfDela);
console.log(gotCake);