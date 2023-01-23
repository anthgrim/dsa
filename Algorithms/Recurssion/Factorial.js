// Write two functions that finds the factorial of a any number.
// One function should use recursive, the other should just use a for loop

const findFactorialRecursive = (number) => {
  if (number === 2) {
    return 2
  }

  // recursively
  return number * findFactorialRecursive(number - 1)
}

const findFactorialIterative = (number) => {
  let answer = 1
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer
}

// findFactorialIterative(3)
console.log(findFactorialRecursive(3)) // O(n)
console.log(findFactorialIterative(3)) // O (n)

// Factorial
// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
