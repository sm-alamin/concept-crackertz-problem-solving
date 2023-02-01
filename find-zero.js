function countZeros ( binary_num ) {
     var findZero = 0;
        for(var i = 0; i < binary_num.length; i++){
            if(binary_num[i] === "0"){
                var totalZero = 0;
                findZero++;
                totalZero += findZero;
            }
        }return totalZero;
    }
    var totalZero = countZeros('10101');
    console.log(totalZero);
