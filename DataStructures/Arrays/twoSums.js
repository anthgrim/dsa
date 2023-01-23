const nums = [2, 5, 5, 11]
const target = 10

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        const sum = nums[i] + nums[j]
        if (sum === target) {
          return [i, j]
        }
      }
    }
  }
}

console.log(twoSum(nums, target))
