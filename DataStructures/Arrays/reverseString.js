// Create a funtion that reverses a string
// 'Hi my name is Andrei'
// ierdnA si eman ym iH

const sample = 'Hi my name is Andrei'

const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Invalid'
  }

  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

const reversedSample = reverse(sample)
console.log(reversedSample)
