/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const frequencies = {}

  for (let i = 0; i < s.length; i++) {
    if (frequencies.hasOwnProperty(s[i])) {
      const freq = frequencies[s[i]]
      frequencies[s[i]] = freq + 1
    } else {
      frequencies[s[i]] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (frequencies[s[i]] === 1) return i
  }

  return -1
}

console.log(firstUniqChar('loveleetcode'))
