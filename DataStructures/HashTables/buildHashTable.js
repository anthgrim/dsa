class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  #hash(key) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key, value) {
    const index = this.#hash(key)
    if (!this.data[index]) {
      this.data[index] = []
      this.data[index].push([key, value])
    } else {
      this.data[index].push([key, value])
    }
  }

  get(key) {
    const index = this.#hash(key)
    if (this.data[index]) {
      return this.data[index][0][1]
    }
    return undefined
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('apples', 1000)
myHashTable.set('grapes', 10)
console.log(myHashTable)
console.log(myHashTable.get('apples'))
console.log(myHashTable.get('grapes'))
