// クラス
class Animal {

  age: number = 10;

  constructor(public isCry: boolean) { }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }
}

let dog = new Animal(true);
dog.cry();
