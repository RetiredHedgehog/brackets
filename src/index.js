module.exports = function check(str, bracketsConfig) {
  console.log(str, bracketsConfig);
  
  if ( str.length % 2 !== 0 ) return false;

  bracketsConfig = bracketsConfig.map(elem => (elem + '').replace(/,/g, ''));
  
  let oldLength;
  let newLength;

  do {
    oldLength = str.length;
    
    bracketsConfig.forEach(elem => {
      if ( str.indexOf(elem) > -1 ) {
        str = str.slice(0, str.indexOf(elem)) + str.slice(str.indexOf(elem) + 2);
      }
    });
    
    newLength = str.length;
  } while(newLength !== oldLength);

  if ( str.length === 0 ) return true;
  return false;
}
