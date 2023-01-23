const sample1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const sample2 = [1]
const sample3 = [5, 4, -1, 7, 8] // 23 - 28 = 5
const sample4 = [-2, 2, 5, -11, 6]

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSum = nums[0]

  // // If array is length 1
  if (nums.length === 1) {
    return maxSum
  }

  let currentSum = maxSum

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i])
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
}

console.log(maxSubArray(sample1))
console.log(maxSubArray(sample2))
console.log(maxSubArray(sample3))
console.log(maxSubArray(sample4))
