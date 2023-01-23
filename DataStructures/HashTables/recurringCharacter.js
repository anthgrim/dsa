// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

//  array2 = [2,1,1,2,3,5,1,2,4]
// Should return 1

// array3 = [2,3,4,5]
// It should return undefined

const sample1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]
const sample2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]
const sample3 = [2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstRecurring = (nums) => {
  if (nums.length <= 1) {
    return undefined
  }

  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) return nums[i]
    obj[nums[i]] = i
  }

  return undefined
}

console.log(firstRecurring(sample1))
console.log(firstRecurring(sample2))
console.log(firstRecurring(sample3))
