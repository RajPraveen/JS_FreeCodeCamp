function dropElements(arr, func) {
    // Drop them elements.
    let result = [];

    for(let i = 0; i < arr.length;i++)
        if(func(arr[i])){
            return arr.splice(1);
            
        }
        else
        continue;
        
    return result;
    
  }
  
  let result = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
  console.log(result);
  
