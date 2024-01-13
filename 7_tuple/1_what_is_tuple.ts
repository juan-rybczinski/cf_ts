let numberAndStringTuple: [number, string] = [23, '코드팩토리'];
numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple);

let unmodifiableTuple1: readonly [number, string] = [23, '코드팩토리'];
// unmodifiableTuple1.push('아이유');

let actressTuple = ['김고은', '박소담', '전여빈'] as const;
const actressTupleConst = ['김고은', '박소담', '전여빈'] as const;
const stringArray1 = [
  ...actressTuple,
  ...actressTupleConst,
];

const namedTuple: [name: string, age: number] = [
  '코드팩토리',
  32,
];
console.log(namedTuple);

const tuple1: [string, string] = ['아이유', '박소담'];
const tuple2: [number, number] = [1, 2];
// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;
let tuple5: [number, number] = tuple2;

let ive: [string, string] = ['장원영', '안유진'];
let stringArray2: string[] = ive;
// let ive2: [string, string] = stringArray2

const tuple2D: [string, number][] = [
  ['코드팩토리', 32],
  ['아이유', 31],
  ['김고은', 30],
];
