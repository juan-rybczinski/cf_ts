let number: number;
number = 10;

// number.toUpperCase();
// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => x * y;

let arg1: any = '코드팩토리';
let arg2: any = false;

console.log(multiplyTwo(arg1, arg2));
// multiplyTwo('코드팩토리', true);

const callbackRunner = (x: number, y: number, callback: any) => callback(x);
const callback = (x: number, y: number) => x * y;
console.log(callbackRunner(5, 4, callback));