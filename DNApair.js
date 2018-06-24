function pairElement(str) {
  return str.split('').map(value => {
    return value === 'G' ? new Array(value,'C') : value === 'A'? new Array(value,'T') : value === 'T' ? new Array(value, 'A') : new Array(value,'G');
  });
   
}

pairElement("GCTG");
