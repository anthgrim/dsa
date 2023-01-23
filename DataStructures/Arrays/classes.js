class Player {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type, power) {
    super(name, type)
    this.power = power
  }

  play() {
    console.log(`I'm a ${this.type}`)
  }

  showOff() {
    console.log(`My power is ${this.power}`)
  }
}

const newPlayer = new Player('Thom', 'Bird')
newPlayer.introduce()

const wizard1 = new Wizard('Kevin', 'Fire', 'Throw Flames')
wizard1.showOff()
wizard1.introduce()
