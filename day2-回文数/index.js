/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
  let str = x.toString().split('')
  let middleIndex = Math.floor(str.length/2)
  if(str.length % 2 === 0 && JSON.stringify(str.slice(0,middleIndex)) === JSON.stringify(str.slice(middleIndex,str.length).reverse()) ){
      return true
  }else if(str.length % 2 !== 0 && JSON.stringify(str.slice(0,middleIndex)) === JSON.stringify(str.slice(middleIndex+1,str.length).reverse())){
      return true
  }
  return false
  };



  /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString()
  for(let i=0,j=str.length-1;i<j;i++,j--){
  if(str[i] !== str[j]) return false
  }
  return true
  };
  

  /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x.toString() === x.toString().split('').reverse().join('')
  };