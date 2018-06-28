function checkCashRegister(price, cash, cid) {
    var change = cash - price;
      console.log(change);
    
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
    console.log(unit);
    
    
    let newCidArray = (()=>{
        for(i in unit)
            if(change >= unit[i][1])
                return cidArray.splice(i);                
    })();
    let cidMap = new Map(newCidArray);

    let update = function(){
        //newCidArray[0][0] = newCidArray[0][0] - 
    }
    while(change!= 0.0){
        if(unitMap.get(newCidArray[0][0]) >= change)
            //do something
        
        

        break;
    }
    
  
    

    

    
    
    
    return change;
  }
