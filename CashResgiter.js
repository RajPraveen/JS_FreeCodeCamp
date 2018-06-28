function checkCashRegister(price, cash, cid) {
  var change = cash - price;
    //console.log(typeof(change));
  
  let result = {
      status : "open",
      change : []
  }
  // Here is your change, ma'am.

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

  let cidArray = new Array(...cid.reverse());
  //console.log(newCid);
  
  let unitMap = new Map(unit);
  //console.log(unit);
  
  
  let newCidArray = (()=>{
    let arr = new Array();
      for(i in unit)
          if(change >= unit[i][1])
              arr.push(new Array(...unit[i],cidArray[i][1]));     
    return arr;
  })();

 // let cidMap = new Map(newCidArray);
//  / console.log(newCidArray);
  let update = function(){
     let newValue = newCidArray[0][2] - newCidArray[0][1];
     change = change - newCidArray[0][1];
     change = parseFloat(change).toFixed(2) * 1;
     newCidArray[0][2] = parseFloat(newValue).toFixed(2) * 1;
     console.log(newCidArray[0][2]+"="+change);
  }
  let flag = 0
 
  while(change > 0 && flag !== 1){
    if(change >= newCidArray[0][1] && newCidArray[0][2] != 0.0)
      {
          update();
          console.log(newCidArray);
      }
      else{

        if(newCidArray.length > 1){
          let test = newCidArray.shift();
          console.log(test); 
        }
        else{
          let test = newCidArray.shift();
          console.log(test); 
          break;

        }
        
      }

  }


  

  
  
}

// Example cash-in-drawer array,
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.0], ["NICKEL", 0], ["DIME", 0],
 ["QUARTER", 0], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
