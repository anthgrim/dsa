/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums
  }

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[j] !== 0) {
  //         nums[i] = nums[j]
  //         nums[j] = 0
  //         break
  //       }
  //     }
  //   }
  // }

  let current = 0
  let next = 1

  while (next < nums.length) {
    if (nums[current] === 0 && nums[next] !== 0) {
      nums[current] = nums[next]
      nums[next] = 0
      current++
    }
    if (nums[current] !== 0) {
      current++
    }

    next++
  }

  console.log(nums)
}

const sample = [0, 1, 0, 3, 12]

moveZeroes(sample)
