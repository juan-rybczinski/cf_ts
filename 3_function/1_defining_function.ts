// Define Function
const printName = (name: string) => console.log(`Hello, ${name}!`);
const returnTwoCouples = (person1: string, person2: string) => `${person1}과 ${person2}는 사귀고 있습니다.`;
console.log(returnTwoCouples('아이유', '코드팩토리'));

// Optional Parameter
const multiplyOrReturn = (x: number, y?: number) => y ? x * y : x;
console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

const multiplyOrReturn2 = (x: number, y: number = 20) => x * y;
console.log(multiplyOrReturn2(10, 20));
console.log(multiplyOrReturn2(10));

// 나머지 매개변수
const getInfiniteParameters = (...args: string[]) => args.map((x) => `너무 좋아, ${x}`);
console.log(getInfiniteParameters('아이유', '아이브', '블랙핑크'));

// Return Type
const chooseOne = () => Math.random() > 0.5 ? 10 : '10';
chooseOne();

const subtractTwoNumbers = (x: number, y: number): number => {
  // return '이게 반환이 되나?'
  return x - y;
};

/**
 * 특수 반환 타입
 */
// void
const doNotReturn = (): void => {
  console.log('저는 반환을 하지 않습니다');
  // return 0;
  return;
};
doNotReturn();

const neverEndingLoop = (): never => {
  while (true) {

  }
};

const throwError = (): never => {
  throw Error();
};