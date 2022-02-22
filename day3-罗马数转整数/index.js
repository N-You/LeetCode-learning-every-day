/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let data = s.split('')
  let sum = 0
  for(let i=0;i<data.length;i++){
      switch(data[i]){
      case 'I':
      if(data[i+1] === 'V'){sum -= 1}
      else if(data[i+1] === 'X'){sum -= 1}
      else{sum += 1}
      break;
      case 'V':
      sum += 5;
      break;
      case 'X':
      if(data[i+1] === 'L'){sum -= 10}
      else if(data[i+1] === 'C'){sum -= 10}
      else{sum += 10}   
      break;
      case 'L':
      sum += 50;
      break;
      case 'C':
      if(data[i+1] === 'D'){sum -= 100}
      else if(data[i+1] === 'M'){sum -= 100}
      else{sum += 100}
      break;
      case 'D':
      sum += 500;
      break;
      case 'M':
      sum += 1000;
      break;
  }
  }
  return sum
  };