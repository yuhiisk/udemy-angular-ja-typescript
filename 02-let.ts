// let変数
// let foo = 'foo';
let date = new Date();

if (true) {
  let foo = 'foo';
}
console.log(foo);

// {
//   let foo1 = 'foo1';
// }

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

for (let j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j);

var hoge = 'hoge';

function logHoge() {
  // console.log(hoge); // 
  let hoge = 'new hoge!';
  console.log(hoge); // new hoge!
}

logHoge();