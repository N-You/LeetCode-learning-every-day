/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let result = strs[0].split('')
  for(let i = 1;i<strs.length;i++){
  let j=0
    for(;j<result.length && j<strs[i].length;j++){
      if(result[j]!==strs[i].charAt(j)) break
    }
    result = result.slice(0,j)
  }
  return result.join('')
  };