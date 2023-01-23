class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
  }

  pop() {
    const item = this.data[this.length - 1]
    this.#removeLast()
    return item
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.#removeLast()
  }

  #removeLast() {
    delete this.data[this.length - 1]
    this.length--
  }
}

const myArray = new MyArray()
myArray.push('One')
myArray.push('two')
myArray.push('Alien')
myArray.push('Alien')
console.log(myArray.get(1))
myArray.delete(2)
myArray.pop()
console.log(myArray)
