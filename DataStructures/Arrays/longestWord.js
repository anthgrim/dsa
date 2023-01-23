function LongestWord(sen) {
  const sanitized = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
  const words = sanitized.split(' ')

  let longest = words[0]
  if (words.length === 1) {
    return longest
  }

  for (let i = 0; i < words.length; i++) {
    const next = i + 1
    if (next === words.length) {
      break
    } else {
      if (words[next].length > words[i].length) {
        longest = words[next]
      }
    }
  }

  // code goes here
  return longest
}

console.log(LongestWord('fun&!! time'))
