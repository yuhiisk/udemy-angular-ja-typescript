// アロー関数
// () => { }

let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
console.log(add(1, 3));

let hello = name => `Hello, ${name}!`;
console.log(hello('Yohei'));

let getValue = (): number => { 
  return document.getElementById('app').getElementsByTagName('div').firstChild.getAttribute('value').toFixed(2);
}

document.getElementById('button1').addEventListener('click', function() {
  console.log(this); // <button></button>
});

// this => Window
document.getElementById('button1').addEventListener('click', () => {
  console.log(this); // Window
});