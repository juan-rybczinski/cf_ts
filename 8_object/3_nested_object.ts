type TPersonality = {
  name: string;
  age: number;
}

interface IPersonality {
  name: string;
  age: number;
}

type TPerson = {
  identity: TPersonality;
  nationality: string;
}

interface IPerson {
  identity: IPersonality;
  nationality: string;
}

const iu: TPerson = {
  identity: {
    name: '아이유',
    age: 32,
  },
  nationality: '한국',
};

const yuJin: IPerson = {
  identity: {
    name: '안유진',
    age: 23,
  },
  nationality: '한국',
};