function average (arrOfMarks){
    //write your code here
     let sum = 0;
     for(let i = 0; i < arrOfMarks.length; i++){
        const index = i;
        const element = arrOfMarks[index];
        sum += element;
     }
     let calculateAverage = sum / arrOfMarks.length;
     const showAverageInTwoDecimal = Number(calculateAverage.toFixed(2));
     return showAverageInTwoDecimal;
    
   }
   const arrOfMarks = [75.25, 65, 80, 35.45, 99.50];
   const averageMarks = average(arrOfMarks);
   console.log(averageMarks);