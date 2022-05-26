/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
 */
function isMathc(left:string,right:string):boolean{
  if(left === '(' && right === ')')  return true
  if(left === '{' && right === '}')  return true
  if(left === '[' && right === ']')  return true
  return false
}

function matchBracket(str:string):boolean{
  const len = str.length
  if(len === 0) return true
  const stack:string[] = []

  const leftSymbol = '{[('
  const rightSymbol = '}])'
  for(let i = 0; i < len; i++){
    const char = str[i]
    if(leftSymbol.includes(char)){
      stack.push(char)
    }else if(rightSymbol.includes(char)){
      const top = stack[stack.length - 1]
      if(isMathc(top,char)){
        stack.pop()
      }else{
        return false
      }
    }
  }

  return stack.length === 0
}