// インターフェイス (Interface)
interface Animal {
  name: string;
  legs: number;
  isCry: boolean;
  cry(): void;
}

interface SuperAnimal extends Animal {
  canRun: boolean;
}

class Dog implements SuperAnimal {
  name: string = 'Maru';
  legs: number = 4;
  isCry: boolean = true;
  canRun: boolean = true;

  cry(): void {
    if (this.isCry) {
      console.log('Bow, wow!');
    }
  }
}

// オブジェクトにも適用可能
let Dog: Animal = {
  name: 'Maru',
  legs: 4,
  isCry: true,
  cry: function () {
    console.log('Bow wow!');
  }
}
