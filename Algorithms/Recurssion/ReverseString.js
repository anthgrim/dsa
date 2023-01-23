// Write a function that recurvesily reverse a string

/**
 *
 * @param {string} str
 * @returns {string} reversed
 */
const reverseString = (str) => {
  // if the string is empty
  if (str.length === 0) {
    return ''
  }

  // Grab the last
  let lastLetter = str[str.length - 1]

  const newString = str.slice(0, str.length - 1)
  return lastLetter + reverseString(newString)
}

console.log(reverseString('Hello World'))
