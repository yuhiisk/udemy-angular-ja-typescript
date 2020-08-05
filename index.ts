// 文字列型
var title: string = 'Angular';
title = 'Angular!';

// 数値型
var n: number = 9;

// 真偽値型
var isOpen: boolean = true; // or false

// 配列型
var array: string[] = ['name', 'id', 'email'];

// タプル型
var data: [number, string, number] = [0, 'apple', 1];

// オブジェクト型
var options: { [key: string]: string } = {
  name: 'Yohei Isokawa',
  test: 'this is test'
};

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


// 共用型
var sample: string | number | boolean;
sample = 'Yohei';
sample = 100;
sample = true;


// 型推論
var unknown = 'string';
unknown = 10;