class BinarySearchNode {
  constructor(value) {
    this.left = null
    this.value = value
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new BinarySearchNode(value)

    if (!this.root) {
      this.root = newNode
      return
    } else {
      let currentNode = this.root

      while (true) {
        if (value < currentNode.value) {
          // Go to left
          if (!currentNode.left) {
            currentNode.left = newNode
            return
          } else {
            currentNode = currentNode.left
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode
            return
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  lookUp(value) {
    if (!this.root) {
      return false
    }

    let currentNode = this.root

    if (currentNode.value === value) {
      return currentNode
    }

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }

      if (currentNode && currentNode.value === value) {
        return currentNode
      }
    }

    return false
  }
}

const myTree = new BinarySearchTree()

myTree.insert(9)
myTree.insert(4)
myTree.insert(1)
myTree.insert(6)
myTree.insert(20)
myTree.insert(170)
myTree.insert(15)

console.log(myTree.lookUp(20))
console.log(myTree.lookUp(15))
console.log(myTree.lookUp(99))
