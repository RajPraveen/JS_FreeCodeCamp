function addTogether(A) {


  //console.log();
  
  return arguments.length === 2 && (Number.isInteger(arguments[1]) && Number.isInteger(arguments[0]))? arguments[0] + arguments[1] : (arguments.length === 1 && Number.isInteger(arguments[0]))? (B) => Number.isInteger(B)? A + B: undefined: undefined ;
  
};

//addTogether(2)(3);


let result = addTogether('http://bit.ly/IqT6zt');


console.log(result);
