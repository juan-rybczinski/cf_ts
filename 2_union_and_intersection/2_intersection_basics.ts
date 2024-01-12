/**
 * Intersection
 * and 조건으로 타입을 병합
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContactsType = Human & Contacts;

let humanAndContacts: HumanAndContactsType = {
  name: '코드팩토리',
  age: 32,
  phone: '01012341234',
  address: 'Seoul',
};

// never
type NumberAndStringType = number & string;