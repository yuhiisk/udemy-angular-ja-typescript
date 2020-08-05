// 文字列型
var title: string = 'Angular';
title = 'Angular!';

// 数値型
var n: number = 9;

// 真偽値型
var isOpen: boolean = true; // or false

// 配列型
var keywords: string[] = ['name', 'email', 'body'];

// タプル型
var payment: [number, string, number] = [1, 'apple', 3000];
var _payment: (string|number)[] = [1, 'apple', 3000];

// オブジェクト型
var options: { [key: string]: string } = {
  name: 'Yohei Isokawa',
  test: 'this is test'
};
// array or object. (typeof演算子でobject判定できるデータ)
var post: object = [{ id: 12, content: 'lorem ipsum' }];

// enum型
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Ctrl = 17,
  Alt = 18,
  PauseBreak = 19,
}

console.log(KeyCode.Backspace);

enum ErrorCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}

console.log(ErrorCode.OK, ErrorCode.BAD_REQUEST);

enum Character {
  Bob,
  Dad,
  Mom,
}

console.log(Character.Bob, Character.Dad, Character.Mom);

var something: any = 'foo';
something = 100;
something = true;


// 共用型(Union型)
var sample: string | number | boolean;
sample = 'Yohei';
sample = 100;
sample = true;

// null, undefined
var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;
// console.log(el);

// 型推論
var unknown = 'string';
unknown = 10;