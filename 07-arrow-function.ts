// アロー関数
// () => {}
let add = (x1: number, x2: number): number => x1 + x2;
// = return x1 + x2
console.log(add(1, 3));

let greet = name => `Hello, ${name}!!`;
let hello = () => 'Hello, World!!';

let getValue = () => {
  document.getElementById('app').getElementsByTagName('div').firstChild.getAttribute('value').toFixed(2);
};

var _this = this;
document.getElementById('button1').addEventListener('click', function() {
  console.log(_this); // <button></button>
});

// this = Window
document.getElementById('button1').addEventListener('click', () => {
  console.log(this); // Window
});