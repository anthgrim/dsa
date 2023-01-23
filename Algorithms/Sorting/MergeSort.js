// Divide and Conquer
// O(n log n) (Bad but not as bad as O(n^2))
// One of the most efficient ways you can sort a list of things
// It's stable
// Find the middle

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

/**
 * @param {Array} array
 */
const mergeSort = (array) => {
  if (array.length === 1) {
    return array
  }

  // Split array into right and left
  const length = array.length

  // Find the middle
  const middle = Math.floor(length / 2)

  // Get left and right
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers)
console.log(answer)
