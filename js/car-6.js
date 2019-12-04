class Vehicle {
  constructor(name, fuel) {
      console.log(`I'm ${name}`)
      this.x = 0;
      this.y = 0;
      this.step = 1;
      this.name = name;
      this.fuel = fuel;
  }
  
  getCoords() {
      return `(${this.x}, ${this.y})`;
  }

  getFuel() {
      return `The fuel is ${this.fuel}L`;
  }

  useFuel() {
    if (this.fuel - this.step >= 0) {
      this.fuel -= this.step;
      return true;
    } else {
      return false;
    }
  }

  moveForward() {
    if (this.useFuel()) {
      this.x = this.x + this.step;
      return `Forward: ${this.getCoords()} ${this.getFuel()}`;
    } else {
      return this.noFuel();
    }
  }

  moveBack() {
    if (this.useFuel()) {
      this.x = this.x - this.step;
      return `Back: ${this.getCoords()} ${this.getFuel()}`;
    } else {
      return this.noFuel();
    }
  }

  noFuel() {
    return 'You do not have enough fuel to continue driving'
  }
}
// let v = new Vehicle('Tractor', 100);
// console.log(v.moveForward()); // '(1, 0) The fuel is 99L';  
// console.log(v.moveBack()); // '(0, 0) The fuel is 98L';

class Car extends Vehicle {
  constructor(name, fuel, nitro = false) {
    super(name, fuel);
    this.nitro = nitro;
  }

  turnOnNitro() {
    if (this.nitro) {
      this.step = 2;
      console.log('Nitro ON');
    }
  }

  turnOfNitro() {
    this.step = 1;
      console.log('Nitro OFF');
  }

  moveRight() {
    if (this.useFuel()) {
      this.y = this.y + this.step;
      return `Right: ${this.getCoords()} ${this.getFuel()}`;
    } else {
      return this.noFuel();
    }
  }

  moveLeft() {
    if (this.useFuel()) {
      this.y = this.y - this.step;
      return `Left: ${this.getCoords()} ${this.getFuel()}`;
    } else {
      return this.noFuel();
    }
  }
}

let honda = new Car('Honda', 7, true);
console.log('honda: ', honda);
honda.turnOnNitro();
console.log(honda.moveForward());
console.log(honda.moveRight());
console.log(honda.moveRight());
honda.turnOfNitro();
console.log(honda.moveLeft());
console.log(honda.moveBack());