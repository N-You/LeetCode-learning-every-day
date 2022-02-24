/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length % 2 !== 0) return false
  let items = []
  for(let i = 0;i<s.length;i++){
      let b = s[i]
      if(b === '(' || b === '[' || b === "{"){
          items.push(b)
      }else{
          let t = items[items.length-1]
          if( t === '('&&(b === ')' ) ||
           ( t === '{'&& b === '}') ||
            ( t === '['&& b === ']')){
                items.pop()
            }else{
                return false
            }
      }
  }
  return items.length === 0
  };