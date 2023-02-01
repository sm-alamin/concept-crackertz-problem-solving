function findOddSum(odd){
    let sumOdd = 0;
    for(let i = 0; i < odd.length; i++){
        const index = i;
        const element = odd[index];
        
        if(element % 2 === 1){
            sumOdd += element;
        }
    }
    return sumOdd;
}
const odd = [5, 7, 8, 10, 45, 30];
const sumOdd = findOddSum(odd);
console.log(sumOdd);