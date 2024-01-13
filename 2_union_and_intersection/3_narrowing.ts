/**
 * Narrowing
 * Union 타입에서 좀 더 구체적인 타입으로 유추하는 것
 */

// function chooseOne<A, B>(first: A, second: B) {
//   return Math.random() > 0.5 ? first : second;
// }

const chooseOne = (first: any, second: any) => Math.random() > 0.5 ? first : second;

// (1) Assignment Narrowing
let numberOrString: number | string = '아이유';
numberOrString;

// (2) typeof Narrowing
numberOrString = chooseOne(1123, '아이유');
if (typeof numberOrString === 'number') {
  numberOrString;
} else {
  numberOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string = chooseOne(null, '아이유');
if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

// (4) Equality Narrowing
let numberOrString2: number | string = chooseOne(1123, '아이유');
let stringOrBool2: string | boolean = chooseOne(true, '1');
if (stringOrBool2 === numberOrString) {
  numberOrString2;
  stringOrBool2;
} else {
  numberOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null = chooseOne(1123, chooseOne('안유진', null));
if (typeof numberOrStringOrNull === 'number') {
  numberOrStringOrNull;
} else {
  numberOrStringOrNull;
}

// (5) in Operator Narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: '안유진',
  age: 23,
};

let dog: Dog = {
  name: '오리',
  type: 'Yorkshire Terrier',
};

let humanOrDog: Human | Dog = chooseOne(human, dog);
if ('type' in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// (6) instanceof Narrowing
let dateOrString: Date | string = chooseOne(new Date(), '코드팩토리');
if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// (7) Discrimination Union Narrowing
interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog',
  breed: 'string';
}

interface Fish2 {
  type: 'fish';
  length: number;
}

type HumanOrDog = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog = chooseOne({type: 'human', height: 177}, chooseOne({type: 'dog', breed: 'Yorkshire Terrier'}, {type: 'fish', length: 12}));
if (humanOrDog2.type === 'human') {
  humanOrDog2;
} else {
  humanOrDog2;
}

// (8) Exhaustiveness Checking Narrowing
switch (humanOrDog2.type) {
  case 'human':
    humanOrDog2;
    break;
  case 'dog':
    humanOrDog2;
    break;
  case 'fish':
    humanOrDog2;
    break;
  default:
    humanOrDog2;

    const _check: number = humanOrDog2;
}