// クラス
class Animal {

  age: number = 10;
  private _legs = 1;

  constructor(public isCry: boolean) { }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }

  // アクセサメソッド(getter, setter)
  get legs() {
    if (this._legs > 2) {
      return this._legs;
    }
  }

  set legs(value: number) {
    if (value > 1) {
      this._legs = value;
    }
  }

  // get email() {
  //   return this.formGroup.get('email');
  // }
  // dog.email
}

let dog = new Animal(true);
// dog.cry();
dog.legs = 4;
console.log(dog.legs);
