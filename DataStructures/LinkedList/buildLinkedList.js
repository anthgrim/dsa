// 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const node = new Node(value)
    this.tail.next = node
    this.tail = node
    this.length++
  }

  prepend(value) {
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.length++
  }

  traverseToIndex(index) {
    // Check params
    let currentNode = this.head
    let counter = 0
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  insert(index, value) {
    // Check params
    if (index >= this.length) {
      return this.append(value)
    }

    if (index === 0) {
      return this.prepend(value)
    }
    // Create new node
    const newNode = new Node(value)

    // Get leader node
    const leaderNode = this.traverseToIndex(index - 1)
    const pointer = leaderNode.next

    // Update pointers
    leaderNode.next = newNode
    newNode.next = pointer

    this.length++
    return this.printList()
  }

  remove(index) {
    if (index === 0) {
      const next = this.head.next
      this.head = next
    }

    // Get the leader node
    const leaderNode = this.traverseToIndex(index - 1)

    // Get the removed node
    const removedNode = leaderNode.next

    // If the removed node is tail
    if (removedNode.next === null) {
      leaderNode.next = null
      this.tail = leaderNode
      this.length--
      return this.printList()
    }

    // Set the leaderNode next to the new pointer
    leaderNode.next = removedNode.next
    this.length--
    return this.printList()
  }

  reverse() {
    // Make the head the tail and the tail the head and
    // everything in between should be pointing to the
    // opposite site

    // Return if the length is one
    if (this.length === 1) {
      return
    }

    let currentNode = this.head
    this.tail = this.head
    let secondNode = currentNode.next

    while (secondNode) {
      const consecutiveToSecond = secondNode.next
      secondNode.next = currentNode
      currentNode = secondNode
      secondNode = consecutiveToSecond
    }

    this.head.next = null
    this.head = currentNode
    this.printList()
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array)
    return array
  }
}

const mylist = new LinkedList(10)
mylist.prepend(1)
mylist.append(5)
mylist.append(16)
mylist.printList()
mylist.reverse()

// Architecture
// doubly = {
//   head: {
//     prev: null,
//     value: value,
//     next: {
//       prev: head,
//       value: value,
//       next: {
//         prev: head,
//         value: value,
//         next: {

//         }
//       }
//     }
//   }
// }

class DoublyNode {
  constructor(value) {
    this.previous = null
    this.value = value
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      previous: null,
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new DoublyNode(value)

    newNode.previous = this.tail
    this.tail.next = newNode

    this.tail = newNode
    this.length++
  }

  prepend(value) {
    const newNode = new DoublyNode(value)

    this.head.previous = newNode
    newNode.next = this.head

    this.head = newNode
    this.length++
  }

  getNodeAtIndex(index) {
    let currentNode = this.head
    let count = 0

    while (count !== index) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  insertAtIndex(index, value) {
    const newNode = new DoublyNode(value)

    // Get the lead node
    const leadNode = this.getNodeAtIndex(index - 1)

    // Get the following to the current lead
    const currentNextToLead = leadNode.next

    leadNode.next = newNode
    newNode.previous = leadNode

    newNode.next = currentNextToLead
    currentNextToLead.previous = newNode
    this.length++
  }

  removeAtIndex(index) {
    const targetNode = this.getNodeAtIndex(index)

    const prevNode = targetNode.previous
    const nextNode = targetNode.next

    prevNode.next = nextNode
    nextNode.previous = prevNode
    this.length--
  }

  printList() {
    const valueArray = []
    let currentNode = this.head

    while (currentNode !== null) {
      valueArray.push(currentNode.value)
      currentNode = currentNode.next
    }

    console.log(valueArray)
  }

  printBackwards() {
    const valuesArray = []
    let currentNode = this.tail

    while (currentNode !== null) {
      valuesArray.push(currentNode.value)
      currentNode = currentNode.previous
    }

    console.log(valuesArray)
    return valuesArray
  }
}

const myDoubly = new DoublyLinkedList(15)

// myDoubly.append(25)
// myDoubly.prepend(0)
// myDoubly.prepend(159)
// myDoubly.insertAtIndex(2, 99)
// myDoubly.printList()
// myDoubly.printBackwards()
