/**
 * Union
 * or 조건으로 타입을 병합
 */
type stringOrBooleanType = string | boolean
let stringOrBoolean: stringOrBooleanType = '아이브';
stringOrBoolean = true;
// stringOrBoolean = undefined;

type stringBooleanNullType = string | boolean | null

type StateTypes = 'DONE' | 'LOADING' | 'Error';
let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

type StringListOrBooleanListType = string[] | boolean[]

let stringListOrBooleanList: StringListOrBooleanListType = [
  '아이유', '김고은', '박소담',
];
stringListOrBooleanList = [true, false, false, false];
// stringListOrBooleanList = [true, '아이유'];

type StringOrNumberListType = (string | number)[]
let stringOrNumberList: StringOrNumberListType = [
  1, 2, 3, '아이유', '레드벨벳',
];

stringOrNumberList = [1, 2, 3];
stringOrNumberList = ['아이유', '레드벨벳'];

interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHumanType = Animal | Human;

let animalOrHuman: AnimalOrHumanType = {
  name: '최지호',
  age: 32,
  address: '대한민국',
};
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

animalOrHuman = {
  name: '오리',
  age: 9,
};
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address);

type Person = {
  name: string;
  age: number;
}
type Cat = {
  breed: string;
  country: string;
}

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
  name: '코드팩토리',
  age: 32,
  breed: 'Yorkshire Terrier',
  country: '영국',
};