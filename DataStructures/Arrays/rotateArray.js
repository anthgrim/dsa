/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === 1 || k === 0) {
    return
  }

  console.log(nums)
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i]
  }

  console.log(nums)

  for (let i = k - 1; i >= 0; i--) {
    nums[i] = nums.pop()
  }

  console.log(nums)
}

const sample = [1, 2, 3, 4, 5, 6, 7]

rotate(sample, 3)
