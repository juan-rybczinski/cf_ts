type TName = {
  name: string;
}

type TAge = {
  age: number;
}

const iu/* : TName TAge */ = {
  name: '아이유',
  age: 30,
};

const testName: TName = iu;
const testAge: TAge = iu;
