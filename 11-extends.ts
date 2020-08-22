// クラスの継承
class Animal {

  age: number = 10;

  constructor(public isCry: boolean) {
    this.age = 2;
  }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }
}

class Dog extends Animal {

  constructor(public isCry: boolean) {
    super(isCry);
    this.age = 10;
  }

  cry(): void {
    // if (this.isCry) {
    //   alert('Bow, wow'!);
    // }
    console.log('dog is cry!');
    super.cry();
  }
}

let dog = new Dog(true);
dog.cry();
