function convertHTML(str) {
  // &colon;&rpar;

let pair = {
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
  '"' : '&quot;',
  "'" : '&apos;'
};


let stringArray = str.split('');


let result = stringArray.map( value => {
  if(pair.hasOwnProperty(value))
    return pair[value];
   else 
    return value; 
}).join('');

  return result;
}

convertHTML("Dolce  Gabbana&");
