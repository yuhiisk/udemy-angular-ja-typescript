// クラス
class Animal {

  private _age: number = 10;

  constructor(public isCry: boolean, public legs: number) {  }

  cry(): void {
    if (this.isCry) {
      alert(`legs: ${this.legs}`);
    }
  }

  // アクセサメソッド（getter, setter）
  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error('年齢は0以上で無ければいけません');
    }
    this._age = value;
  }

  // formGroup.get('email')
  // get email() {
  //   return this.formGroup.get('email');
  // }
}

const dog = new Animal(true, 4);
// dog.cry();
dog.age = 14;
console.log(dog.age); // 14
