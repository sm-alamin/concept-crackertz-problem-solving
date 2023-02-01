const deleteProperty =(arr)=>{
    // Write your code here.
      if(arr[0].hasOwnProperty(arr[1])){
           delete arr[1];
            return "YES";
        }else{
            return "NO";
        }
    }
    const arr = [
        {
         fname:'John',
        },'fname'
    
      ]
      const result = deleteProperty(arr);
      console.log(result);