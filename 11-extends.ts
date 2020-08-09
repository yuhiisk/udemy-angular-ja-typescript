// クラス
class Animal {

  age: number = 10;

  constructor(public isCry: boolean, public legs: number) {  }

  cry(): void {
    if (this.isCry) {
      alert(`legs: ${this.legs}`);
    }
  }
}

class Dog extends Animal {

  constructor(public isCry: boolean, public legs: number) {
    super(isCry, legs);
  }

  cry(): void {
    console.log('dog is cry!');
    super.cry();
  }
}

const dog = new Dog(true, 4);
dog.cry();
