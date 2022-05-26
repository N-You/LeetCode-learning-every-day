/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
 */

class MyQuery{
  private stack1:number[] = []
  private stack2:number[] = []
  add(n:number){
    this.stack1.push(n)
  }
  delete():number|null{
    let res

    const stack1 = this.stack1
    const stack2 = this.stack2

    while(stack1.length){
      let n = stack1.pop()
      if(n != null)stack2.push()
    }

    res = stack2.pop()

    while(stack2.length){
      let n = stack2.pop()
      if(n != null)stack1.push()
    }

    return res || null
  }
  get length():number{
    return this.stack1.length
  }
}