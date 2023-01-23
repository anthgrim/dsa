/**
 * @param {Array} arr
 */
const selectionSort = (arr) => {
  // Scan for the smallest
  // put the smallest to the first index
  // Keep for the next smallest

  const length = arr.length

  for (let i = 0; i < length; i++) {
    let min = i
    let temp = arr[i]
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    arr[i] = arr[min]
    arr[min] = temp
  }

  console.log(arr)
}

const sample2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
selectionSort(sample2)
