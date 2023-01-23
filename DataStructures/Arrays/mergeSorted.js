const arr1 = [0, 3, 4, 31]
const arr2 = [4, 6, 30]

const mergeSortedArrays = (arrA, arrB) => {
  if (!arrA || !arrB) {
    return 'Invalid'
  }

  if (arrA.length === 0) {
    return arrB
  } else if (arrB.length === 0) {
    return arrA
  }

  const merged = [...arrA, ...arrB]
  merged.sort((a, b) => a - b)
  return merged
}

console.log(mergeSortedArrays(arr1, arr2))
