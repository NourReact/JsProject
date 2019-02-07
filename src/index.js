function sayHello(name) {
  return 'Hello ' + name;
}

let something = sayHello('Peter');

document.write(something); // writes it into browser window
console.log(something); // writes into firebug console

class Person {
  sayHello() {
    return 'Hello Peter';
  }
}

let peter = new Person();
let greeting = peter.sayHello();
console.log(greeting);

class Person2 {
  sayHello() {
    return 'Hello Nour';
  }
}

let nour = new Person2();
greeting = nour.sayHello();
console.log(greeting);

/////////////////////////////////////////
class Animal_1 {
  constructor(sound) {
    this.sound_ = sound;
  }

  get sound() {
    return this.sound_;
  }
}

let animal1 = new Animal_1('bark');
console.log('through public property', animal1.sound);

let animal2 = new Animal_1('moo');
console.log(animal2.sound);

//////////////////////////////////////////////////

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }

  makeSound() {
    return 'random sound';
  }
}

class Dog extends Animal {
  makeSound() {
    return 'bark';
  }
}

let animal_1 = new Dog('xxx');
console.log(animal_1.sayName(), animal_1.makeSound());

let animal_2 = new Animal('yyy');
console.log(animal_2.sayName(), animal_2.makeSound());

////////////////////
var obj = {
  log: ['a', 'b', 'c', 'd'],

  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },

  set latest(myNewArray) {
    if (myNewArray.length === 0) {
     throw new Error('New Array can not be empty!');
    } else {
      this.log = myNewArray;
    }
  }
};

obj.latest = [1]; //calling setter
console.log(obj);
