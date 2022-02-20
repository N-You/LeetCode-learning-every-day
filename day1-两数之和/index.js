/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//O(n^2)
 let twoSum = function(nums, target) {
  for(let i = 0;i<nums.length;i++){
    for(let j = i+1;j<nums.length;i++){
      if(target - nums[i] === nums[j]){
        return [i,j]
      }
    }
  }
  console.log(null);
 }

 let twoSum2 = function(nums,target){
  let map = new Map();
  for(let i = 0;i<nums.length;i++){
    map.set(nums[i],i)
  }
  for(let j = 0;j<nums.length;j++){
    let num = target - nums[j]
    if(map.has(num) && map.get(num) !== j){
      return [j,map.get(num)]
    }
  }
 }

 let twoSum3 = function(nums,target){
   let map = new Map()
   for(let i=0;i<nums.length;i++){
      let num = target - nums[i]
      if(map.has(num)){
        return [map.get(num),i]
      }
      map.set(nums[i],i)
   }
 }

 let arr = [1,2,3,7,8]
console.log(twoSum(arr,9));



