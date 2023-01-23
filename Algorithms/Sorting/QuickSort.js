// Divide and conquer --> O(n log n)
// Pivoting technique
// We select a random pivot from the list
// We place all the numbers less than the pivot to the left
// and all the bigger numbers than pivot to the right

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

/**
 *
 * @param {Array} array
 * @param {number} left
 * @param {number} right
 */
function quickSort(array, left, right) {
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    //sort left and right
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
}

/**
 *
 * @param {Array} array
 * @param {number} pivot
 * @param {number} left
 * @param {number} right
 */
function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, right, partitionIndex)
  return partitionIndex
}

/**
 *
 * @param {Array} array
 * @param {number} firstIndex
 * @param {number} secondIndex
 */
function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

// Chooseing first and last index as second and third parameter
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)
