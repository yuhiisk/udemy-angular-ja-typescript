// 関数
function greet(name: string = 'Yohei'): void {
  console.log(`Hello World! ${name}!!`);
}
greet();
greet('Bob!');

// 可変長引数
function sum(...values: number[]): number {
  return values.reduce((prev, current) => {
    return prev + current;
  });
}
console.log(sum(1, 3, 5, 8));