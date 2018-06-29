function convertToRoman(num) {
  let test =  num.toString();
  let romanArray = [];

  let result = test.split('').reverse();

  for( let index in result){
      result[index] = Number(result[index]) * Math.pow(10,index);
  }
  console.log(result);

  let romanTable = [
    [1,"I"],
    [5,"V"],
    [10,"X"],
    [50,"L"],
    [100,"C"],
    [500,"D"],
    [1000,"M"]
  ];

  let romanMap = new Map(romanTable);
  //console.log(romanMap);
  

  let newRomanTable = romanTable.reverse();
  //console.log(newRomanTable);
  
  let myNum = 4;
  let regex = /^[5]/g;

  let starter = (searchValue) => {
   for(let index in newRomanTable)
      if(searchValue >= newRomanTable[index][0])
          return [newRomanTable[index],newRomanTable[index -1]];
  }; 

  let closest = (val, start, end) =>{
    console.log(val,start,end);
    
    return val - start <=2 ? start : end;
  };

  let range = starter(myNum);
  console.log(range);
  
  let romanConverter = (myNum,start) => {
    let tempRoma = [];
    while(myNum > 0){
    myNum = Math.abs(myNum - start);
    tempRoma.push(romanMap.get(start));  
    }

    return tempRoma.join('');
    
  }
  //console.log(closest(myNum,1,5));
  
  let startPoint = 0;

      
      if(regex.test(range[0][0]))
      {

      }
      else{
        startPoint = closest(myNum, range[0][0],range[1][0]);
         console.log(startPoint);

        if(myNum - range[0][0] > 2){
          //do something
          console.log("greater than 3");
          let tempArray = 0;
          tempArray = romanConverter(myNum,range[1][0]);
          romanArray.push(tempArray);
          
          
        }
        else{
          let tempArray = 0;
          tempArray = romanConverter(myNum,range[0][0]);
          romanArray.push(tempArray);
          
        }
        

      }
    
  
  
  console.log(romanArray);
  


  /**
   * 
   * Case I 
   */
}
 
 convertToRoman(422);
