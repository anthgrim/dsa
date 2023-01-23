/**
 * @description Bubble Sort Algorithm
 * @param {Array} arr
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const num1 = arr[i]
      const num2 = arr[j]
      if (num1 > num2) {
        arr[j] = num1
        arr[i] = num2
      }
    }
  }
  console.log(arr)
}

/**
 *
 * @param {Array} arr
 */
const bubbleSolution = (arr) => {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  console.log(arr)
}

const sample = [6, 5, 3, 1, 8, 7, 2, 4]
const sample2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
bubbleSort(sample2)
bubbleSolution(sample2)
