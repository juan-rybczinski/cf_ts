// Statement
function add(x: number, y: number) {
  return x + y;
}

function subtract(x: number, y: number) {
  return x - y;
}

function multiply(x: number, y: number) {
  return x * y;
}

function divide(x: number, y: number) {
  return x / y;
}

// Expression
type CalculateType = (x: number, y: number) => number;
const add2: CalculateType = (x, y) => x + y;
const subtract2: CalculateType = (x, y) => x - y;
const multiply2: CalculateType = (x, y) => x * y;
const divide2: CalculateType = (x, y) => x / y;