// Stacks
// Last in first Out
// pop -> remove last
// push -> add to last
// peek -> see last

class LinkedNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  getNodeAt(index) {
    let currentNode = this.head
    let counter = 0

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  push(value) {
    const newNode = new LinkedNode(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  pop() {
    const lastNode = this.tail
    const prevToTail = this.getNodeAt(this.length - 2)

    prevToTail.next = null
    this.tail = prevToTail
    this.length--
    this.checkStack()
    return lastNode
  }

  peek() {
    console.log(this.tail)
    return this.tail
  }

  checkStack() {
    const dataArray = []
    let currentNode = this.head

    while (currentNode) {
      dataArray.push(currentNode.value)
      currentNode = currentNode.next
    }

    console.log(dataArray)
  }
}

const myStack = new Stack(25)
myStack.push(35)
myStack.push(14)
const lastItem = myStack.pop()
myStack.push(99)
myStack.peek()
myStack.checkStack()

console.log('Last Item', lastItem)
