// Queues
// First in First out
// enque -> Add one to the last
// deque -> Remove first in line
// peek -> view first in line

class LinkedNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  enque(value) {
    const newNode = new LinkedNode(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  deque() {
    const firstNode = this.head
    const nextNode = firstNode.next

    this.head = nextNode
    this.length--
    console.log(firstNode)
    return firstNode
  }

  peek() {
    console.log(this.head)
    return this.head
  }

  checkQue() {
    const dataArray = []
    let currentNode = this.head

    while (currentNode) {
      dataArray.push(currentNode.value)
      currentNode = currentNode.next
    }

    console.log(dataArray)
    return dataArray
  }
}

const myQueue = new Queue(45)
myQueue.enque(37)
myQueue.enque(70)
myQueue.deque()
myQueue.checkQue()
