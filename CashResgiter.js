function checkCashRegister(price, cash, cid) {
    var intChange = cash - price;

    //declaration of the return change
    let result = {
        status : "OPEN",
        change : []
    }
    // Here is your intChange, ma'am.
  
    let unit =[
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];
  
    //holding an array in the reverse format to feliciate splicing function which I love!!! :)    
    let cidArray = new Array(...cid.reverse());

    //converted the 2D array into a map function for easy retreival
    let cidMap = new Map(cidArray);
 
    /* Frogive me cause I caught jinxed up with the logic so the code might look bit shitty */
    
    /** the following  newCidArray returns a spliced array of the possible unit values 
     * less than the difference calculated only one time which also contains the per
     * unit value for each unit.. like  ["ONE HUNDRED", 2000 , 100], */
    let newCidArray = (()=>{
      let arr = new Array();
        for(i in unit)
            if(intChange >= unit[i][1])
                arr.push(new Array(...cidArray[i],unit[i][1]));  
      return arr;
    })();
   
 
    /**
     * The function update for every call updates the top of the newCidArray since the logic assumes at a given point the top most item is only valid.
     * the tofixed() is to restrict to two decimal point.
     */
    
    let update = function(){
       let newValue = newCidArray[0][1] - newCidArray[0][2];
       intChange = intChange - newCidArray[0][2];
       intChange = parseFloat(intChange).toFixed(2) * 1;
       newCidArray[0][1] = parseFloat(newValue).toFixed(2) * 1;
      // console.log(newCidArray[0][1]+"="+intChange);
    }
/**
 * resultAppend adds the valid unit to the result["change"] array.
 */
    let resultAppend = function(){
        let temp = newCidArray.shift().splice(0,2); 
            temp[1] = parseFloat(cidMap.get(temp[0]) - temp[1]).toFixed(2) * 1;
            
            result["change"].push(temp);
    }
    
    let flag = 0
   
    while(intChange > 0){
        //go until the change is 0
      if(intChange >= newCidArray[0][2] && newCidArray[0][1] != 0.0)
        {   /** enters this part of condtional loop when the change is bigger than each unit value and also the total unit 
            value > 0 
             */
            update();
            if(intChange === 0) //case where you change becomes empty before the top of unit value returns to 0
                resultAppend(); 
        }
        else{
  
          if(newCidArray.length > 1 )
            (newCidArray[0][1] !== 0.0) ? resultAppend() : intChange > 0 ? resultAppend() : newCidArray.shift();      // what happens when change is < unit value
          else{     
              //case of insufficient funds                                                                                                  // or total value becomes 0      
            let test = newCidArray.shift();
            result["status"] = "INSUFFICIENT_FUNDS";
            result["change"] = [];
            break;
  
          }
          
        }
  
    }
   
    /**
     * IIFE for deciding the closed out come also to remove preciding 0 incase if its being added to the result array.
     * 
     */ 
    (() => {

            let total = 0;

            cidArray.forEach(element => {
               total += element[1];
                
            });

            if( total === (cash - price))
            {
                result["status"] = "CLOSED";
                result["change"] = cid;
                return 0;
            }

            if(result["change"].length)
                result["change"] = result["change"].filter( value => value[1] != 0 ? value : null);

            
    })();
    
    return result;
    
  }
  
  //test cases
  
  /*checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
   ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])*/

  /*checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
   ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])*/

   /*checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
   ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])*/

   /*checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
    ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])*/

    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
