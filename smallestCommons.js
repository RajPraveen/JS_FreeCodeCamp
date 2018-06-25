function smallestCommons(arr) {
    let sValue = 0;
    let eValue = 0;

    arr[0] < arr[1]? (sValue = arr[0], eValue = arr[1]) : (sValue = arr[1], eValue = arr[0]); 

    for(let i = 1;;i++){
       let result = ((num,sVal,eVal) => {
           for(let i = sVal; i <= eVal;i++)
                if(num%i !== 0)
                    return false;
            return true;    
       })(i*arr[1],sValue,eValue);

       if(result)
          return i*arr[1];
        else
          continue;      
    }

    return null;
  }
  
  
 smallestCommons([1,13]);

  //console.log(result);
  
