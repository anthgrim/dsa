const stringsArr = ['a', 'b', 'c', 'd']
// 4 * 4 = 16 bytes of storage

// Methods
// Push -> Add something at the end of the array
stringsArr.push('e') // O(1)
console.log(stringsArr)

// pop -> removes the last item from the array
stringsArr.pop() // O(1)
stringsArr.pop()
console.log(stringsArr)

// Unshift -> Add an item at the beginning of the array
stringsArr.unshift('x')
console.log(stringsArr)

// Splice -> Add item at a given index
stringsArr.splice(2, 0, 'l') // O(n/2) => O(n)
console.log(stringsArr)
