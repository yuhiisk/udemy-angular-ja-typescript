// ジェネリック (Generics)
class NumberStore {
  data: number;
}

class StringStore {
  data: string;
}

// class AnyStore {
//   data: any;
// }
class Store<T> {
  data: T;
  getStore(): T {
    return this.data;
  }
}
let stringData = new Store<string>();
stringData.data = 'X';
console.log(stringData.getStore());

let numberData = new Store<number>();
numberData.data = 10000;
console.log(numberData.getStore());

class Component<T, U> { // T(Type), U, V, T1, T2, T3
  name: T;
  created: U;
}
let component = new Component<string, number>();
component.name = 'app';
component.created = Date.now();
console.log(component);

// component.created = '2020/04/01';