// ジェネリック (Genrics)
class NumberStore {
  data: number;
}

class StringStore {
  data: string;
}

// class AnyStore {
//   data: any;
// }

class Store<T> { // T(Type), U , V , T1, T2, T3
  data: T; // number
  getStore(): T {
    return this.data;
  }
}

let stringData = new Store<number>();
let booleanData = new Store<boolean>();

function hello<T>(keyword: T) {
  console.log(`Log: ${keyword}.`);
}
hello<string>('Hello, Yohei!');
hello<number>(10000);

class Component<T, U> {
  name: T;
  created: U;
}
let component = new Component<string, number>();
// component.created = '2020/04/01';