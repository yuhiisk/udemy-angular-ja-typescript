var foo = 'foo';

// var
// function logFoo() {
//   console.log(foo); // undefined
//   var foo = 'foo1';
//   console.log(foo); // foo1
// }

// let
function logFoo() {
  console.log(foo); // 
  let foo = 'foo1';
  console.log(foo); // 
}

logFoo();