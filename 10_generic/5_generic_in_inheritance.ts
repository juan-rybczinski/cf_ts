class BaseCache<T> {
  data: T[] = [];
}

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

interface BaseGeneric {
  name: string;
}

class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

const yuJin = new Idol({
  name: 'yuJin',
  // age: 23,
});

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

const objectParser = <O, K extends keyof O>(obj: O, key: K) => obj[key];
console.log(objectParser(testObj, 'c'));

class Idol2 {
  type?: string;
}

class MaleIdol extends Idol2 {
  type: 'Male Idol' = 'Male Idol';
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;
const idol2: SpecificIdol<MaleIdol> = new MaleIdol();

