export function routate1(arr:Array<number>,k:number):Array<number>{
let len:number = arr.length
if(!k || len === 0) return arr
let step = Math.abs(k % len)

for (let  i =0;i<step;i++){
  let n = arr.pop()
  if(n != null){
    arr.unshift(n)
  }
}
return arr
}

export function routate2(arr:Array<number>,k:number):Array<number>{
let len:number = arr.length
if(!k || len === 0) return arr
let step = Math.abs(k % len)
let temp = arr.slice(-step)
let temp2 = arr.slice(0,len-step)
return temp.concat(temp2)
}