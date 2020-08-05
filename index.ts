let hoge: string = 'hoge';
let foo: string = 'foo';
let count: number = 10;
let isFoo: boolean = foo === 'foo';
let payment = {
  amount: 3000,
  currency: 'JPY',
  name: 'charge',
  date: 1596603007427,
  taxRate: 0.1,
  total: 0
};

// Function
function log(message: string): void {
  console.log(message);
}
log('Hello, TypeScript!!');

const getTotal = () => {
  const { amount, taxRate } = payment;
  const total = amount * taxRate;

  return { total, ...payment };
};

// Generic
class Store<T> {
  data: T | null = null;
  posts: Post[] = [];
  getData(): T|null {
    return this.data;
  }
}


let stringData = new Store<string>();


// Interface
interface Post {
  id: number;
  content: string;
  isDraft: boolean;
  attachments: object;
  created: string;
  updated: string;
}
