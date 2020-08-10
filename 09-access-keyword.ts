// クラス (Class)
class Animal {

  age: number = 10;

  constructor(public isCry: boolean, public legs: number) {  }

  cry(): void {
    if (this.isCry) {
      alert(`legs: ${this.legs}`);
    }
  }
}

const dog = new Animal(true, 4);
dog.cry();
