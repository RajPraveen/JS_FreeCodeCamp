function convertToRoman(num) {
    let test =  num.toString();
    let romanArray = [];
    let testNum = 0;
    let result = test.split('').reverse();
    let flag = 0;       

    for( let index in result){
        result[index] = Number(result[index]) * Math.pow(10,index);
    }
    console.log(result);
  
    let romanTable = [
      [1000,"M"],
      [500,"D"],
      [100,"C"],
      [50,"L"],
      [10,"X"],
      [5,"V"],
      [1,"I"]
    ];
  
        let romanMap = new Map(romanTable);
          /* function to determine the range*/

          let rangeDetermine = function(value){
                for(let i in romanTable)
                    if(value >= romanTable[i][0])
                        return [romanTable[i-1][0],romanTable[i][0]];
          }

          let startDetermine = function(value,startRange,endRange){
              let regex = /^[1]/g;
              return (value - startRange) < (endRange - value) ? startRange : regex.test(endRange - value) ? endRange : startRange;
          }

          let romanUpdate = function(tempNum,negator){
         
              if((tempNum - negator) >= 0)
              { 
                 tempNum = tempNum - negator;
              }
               else{
               // console.log("Negative");
                 tempNum = Math.abs(tempNum - negator);
                 flag = 1;
               }
                 //console.log(tempNum);
                 
                return [tempNum , romanMap.get(negator)];

        }

for(let i in result){

        testNum = result[i];
        //console.log(testNum);
        let tempRomanArray = [];
        while(testNum > 0){

            if(testNum >= 1000){

                testNum = testNum - 1000;
                tempRomanArray.push(romanMap.get(1000));
            }
            else{
                let arr = rangeDetermine(testNum);
            //console.log(arr);
            
            let tempNegator = startDetermine(testNum, arr[1] , arr[0]);
  
            //console.log(tempNegator);
            
            let tempResult = romanUpdate(testNum,tempNegator);
            testNum = tempResult[0];
            tempRomanArray.push(tempResult[1]);
            }
   
            
            
            
          }
        
        if(flag === 1){
            romanArray.push(tempRomanArray.reverse().join(""));
            flag = 0;
        }
        else
            romanArray.push(tempRomanArray.join(""));
        }

    return romanArray.reverse().join("").toUpperCase();
    
  
}
      
    

   convertToRoman(1500);
