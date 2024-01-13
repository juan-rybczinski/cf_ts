let anyValue: any;
anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;
unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

let anyType1: any = anyValue;
let unknownType1: unknown = anyValue;
let booleanType1: boolean = anyValue;
let arrayType1: string[] = anyValue;
let objectType1: {} = anyValue;
let nullType1: null = anyValue;
let undefinedType1: undefined = anyValue;

let anyType2: any = unknownValue;
let unknownType2: unknown = unknownValue;
// let booleanType2: boolean = unknownValue;
// let arrayType2: string[] = unknownValue;
// let objectType2: {} = unknownValue;
// let nullType2: null = unknownValue;
// let undefinedType2: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

const isString = (target: unknown): target is string  => typeof target === 'string';
let testVal: unknown;
if (isString(testVal)) {
  testVal
}

// Union
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;
type anyOrU = any | unknown;

// Intersection
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;
type anyAndU = any & unknown;

// Operator
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2
// number1 - number2
// number1 * number2
// number1 / number2
// number1 % number2

number1 === number2
number1 == number2
number1 !== number2
number1 != number2