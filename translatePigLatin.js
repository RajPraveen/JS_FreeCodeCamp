function translatePigLatin(str) {
  
let result = str.match(/([^aeiou]*)([aeiou]*[a-z]*)/)
return (() => result[2] === result[0] ? result[0].concat('way') : result[2].concat(result[1])   + 'ay')();

}

translatePigLatin("paragraphs");
